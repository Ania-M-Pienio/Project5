import React, { Component, Fragment } from "react";
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
        { type: "daytime", icon: "sun" },
        { type: "evening", icon: "moon" },
        { type: "color", icon: "palette" }
      ]
    };
  }

  render() {
    let thisGraphic = "";
    let icons = [];
    let colorOne = "";
    let colorTwo = "";
    // determining which kind of icon should be used in the display of the setting
    if (this.props.icon.includes("_")) {
      icons = this.state.graphics.filter(i => i.type === "color");
      colorOne = this.props.icon.split("_")[0];
      colorTwo = this.props.icon.split("_")[1];
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
        <h3>
          {this.props.icon.includes("_") ? (
            <Fragment>
              {" "}
              <span>{colorOne}</span> &amp; <span>{colorTwo}</span>{" "}
            </Fragment>
          ) : (
            thisGraphic.type
          )}
        </h3>
      </div>
    );
  }
}

export default Setting;
