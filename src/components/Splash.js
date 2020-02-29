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
        <h1> WEDDING THEME IDEAS </h1>
        <h3>
          <span> 1 </span> invites 
          <span> 2 </span> floral
          <br></br>
          <span> 3 </span> centerpieces
          <span> 4 </span> tableware
          <br></br>
          <span> 5 </span> venues 
          <span> 6 </span> cakes
          <br></br>
          <span> 7 </span> favors
          <span> 8 </span> patterns
        </h3>
        <button type="button" onClick={this.props.onStart}>
          GET STARTED
        </button>
      </section>
    );
  }
}

export default Splash;
