import React, { Component } from "react";
import SettingContainer from "./SettingContainer";
import Logo from "./Logo";

class AppBar extends Component {
  // Constructor
  constructor() {
    super();
    this.state = {};
  }

  //Render
  render() {
    return (
      <nav className="appBar">
        <Logo />
        <SettingContainer />
      </nav>
    );
  }
}

export default AppBar;
