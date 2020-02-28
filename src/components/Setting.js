import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Setting extends Component {
  constructor() {
    super();
    this.state = {
      icon: "",
      graphics: [
        { type: "winter", icon: "snowflake" },
        { type: "spring", icon: "leaf" },
        { type: "summer", icon: "umbrella-beach" },
        { type: "fall", icon: "cloud-rain" },
        { type: "day", icon: "sun" },
        { type: "eve", icon: "moon" },
        { type: "color", icon: "palette" },
      ]
    };
  }

  componentDidMount() {
    let graphic = "";
    let icons = [];
    if (this.props.icon.length === 2) {
      icons = this.state.graphics.filter(i => i.type === "color");
    } else {
      icons = this.state.graphics.filter(i => i.type === this.props.icon);
    }
    graphic = icons[0];
    this.setState({
      icon: graphic,
    })
  }

  render() {
    return (
      <div className="setting">
        <FontAwesomeIcon icon={this.state.icon.icon} />
        <h3>{this.state.icon.type}</h3>
      </div>
    );
  }
}

export default Setting;
