import React from "react";
import SettingContainer from "./SettingContainer";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AppBar(props) {
  // barLogoContainer
  return (
    <nav className="appBar">
      <button role="restart" type="button" className="barLogo" onClick={props.onStartOver}>
        <div
          className={
            props.season || props.time || props.color ? "logoHide" : ""
          }
        >
          <Logo />
        </div>
        <div
          className={
            props.season || props.time || props.color
              ? "homeIcon iconShow"
              : "homeIcon"
          }
        >
          <FontAwesomeIcon icon="home" size="3x" />
        </div>
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
