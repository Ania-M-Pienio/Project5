import React, { Component, Fragment } from "react";
import ColorChoice from "./ColorChoice";
import IdeasContainer from "./IdeasContainer";

class ColorContainer extends Component {
  render() {
    return (
      <section className="colorContainer">
        <h1>
          Pick one of the following suggested colour schemes:
        </h1>
        <div className="colorChoiceContainer">
          {this.props.colorChoices.map(choice => (
            <ColorChoice
              key={choice.colors}
              choiceGroup="color"
              choice={choice.colors}
              choiceSet={{
                colorOne: choice.primary.name,
                colorTwo: choice.secondary.name
              }}
              selected={this.props.currentColor === choice.colors}
              onColor={this.props.onColor}
            />
          ))}
        </div>
        <div className="photosContainer">
          {this.props.photos.length === 0 ? (
            ""
          ) : (
            <Fragment>
              {/* <hr></hr> */}
              <IdeasContainer
                current={this.props.currentColor}
                photos={this.props.photos}
              />
              {/* <hr></hr> */}
            </Fragment>
          )}
        </div>
      </section>
    );
  }
}
export default ColorContainer;
