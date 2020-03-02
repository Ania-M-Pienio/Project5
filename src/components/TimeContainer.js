import React, { Component } from "react";
import Choice from './Choice';

class TimeContainer extends Component {

  render() {
    return (
      <section className="timeContainer">
        <h1>What time of the day is your wedding starting at? </h1>
        <div className="timeChoiceContainer">
          <Choice
            choiceGroup="time"
            choice="day"
            selected={this.props.currentTime === "day"}
            onSeason={this.props.onTime}
          />
          <Choice
            choiceGroup="time"
            choice="eve"
            selected={this.props.currentTime === "eve"}
            onSeason={this.props.onTime}
          />
        </div>
      </section>
    );
  }
}
export default TimeContainer;
