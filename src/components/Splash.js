import React, { Component } from "react";
import Logo from "./Logo";

class Splash extends Component {
  // Constructor
  constructor() {
    super();
    this.state = {};
  }

  // Render
  render() {
    return (
      <section className="splash">
        <div className="splashLogo">
          <Logo />
        </div>
        <h1>BrideM8</h1>
      </section>
    );
  }
}

export default Splash;
