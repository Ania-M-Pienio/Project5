import React from "react";
import Choice from "./Choice";

function SeasonContainer(props) {
    return (
      <section className="seasonContainer">
        <h1>In which season is your wedding taking place? </h1>
        <div className="seasonChoiceContainer">
          <Choice
            choiceGroup="season"
            choice="winter"
            selected={props.currentSeason === "winter"}
            onSeason={props.onSeason}
          />
          <Choice
            choiceGroup="season"
            choice="spring"
            selected={props.currentSeason === "spring"}
            onSeason={props.onSeason}
          />
          <Choice
            choiceGroup="season"
            choice="summer"
            selected={props.currentSeason === "summer"}
            onSeason={props.onSeason}
          />
          <Choice
            choiceGroup="season"
            choice="fall"
            selected={props.currentSeason === "fall"}
            onSeason={props.onSeason}
          />
        </div>
      </section>
    );
}
export default SeasonContainer;
