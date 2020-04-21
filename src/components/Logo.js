import React from "react";
import m8 from "../assets/BM8B.png";
import leafLV from "../assets/leaf-lv.png";
import leafRV from "../assets/leaf-rv.png";
import leafC from "../assets/leaf-c.png";

function Logo() {
  return (
    <div className="logo">
      <div className="logoBorder">
        <div className="leaf leafLeft">
          <img src={leafRV} className="leafImage leafR" alt="bride"></img>
        </div>
        <div className="leaf leafLeftBottom">
          <img src={leafRV} className="leafImage leafR" alt="bride"></img>
        </div>
        <div className="leaf leafCenter">
          <img src={leafC} className="leafImage leafC" alt="bride"></img>
        </div>
        <img src={m8} alt="Bride Mate Logo"></img>
        <div className="leaf leafCenterBottom">
          <img src={leafC} className="leafImage leafC" alt="bride"></img>
        </div>
        <div className="leaf leafRight">
          <img src={leafLV} className="leafImage leafL" alt="bride"></img>
        </div>
        <div className="leaf leafRightBottom">
          <img src={leafLV} className="leafImage leafL" alt="bride"></img>
        </div>
      </div>
    </div>
  );
}

export default Logo;
