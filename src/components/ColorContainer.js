import React from "react";
import ColorChoice from "./ColorChoice";

function ColorContainer(props) {
    return (
      <section className="colorContainer">
        <h1 aria-label="PICK A COLOUR SCHEME">PICK A COLOUR SCHEME</h1>
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
      </section>
    );
  }
export default ColorContainer;
