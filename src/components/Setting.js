import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Setting extends Component {
  constructor() {
    super();
    this.state = {
      icon: "",
      type: "",
      size: "",
      graphics: [
        { type: "winter", icon: "snowflake" },
        { type: "spring", icon: "leaf" },
        { type: "summer", icon: "umbrella-beach" },
        { type: "fall", icon: "cloud-rain" },
        { type: "day", icon: "sun" },
        { type: "eve", icon: "moon" },
        { type: "color", icon: "palette" }
      ]
    };
  }

  getType = type => {
    if (type === "day") {
      return "daytime";
    } else if (type === "eve") {
      return "evening";
    } else if (this.props.icon.includes("_")) {
      return this.props.icon;
    } else {
      return type;
    }
  };

  componentDidMount() {
    let thisGraphic = "";
    let icons = [];
    if (this.props.icon.includes("_")) {
      icons = this.state.graphics.filter(i => i.type === "color");
    } else {
      icons = this.state.graphics.filter(i => i.type === this.props.icon);
    }
    thisGraphic = icons[0];
    this.setState({
      icon: thisGraphic.icon,
      type: this.getType(thisGraphic.type),
      size: this.props.size
    });
  }

  render() {
    return (
      <div className="setting">
        {this.state.icon ? (
          <FontAwesomeIcon icon={this.state.icon} size={this.state.size} />
        ) : (
          ""
        )}
        <h3>{this.state.type}</h3>
      </div>
    );
  }
}

export default Setting;
