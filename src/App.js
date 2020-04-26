import React, { Component} from "react";
import firebase from "./firebaseConfig";
import MainContainer from "./components/MainContainer";
import AppBar from "./components/AppBar";
import Splash from "./components/Splash";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./App.scss";
import {
  faUmbrella,
  faSnowflake,
  faLeaf,
  faSun,
  faUmbrellaBeach,
  faMoon,
  faCloudRain,
  faPalette,
  faBirthdayCake,
  faGift,
  faSpa,
  faWineGlass,
  faChessBoard,
  faEnvelopeOpenText,
  faDoorOpen,
  faShapes,
  faCaretSquareLeft,
  faCaretSquareRight,
  faHome,
  faGripVertical,
  faBookOpen,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

// setup icons from Font Awesome
library.add(
  fab,
  faUmbrella,
  faSnowflake,
  faLeaf,
  faSun,
  faUmbrellaBeach,
  faMoon,
  faCloudRain,
  faPalette,
  faBirthdayCake,
  faGift,
  faSpa,
  faWineGlass,
  faChessBoard,
  faEnvelopeOpenText,
  faDoorOpen,
  faShapes,
  faCaretSquareLeft,
  faCaretSquareRight,
  faHome,
  faGripVertical,
  faBookOpen,
  faSignInAlt
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      expand: false,
      isIntro: true,
      season: "",
      time: "",
      colorSet: "",
      colorChoices: [],
      photos: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        expand: true,
      });
    }, 1000);
  }

  handleRollBack = (setback) => {
    if (setback === "season") {
      this.setState({ season: "" });
    } else if (setback === "time") {
      this.setState({ time: "" });
    } else if (setback === "color") {
      this.setState({
        colorSet: "",
        colorChoices: [],
        photos: [],
      });
    }
  };

  handleRollForward = (forward) => {
    if (forward === "time") {
      this.getColorSets();
    }
  };

  handleStart = () => {
    this.setState({
      isIntro: false,
    });
  };

  handleStartOver = () => {
    this.setState({
      isIntro: true,
    });
  };

  handleSeasonChoice = (season) => {
    this.setState({
      season: season,
    });
    if (this.state.time) {
      this.getColorSets();
    }
  };

  handleTimeChoice = (time) => {
    this.setState({
      time: time,
    });
    if (this.state.season) {
      this.getColorSets();
    }
  };

  handleColorChoice = (colors) => {
    this.setState(
      {
        colorSet: colors,
      },
      () => {
        this.getPhotoSets();
      }
    );
  };

  getColorSets = () => {
    const dbRef = firebase.database().ref("ColorSets");
    dbRef.on("value", (response) => {
      const setsFromDB = response.val();
      const arrayOfDBSets = [];
      for (let key in setsFromDB) {
        arrayOfDBSets.push({
          colors: key,
          primary: setsFromDB[key].primary,
          secondary: setsFromDB[key].secondary,
          seasons: setsFromDB[key].seasons,
          time: setsFromDB[key].time,
        });
      }
      const filteredSets = arrayOfDBSets
        .filter((set) => set.seasons.includes(this.state.season))
        .filter((set) => set.time.includes(this.state.time))
        .slice(0, 6);

      this.setState({
        colorChoices: filteredSets,
      });
    });
  };

  getPhotoSets = () => {
    const dbRef = firebase.database().ref(`PhotoSets/${this.state.colorSet}`);
    dbRef.on("value", (response) => {
      const photosFromDB = response.val();
      const arrayDBPhotos = [];
      for (let key in photosFromDB) {
        arrayDBPhotos.push({
          domain: key,
          photoUrl: photosFromDB[key],
        });
      }
      this.setState({
        photos: arrayDBPhotos,
      });
    });
  };

  render() {
    return (
      <div className="wrapper App">
        {this.state.isIntro ? (
          ""
        ) : (
          <AppBar
            onStartOver={this.handleStartOver}
            season={this.state.season}
            time={this.state.time}
            color={this.state.colorSet}
          />
        )}
        {this.state.isIntro ? (
          <Splash onStart={this.handleStart} expand={this.state.expand} />
        ) : (
          <MainContainer
            onSeason={this.handleSeasonChoice}
            onTime={this.handleTimeChoice}
            onColor={this.handleColorChoice}
            season={this.state.season}
            time={this.state.time}
            color={this.state.colorSet}
            colorChoices={this.state.colorChoices}
            photos={this.state.photos}
            onRollBack={this.handleRollBack}
            onRollForward={this.handleRollForward}
          />
        )}
      </div>
    );
  }
}
export default App;
