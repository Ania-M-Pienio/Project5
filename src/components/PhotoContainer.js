import React, { Component } from "react";
import IdeasContainer from "./IdeasContainer";

class PhotoContainer extends Component {

  render() {
    return (
    <div className="photosContainer">
      <h1 aria-label="YOUR WEDDING IDEAS ARE READY">
        COLOR SCHEME IDEAS
      </h1>
      {this.props.photos.length === 0 ? (
        ""
      ) : (
        <IdeasContainer
          current={this.props.currentColor}
          photos={this.props.photos}
        />
      )}
    </div>
    )
  }
}

export default PhotoContainer;
