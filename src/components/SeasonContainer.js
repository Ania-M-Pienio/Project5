import React, { Component } from "react";
import Choice from "./Choice";

class SeasonContainer extends Component {
  render() {
    return (
      <section className="seasonContainer">
        <h1>In which season is your wedding taking place? </h1>
        <div className="seasonChoiceContainer">
          <Choice choiceGroup="season" choice="winter" />
          <Choice choiceGroup="season" choice="spring" />
          <Choice choiceGroup="season" choice="summer" />
          <Choice choiceGroup="season" choice="fall" />
        </div>
      </section>
    );
  }
}
export default SeasonContainer;
