import React, { Component } from "react";
import SeasonContainer from "./SeasonContainer";
import TimeContainer from "./TimeContainer";
import ColorContainer from "./ColorContainer";

class MainContainer extends Component {
  // Main Constructor
  constructor() {
    super();
    this.state = {
      stage: "season",
      stages: ["season", "time", "color"]
    };
  }

  handleNext = (nextChoice) => {
    console.log('Next button was clicked');
    
  }

  // Render
  render() {
    return (
      <main className="mainContainer">
        {this.state.stage === "season" ? (
          <SeasonContainer onSeason={this.props.onSeason}></SeasonContainer>
        ) : (
          ""
        )}

        {this.state.stage === "time" ? (
          <TimeContainer onTime={this.props.onTime}></TimeContainer>
        ) : (
          ""
        )}

        {this.state.stage === "color" ? (
          <ColorContainer onColor={this.props.onColor}></ColorContainer>
        ) : (
          ""
        )}
        <button type="button" onClick={this.handleNext}>NEXT</button>
      </main>
    );
  }
}

export default MainContainer;
