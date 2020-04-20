import React from "react";
import Logo from "./Logo";

function Splash(props) {
    return (
      <section className="splash">
        <div className="splashLogo">
          <Logo expand={props.expand}></Logo>
        </div>
          <button type="button" onClick={props.onStart}>
            GET STARTED
          </button>
 
          <h1> GET IDEAL WEDDING COLOURS </h1>

      </section>
    );
}

export default Splash;
