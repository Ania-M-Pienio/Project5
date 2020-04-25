import React, { Component } from "react";
import SeasonContainer from "./SeasonContainer";
import TimeContainer from "./TimeContainer";
import ColorContainer from "./ColorContainer";
import PhotoContainer from "./PhotoContainer";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      stage: "season",
      stages: ["season", "time", "color", "ideas"],
    };
  }

  handleNext = () => {
    const nowIndex = this.state.stages.indexOf(this.state.stage);
    if (this.state.stage === "time") {
      this.props.onRollForward(this.state.stages[nowIndex]);
    }
    this.setState({
      stage: this.state.stages[nowIndex + 1],
    });
  };

  handleBack = () => {
    const nowIndex = this.state.stages.indexOf(this.state.stage);
    this.props.onRollBack(this.state.stages[nowIndex]);
    this.setState({
      stage: this.state.stages[nowIndex - 1],
    });
  };

  render() {
    return (
      <main className={"mainContainer" + (this.props.season ? " expand" : "")}>
        {this.state.stage === "season" ? (
          <section>
            <SeasonContainer
              currentSeason={this.props.season}
              onSeason={this.props.onSeason}
            ></SeasonContainer>
            <div className="buttons seasonButtons">
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
            </div>
          </section>
        ) : (
          ""
        )}

        {this.state.stage === "time" ? (
          <section>
            <TimeContainer
              currentTime={this.props.time}
              onTime={this.props.onTime}
            ></TimeContainer>
            <div className="buttons timeButtons">
              <button
                className={this.props.time ? "twoWay back" : "oneWay"}
                type="button"
                onClick={this.handleBack}
              >
                BACK
              </button>
              {this.props.time ? (
                <button
                  className={this.props.time ? "twoWay next" : "oneWay"}
                  type="button"
                  onClick={this.handleNext}
                >
                  NEXT
                </button>
              ) : (
                " "
              )}
            </div>
          </section>
        ) : (
          ""
        )}

        {this.state.stage === "color" ? (
          <section>
            <ColorContainer
              currentColor={this.props.color}
              onColor={this.props.onColor}
              colorChoices={this.props.colorChoices}
            ></ColorContainer>

            <div className="buttons colorButtons">
              <button
                className={this.props.color ? "twoWay back" : "oneWay"}
                type="button"
                onClick={this.handleBack}
              >
                BACK
              </button>
              {this.props.color ? (
                <button
                  className={this.props.color ? "twoWay next" : "oneWay"}
                  type="button"
                  onClick={this.handleNext}
                >
                  NEXT
                </button>
              ) : (
                " "
              )}
            </div>
          </section>
        ) : (
          ""
        )}

        {this.state.stage === "ideas" ? (
          <section>
            <PhotoContainer photos={this.props.photos}></PhotoContainer>
            <div className="buttons ideaButtons">
              <button
                className= "oneWay"
                type="button"
                onClick={this.handleBack}
              >
                BACK
              </button>
          

            </div>
          </section>
        ) : (
          ""
        )}
      </main>
    );
  }
}
export default MainContainer;
