import React, { Component } from "react";
import MainContainer from './components/MainContainer';
import AppBar from './components/AppBar';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="wrapper App">
        <AppBar/>
        <MainContainer />        
      </div>
    );
  }
}

export default App;
