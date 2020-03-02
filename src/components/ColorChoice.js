import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ColorChoice extends Component {
  render() {
    return (
      <div className={this.props.selected ? "colorChoice selected" : "colorChoice"}>
        <label htmlFor={this.props.choice}>
          <h3 className="colorTitle">{this.props.choice}</h3>
          <div className="colorChoiceIcon">
            <div className={"colorTwo " + this.props.choiceSet.colorTwo}></div>
            <div className={"colorOne " + this.props.choiceSet.colorOne}></div>
            <span className="colorSelect">
              <FontAwesomeIcon icon="palette" size="4x" />
            </span>
          </div>
        </label>
        <input
          type="radio"
          id={this.props.choice}
          name={this.props.choiceGroup}
          onClick={() => {
            this.props.onColor(this.props.choice);
          }}
        ></input>
      </div>
    );
  }
}
export default ColorChoice;
