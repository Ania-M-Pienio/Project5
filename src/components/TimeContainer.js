import React from "react";
import Choice from './Choice';

function TimeContainer(props) {
    return (
      <section className="timeContainer">
        <h1>What time of the day is your wedding starting at? </h1>
        <div className="timeChoiceContainer">
          <Choice
            choiceGroup="time"
            choice="day"
            selected={props.currentTime === "day"}
            onSeason={props.onTime}
          />
          <Choice
            choiceGroup="time"
            choice="eve"
            selected={props.currentTime === "eve"}
            onSeason={props.onTime}
          />
        </div>
      </section>
    );
}
export default TimeContainer;
