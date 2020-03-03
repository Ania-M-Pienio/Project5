import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ColorChoice extends Component {
  render() {
    return (
      <div
        className={this.props.selected ? "colorChoice selected" : "colorChoice"}
      >
        <button
          onClick={() => {
            this.props.onColor(this.props.choice);
          }}
        >
          <h3 className="colorTitle">
            <span>{this.props.choiceSet.colorOne} </span>
            <span>{this.props.choiceSet.colorTwo} </span>
          </h3>

          <label htmlFor={this.props.choice}>
            <div className="colorChoiceIcon">
              <div
                className={"colorTwo " + this.props.choiceSet.colorTwo}
              ></div>
              <div
                className={"colorOne " + this.props.choiceSet.colorOne}
              ></div>
              <span className="colorSelect">
                <FontAwesomeIcon icon="palette" size="1x" />
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
        </button>
      </div>
    );
  }
}
export default ColorChoice;
