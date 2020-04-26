import React, { Component } from "react";
import Setting from "./Setting";

class Choice extends Component {
  render() {
    return (
      <div className={this.props.selected ? "choice selected" : "choice"}>
        <button
          role={ "choose " + this.props.choice}
          onClick={() => {
            this.props.onSeason(this.props.choice);
          }}
        >
          <label htmlFor={this.props.choice}>   
            <div className="choiceIcon">
              <Setting icon={this.props.choice} size="1x" />
            </div>
          </label>
          <input
            type="radio"
            id={this.props.choice}
            name={this.props.choiceGroup}
            onChange={() => {
              this.props.onSeason(this.props.choice);
            }}
          ></input>
        </button>
      </div>  
    );
  }
}
export default Choice;

      // choiceGroup="season"
      //       choice="spring"
      //       selected={this.props.currentSeason === "spring"}
      //       onSeason={this.props.onSeason}
