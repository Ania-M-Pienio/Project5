import React from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Splash(props) {
  return (
    <section className="splash">
      {/* [1] */}
      <div className="splashLogo">
        <Logo expand={props.expand}></Logo>
      </div>

      {/* [2] */}
      <div className="splashControl">
        <button type="button" onClick={props.onStart}>
          <span>START</span>{" "}
          <FontAwesomeIcon icon="sign-in-alt" size="1x"></FontAwesomeIcon>
        </button>
      </div>

      {/* [3] */}
      <div className="splashInfo">
        <span></span>
        <h1> GET IDEAL WEDDING COLOURS </h1>
      </div>
    </section>
  );
}
export default Splash;
