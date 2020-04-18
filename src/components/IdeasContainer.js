import React, { Component, Fragment } from "react";
import Idea from "./Idea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class IdeasContainer extends Component {
  constructor() {
    super();
    this.state = {
      gridMode: false,
      page: 0,
      domains: {
        cake: "birthday-cake",
        "center piece": "shapes",
        favor: "gift",
        floral: "spa",
        invite: "envelope-open-text",
        pattern: "chess-board",
        tableware: "wine-glass",
        venue: "door-open",
      },
    };
  }

  handleLeft = () => {
    if (this.state.page > 0) {
      this.setState({
        page: this.state.page - 1,
      });
    }
  };

  handleRight = () => {
    if (this.state.page < 6) {
      this.setState({
        page: this.state.page + 1,
      });
    }
  };

  handleChangeMode = () => {
    this.setState({
      gridMode: !this.state.gridMode,
    });
  };

  render() {
    // prepare data to be used in render
    const colorOne = this.props.current.split("_")[0];
    const pageOne = this.state.page;
    const pageTwo = this.state.page + 1;
    const pageOneDomain = this.props.photos[pageOne].domain;
    const pageOneIcon = this.state.domains[pageOneDomain];
    const pageTwoDomain = this.props.photos[pageTwo].domain;
    const pageTwoIcon = this.state.domains[pageTwoDomain];

    return (
      <Fragment>
        <div className="displayControl">
          <button>
            <FontAwesomeIcon
              icon="grip-vertical"
              size="2x"
              className="icoControl"
              onClick={this.handleChangeMode}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon="book-open"
              size="2x"
              className="icoControl"
              onClick={this.handleChangeMode}
            />
          </button>
        </div>
        <div className="ideasContainer">
          {/* // left button */}
          {!this.state.gridMode ? (
            <Fragment>
              <div className="left">
                <button type="button" onClick={this.handleLeft}>
                  {pageOne > 0 ? (
                    <FontAwesomeIcon
                      icon="caret-square-left"
                      size="2x"
                      className="icoLeft"
                    />
                  ) : (
                    ""
                  )}
                </button>
              </div>

              <Idea
                current={this.props.current}
                color={colorOne}
                domain={pageOneDomain}
                url={this.props.photos[pageOne].photoUrl}
                icon={pageOneIcon}
              />
              <Idea
                current={this.props.current}
                color={colorOne}
                domain={pageTwoDomain}
                url={this.props.photos[pageTwo].photoUrl}
                icon={pageTwoIcon}
              />

              {/* // right button */}
              <div className="right">
                <button type="button" onClick={this.handleRight}>
                  {pageOne < 6 ? (
                    <FontAwesomeIcon
                      icon="caret-square-right"
                      size="2x"
                      className="icoRight"
                    />
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </Fragment>
          ) : (
            ""
          )}
          {this.state.gridMode ? (
            <div className="altIdeaContainer">
              {this.props.photos.map((photo, index) => {
                return (
                  <Idea
                    key={photo.photoUrl}
                    current={this.props.current}
                    color="na"
                    domain={photo.domain}
                    url={photo.photoUrl}
                    icon={this.state.domains[photo.domain]}
                  ></Idea>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </Fragment>
    );
  }
}
export default IdeasContainer;
