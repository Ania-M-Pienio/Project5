import React, { Component } from "react";
import Choice from './Choice';

class TimeContainer extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <section className="timeContainer">
        <h1>What time of the day is your wedding starting at? </h1>
        <div className="timeChoiceContainer">
          <Choice choiceGroup="time" choice="day" />
          <Choice choiceGroup="time" choice="eve" />
        </div>
      </section>
    );
  }
}
export default TimeContainer;
