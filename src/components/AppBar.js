import React from "react";
import SettingContainer from "./SettingContainer";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AppBar(props) {
  // barLogoContainer
  return (
    <nav className="appBar">
      <div className="barLogo">
      <button aria-label="Home" type="button" onClick={props.onStartOver}>
        <div
          className={
            props.season || props.time || props.color ? "homeLogo logoHide" : "homeLogo"
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
          <FontAwesomeIcon icon="home" size="4x" />
        </div>
        <span className="home">HOME</span>
      </button>
        </div>
      <SettingContainer
        season={props.season}
        time={props.time}
        color={props.color}
      />
    </nav>
  );
}
export default AppBar;
