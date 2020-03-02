import React, { Fragment } from "react";
import ColorChoice from "./ColorChoice";
import IdeasContainer from "./IdeasContainer";

function ColorContainer(props) {
    return (
      <section className="colorContainer">
        <h1>
          Pick one of the following suggested colour schemes:
        </h1>
        <div className="colorChoiceContainer">
          {props.colorChoices.map(choice => (
            <ColorChoice
              key={choice.colors}
              choiceGroup="color"
              choice={choice.colors}
              choiceSet={{
                colorOne: choice.primary.name,
                colorTwo: choice.secondary.name
              }}
              selected={props.currentColor === choice.colors}
              onColor={props.onColor}
            />
          ))}
        </div>
        <div className="photosContainer">
          {props.photos.length === 0 ? (
            ""
          ) : (
            <Fragment>
              <IdeasContainer
                current={props.currentColor}
                photos={props.photos}
              />
            </Fragment>
          )}
        </div>
      </section>
    );
  }
export default ColorContainer;
