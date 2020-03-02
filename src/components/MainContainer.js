import React, { Component, Fragment } from "react";
import SeasonContainer from "./SeasonContainer";
import TimeContainer from "./TimeContainer";
import ColorContainer from "./ColorContainer";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      stage: "season",
      stages: ["season", "time", "color", "ideas"]
    };
  }

  handleNext = () => {
    const nowIndex = this.state.stages.indexOf(this.state.stage);
    if (this.state.stage === "time") {
      this.props.onRollForward(this.state.stages[nowIndex]);
    }
    this.setState({
      stage: this.state.stages[nowIndex + 1]
    });
  };

  handleBack = () => {
    const nowIndex = this.state.stages.indexOf(this.state.stage);
    this.props.onRollBack(this.state.stages[nowIndex]);
    this.setState({
      stage: this.state.stages[nowIndex - 1]
    });
  };

  render() {
    return (
      <main className="mainContainer">
        {this.state.stage === "season" ? (
          <Fragment>
            <SeasonContainer
              currentSeason={this.props.season}
              onSeason={this.props.onSeason}
            ></SeasonContainer>
            {this.props.season ? (
              <button
                className="oneWay"
                type="button"
                onClick={this.handleNext}
              >
                NEXT
              </button>
            ) : (
              ""
            )}
          </Fragment>
        ) : (
          ""
        )}

        {this.state.stage === "time" ? (
          <Fragment>
            <TimeContainer
              currentTime={this.props.time}
              onTime={this.props.onTime}
            ></TimeContainer>
            <button
              className={this.props.time ? "twoWay" : "oneWay"}
              type="button"
              onClick={this.handleBack}
            >
              BACK
            </button>
            {this.props.time ? (
              <button
                className={this.props.time ? "twoWay" : "oneWay"}
                type="button"
                onClick={this.handleNext}
              >
                NEXT
              </button>
            ) : (
              " "
            )}
          </Fragment>
        ) : (
          ""
        )}

        {this.state.stage === "color" ? (
          <Fragment>
            <ColorContainer
              currentColor={this.props.color}
              onColor={this.props.onColor}
              colorChoices={this.props.colorChoices}
              photos={this.props.photos}
            />
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
