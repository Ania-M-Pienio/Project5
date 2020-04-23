import React, { Component, Fragment } from "react";
import SeasonContainer from "./SeasonContainer";
import TimeContainer from "./TimeContainer";
import ColorContainer from "./ColorContainer";

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
      <main className={"mainContainer" + (this.props.season? " expand" : "")}>
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
              photos={this.props.photos}
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
                <button className="twoWay next" type="button">
                  <a
                    href="https://forms.gle/CNp9wyaaY8iRXPNu7"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    SURVEY
                  </a>
                </button>
              ) : (
                ""
              )}
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
