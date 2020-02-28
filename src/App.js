import React, { Component } from "react";
import MainContainer from "./components/MainContainer";
import AppBar from "./components/AppBar";
import Splash from "./components/Splash";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isIntro: false
    }
  }
  render() {
    return (
      <div className="wrapper App">
        {this.state.isIntro ? '' : <AppBar />}
        {this.state.isIntro ? <Splash /> : <MainContainer />}
      </div>
    );
  }
}

export default App;
