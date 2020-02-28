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

        <div className="barLogo">
          <Logo />
        </div>

        <SettingContainer/>
        
      </nav>
    );
  }
}

export default AppBar;
