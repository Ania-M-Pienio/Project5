import React, { Component } from "react";
import Setting from "./Setting";

class Choice extends Component {
  render() {
    return (
      <div className={this.props.selected ? "choice selected" : "choice" }>
        <label htmlFor={this.props.choice}>
          <div className="choiceIcon">
            <Setting icon={this.props.choice} size="2x" />
          </div>
        </label>
        <input
          type="radio"
          id={this.props.choice}
          name={this.props.choiceGroup}
          onChange={() => {this.props.onSeason(this.props.choice)}}
        ></input>
      </div>
    );
  }
}
export default Choice;
