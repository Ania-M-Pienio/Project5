import React from "react";
import m8 from "../assets/BM8B.png";
// import leaf from "../assets/leaf.png";
import leafRV from "../assets/leaf-rv.png";

function Logo() {
  return (
    <div className="logo">
      <div className="logoBorder">
        <div className="leafOne">
          <img
            src={leafRV}
            className="leaf1"
            alt="bride"
          ></img>
        </div>
        <img src={m8} alt="Bride Mate Logo"></img>
      </div>
    </div>
  );
}

export default Logo;

