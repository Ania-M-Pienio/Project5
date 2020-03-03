import React from "react";
import Choice from './Choice';

function TimeContainer(props) {
    return (
      <section className="timeContainer">
        <h1 aria-label="CHOOSE THE TIME OF THE WEDDING">
          CHOOSE THE TIME OF THE WEDDING
        </h1>
        <div className="timeChoiceContainer">
          <Choice
            choiceGroup="time"
            choice="daytime"
            selected={props.currentTime === "daytime"}
            onSeason={props.onTime}
          />
          <Choice
            choiceGroup="time"
            choice="evening"
            selected={props.currentTime === "evening"}
            onSeason={props.onTime}
          />
        </div>
      </section>
    );
}
export default TimeContainer;
