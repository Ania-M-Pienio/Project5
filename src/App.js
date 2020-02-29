import React, { Component } from "react";
import MainContainer from "./components/MainContainer";
import AppBar from "./components/AppBar";
import Splash from "./components/Splash";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import 
{ faUmbrella, 
  faSnowflake, 
  faLeaf, 
  faSun,
  faUmbrellaBeach,
  faMoon,
  faCloudRain,
  faPalette 
} from "@fortawesome/free-solid-svg-icons";
import "./App.scss";

// season icons
library.add(fab, faUmbrella, faSnowflake, faLeaf, faSun, faUmbrellaBeach, faMoon, faCloudRain, faPalette);

class App extends Component {
  constructor() {
    super();
    this.state = {
      isIntro: false,
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
