import React, { Component } from "react";
import SettingContainer from "./SettingContainer";
import Logo from "./Logo";

class AppBar extends Component {

  //Render
  render() {
    return (
      <nav className="appBar">
        <button
          type="button"
          className="barLogo"
          onClick={this.props.onStartOver}
        >
          <Logo />
        </button>
        <SettingContainer
          season={this.props.season}
          time={this.props.time}
          color={this.props.color}
        />
      </nav>
    );
  }
}

export default AppBar;
