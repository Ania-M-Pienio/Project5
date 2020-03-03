import React, { Component } from "react";
import Choice from "./Choice";

class SeasonContainer extends Component {

  render() {
    return (
      <section className="seasonContainer">
        
        <h1 aria-label="CHOOSE THE SEASON OF THE WEDDING">
          CHOOSE THE SEASON OF THE WEDDING
        </h1>
        <div className="seasonChoiceContainer">
          <Choice
            choiceGroup="season"
            choice="winter"
            selected={this.props.currentSeason === "winter"}
            onSeason={this.props.onSeason}
          />
          <Choice
            choiceGroup="season"
            choice="spring"
            selected={this.props.currentSeason === "spring"}
            onSeason={this.props.onSeason}
          />
          <Choice
            choiceGroup="season"
            choice="summer"
            selected={this.props.currentSeason === "summer"}
            onSeason={this.props.onSeason}
          />
          <Choice
            choiceGroup="season"
            choice="fall"
            selected={this.props.currentSeason === "fall"}
            onSeason={this.props.onSeason}
          />
        </div>
      </section>
    );
  }
}
export default SeasonContainer;
