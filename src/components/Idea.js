import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Idea({current, color, domain, url, icon}) {
    return (
      <div className={"ideasPhotoPage " + color}>
        <img
          src={url}
          alt={domain + " photo idea for " + current}
        ></img>
        <div className={"ideasIconContainer " + color}>
          <span className="ideaDomainAndIcon">
            <FontAwesomeIcon icon={icon} size="4x" />
            <h3>{domain}</h3>
          </span>
        </div>
        <div className={"ideaBottomBar " + color}></div>
      </div>
    );
}
export default Idea;