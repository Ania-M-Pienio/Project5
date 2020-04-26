import React, { Component } from "react";
import Setting from "./Setting";

function Choice({choiceGroup, choice, selected, onSeason}) {

    return (
      <div className={selected ? "choice selected" : "choice"}>
        <button
          role={ "choose " + choice}
          onClick={() => {
            onSeason(choice);
          }}
        >
          <label htmlFor={choice}>   
            <div className="choiceIcon">
              <Setting icon={choice} size="1x" />
            </div>
          </label>
          <input
            type="radio"
            id={choice}
            name={choiceGroup}
            onChange={() => {
              onSeason(choice);
            }}
          ></input>
        </button>
      </div>  
    );  
}
export default Choice;

      // choiceGroup="season"
      //       choice="spring"
      //       selected={this.props.currentSeason === "spring"}
      //       onSeason={this.props.onSeason}
