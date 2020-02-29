import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Setting extends Component {
  constructor() {
    super();
    this.state = {
      graphic: {},
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
    let thisGraphic = "";
    let icons = [];
    if (this.props.icon.includes("_")) {
      icons = this.state.graphics.filter(i => i.type === "color");
    } else {
      icons = this.state.graphics.filter(i => i.type === this.props.icon);
    }
    thisGraphic = icons[0];
    this.setState({
      graphic: thisGraphic,
    }, () => {
      console.log(this.state.graphic);
    })
  }

  render() {
    return (
      <div className="setting">
        <FontAwesomeIcon icon={this.state.graphic.icon} />
        <h3>{this.state.graphic.type}</h3>
      </div>
    );
  }
}

export default Setting;
