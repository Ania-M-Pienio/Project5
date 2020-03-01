import React, { Component } from "react";



class ColorChoice extends Component {
  render() {
    return (
      <div className="colorChoice">
        <label htmlFor={this.props.choice}>
          <div className="choiceIcon">
            <div className="colorOne"></div>
            <div className="colorTwo"></div>
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
export default ColorChoice;