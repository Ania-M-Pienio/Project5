import React from "react";
import Logo from "./Logo";

function Splash(props) {

    return (
      <section className="splash">
        <div className="splashLogo">
          <Logo />
        </div>
        <h1> WEDDING THEME IDEAS </h1>
        <ul>
          <li>
            [<span> {"1"} </span> {"] invites    ["} <span> {"2"} </span>{" "}
            {"] floral "}
          </li>
          <li>
            [<span> {"3"} </span> {"] centerpieces    ["} <span> {"4"} </span>{" "}
            {"] tableware "}
          </li>
          <li>
            [<span> {"5"} </span> {"] venues   ["} <span> {"6"} </span>{" "}
            {"] cakes "}
          </li>
          <li>
            [<span> {"7"} </span> {"] favors   ["} <span> {"8"} </span>{" "}
            {"] patterns "}
          </li>
        </ul>
        <button type="button" onClick={props.onStart}>
          GET STARTED
        </button>
      </section>
    );
}

export default Splash;
