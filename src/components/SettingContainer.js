import React, { Component } from "react";
import Setting from "./Setting";

class SettingContainer extends Component {
  constructor() {
    super();
    this.state = {
      isSeason: "summer",
      isTime: "eve",
      isColor: ["perwinkle", "purple"],
    };
  }

  render() {
    return (
      <div className="settingContainer">
        {this.state.isSeason ? <Setting icon={this.state.isSeason} /> : ""}
        {this.state.isTime   ? <Setting icon={this.state.isTime} />   : ""}
        {this.state.isColor  ? <Setting icon={this.state.isColor} />  : ""}       
      </div>
    );
  }
}

export default SettingContainer;
