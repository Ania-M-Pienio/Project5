import React, { Component, Fragment } from "react";
import MainContainer from "./components/MainContainer";
import AppBar from "./components/AppBar";
import Splash from "./components/Splash";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faUmbrella,
  faSnowflake,
  faLeaf,
  faSun,
  faUmbrellaBeach,
  faMoon,
  faCloudRain,
  faPalette
} from "@fortawesome/free-solid-svg-icons";
import "./App.scss";

// setup icons
library.add(
  fab,
  faUmbrella,
  faSnowflake,
  faLeaf,
  faSun,
  faUmbrellaBeach,
  faMoon,
  faCloudRain,
  faPalette
);

class App extends Component {
  constructor() {
    super();

    this.state = {
      isIntro: true,
      season: "spring",
      time: "day",
      colorSet: "yellow_pink"
    };
  }

  handleStart = () => {
    this.setState({
      isIntro: false
    });
  };

  handleStartOver = () => {
    this.setState({
      isIntro: true
    });
  };

  handleSeasonChoice = (e, season) => {};

  handleTimeChoice = (e, time) => {};

  handleColorChoice = (e, colors) => {};

  render() {
    return (
      <div className="wrapper App">
        {this.state.isIntro ? (
          ""
        ) : (
          <Fragment>
            <AppBar
              onStartOver={this.handleStartOver}
              season={this.state.season}
              time={this.state.time}
              color={this.state.colorSet}
            />
            <hr></hr>
          </Fragment>
        )}
        {this.state.isIntro ? (
          <Splash onStart={this.handleStart} />
        ) : (
          <MainContainer
            onSeason={this.handleSeasonChoice}
            onTime={this.handleTimeChoice}
            onColor={this.handleColorChoice}
          />
        )}
      </div>
    );
  }
}

export default App;
