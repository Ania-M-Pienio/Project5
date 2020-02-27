import React, { Component } from "react";
import bm8 from './temp'
import "./App.scss";

class App extends Component {
  render() {
    const myJSON = JSON.stringify(bm8);
    console.log(myJSON);
    return <div className="App">
      <h1>App Hooked Up</h1>
    </div>;
  }
}

export default App;
