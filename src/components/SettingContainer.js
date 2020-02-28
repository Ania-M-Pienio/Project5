import React, { Component } from "react";
import Setting from './Setting';

class SettingContainer extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="settingContainer">
        <Setting />
        <Setting />
        <Setting />
      </div>
    );
  }
}

export default SettingContainer;