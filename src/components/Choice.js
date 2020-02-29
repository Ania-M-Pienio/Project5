import React, { Component } from "react";
import Setting from "./Setting";

class Choice extends Component {
  render() {
    return (
      <div className="choice">
        <label htmlFor={this.props.choice}>
          <div className="choiceIcon">
            <Setting icon={this.props.choice} size="3x" />
          </div>
        </label>
        <input
          type="radio"
          id={this.props.choice}
          name={this.props.choiceGroup}
        ></input>
      </div>
    );
  }
}
export default Choice;
