import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Setting extends Component {
  constructor() {
    super();
    this.state = {
      // all the differnt types of icons that the Setting could display
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

  render() {
    let thisGraphic = "";
    let icons = [];
    // determining which kind of icon should be used in the display of the setting
    if (this.props.icon.includes("_")) {
      icons = this.state.graphics.filter(i => i.type === "color");
    } else {
      icons = this.state.graphics.filter(i => i.type === this.props.icon);
    }
    // select the filtered icon every time component renders
    thisGraphic = icons[0];

    return (
      <div className="setting">
        {this.props.icon ? (
          <FontAwesomeIcon icon={thisGraphic.icon} size={this.props.size} />
        ) : (
          ""
        )}
        <h3>{ this.props.icon.includes("_") ? this.props.icon : thisGraphic.type }</h3>
      </div>
    );
  }
}

export default Setting;
