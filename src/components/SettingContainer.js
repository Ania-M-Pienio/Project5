import React, { Component } from "react";
import Setting from "./Setting";

class SettingContainer extends Component {
  constructor() {
    super();
    this.state = {
      isSeason: "summer", // these values will come from props
      isTime: "eve",
      isColor: "periwinkle_blue",
    }
  }


  render() {
    return (
      <div className="settingContainer">
        {this.state.isSeason ? <Setting icon={this.state.isSeason} /> : ""}
        {this.state.isTime ? <Setting icon={this.state.isTime} /> : ""}
        {this.state.isColor ? <Setting icon={this.state.isColor} /> : ""}
   
      </div>
    );
  }
}

export default SettingContainer;
