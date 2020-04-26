import React from "react";
import SettingContainer from "./SettingContainer";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AppBar(props) {
  return (
    <nav className="appBar">
      {/* [1] logo */}
      <div className="barLogo">
        <button aria-label="Home" type="button" onClick={props.onStartOver}>
          <div
            className={
              props.season || props.time || props.color
                ? "homeLogo logoHide"
                : "homeLogo"
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
        </button>
      </div>
      {/* [2] settings */}
      <SettingContainer
        season={props.season}
        time={props.time}
        color={props.color}
      />
    </nav>
  );
}
export default AppBar;

