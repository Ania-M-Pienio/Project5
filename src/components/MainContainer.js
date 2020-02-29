import React, { Component, Fragment } from "react";
import SeasonContainer from "./SeasonContainer";
import TimeContainer from "./TimeContainer";
import ColorContainer from "./ColorContainer";
import Ideas from "./Ideas";

class MainContainer extends Component {
  // MainContainer Constructor
  constructor() {
    super();
    this.state = {
      stage: "season",
      stages: ["season", "time", "color", "ideas"]
    };
  }

  handleNext = () => {
    const nowIndex = this.state.stages.indexOf(this.state.stage);
    this.setState({
      stage: this.state.stages[nowIndex + 1]
    });
  };

  handleBack = () => {
    const nowIndex = this.state.stages.indexOf(this.state.stage);
    this.setState({
      stage: this.state.stages[nowIndex - 1]
    });
  };

  // Render
  render() {
    return (
      <main className="mainContainer">
        {this.state.stage === "season" ? (
          <Fragment>
            <SeasonContainer onSeason={this.props.onSeason}></SeasonContainer>
            <button className="oneWay" type="button" onClick={this.handleNext}>
              NEXT
            </button>
          </Fragment>
        ) : (
          ""
        )}

        {this.state.stage === "time" ? (
          <Fragment>
            <TimeContainer onTime={this.props.onTime}></TimeContainer>
            <button className="twoWay" type="button" onClick={this.handleBack}>
              BACK
            </button>
            <button className="twoWay" type="button" onClick={this.handleNext}>
              NEXT
            </button>
          </Fragment>
        ) : (
          ""
        )}

        {this.state.stage === "color" ? (
          <Fragment>
            <ColorContainer onColor={this.props.onColor}>
              {this.state.stage === "ideas" ? <Ideas></Ideas> : ""}
            </ColorContainer>
            <button className="oneWay" type="button" onClick={this.handleBack}>
              BACK
            </button>
          </Fragment>
        ) : (
          ""
        )}
      </main>
    );
  }
}

export default MainContainer;
