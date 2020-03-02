import React from "react";
import SettingContainer from "./SettingContainer";
import Logo from "./Logo";

function AppBar(props) {
    return (
      <nav className="appBar">
        <button
          type="button"
          className="barLogo"
          onClick={props.onStartOver}
        >
          <Logo />
        </button>
        <SettingContainer
          season={props.season}
          time={props.time}
          color={props.color}
        />
      </nav>
    );
  }
export default AppBar;
