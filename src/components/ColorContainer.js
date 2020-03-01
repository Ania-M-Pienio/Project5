import React, { Component } from "react";
import ColorChoice from "./ColorChoice";

class ColorContainer extends Component {
  render() {
    return (
      <section className="colorContainer">
        <h1>
          Pick one of the following suggested colour schemes for your wedding:
        </h1>
        <div className="colorChoiceContainer">
          <ColorChoice />
        </div>
      </section>
    );
  }
}
export default ColorContainer;
