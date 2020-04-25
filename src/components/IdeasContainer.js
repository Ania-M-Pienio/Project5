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
    if (this.state.page < 7) {
      this.setState({
        page: this.state.page + 1,
      });
    }
  };

  handleChangeToGrid = () => {
    this.setState({
      gridMode: true,      
    });
  };

  handleChangeToBook = () => {
    this.setState({ 
      gridMode: false,
    })
  }

  render() {
    // prepare data to be used in render
    const pageOne = this.state.page;
    let pageTwo = 0;
    if (pageOne < 7) {
     pageTwo = this.state.page + 1;
    }
    const pageOneDomain = this.props.photos[pageOne].domain;
    const pageOneIcon = this.state.domains[pageOneDomain];
    const pageTwoDomain = this.props.photos[pageTwo].domain;
    const pageTwoIcon = this.state.domains[pageTwoDomain];

    return (
      <Fragment>
        <div className="displayControl">
          {/* // right button */}
          {pageOne > 0 && !this.state.gridMode ? (
            <button type="button" onClick={this.handleLeft}>
              <FontAwesomeIcon
                icon="caret-square-left"
                size="2x"
                className="icoLeft"
              />
            </button>
          ) : (
            <div className="buttonSpace"></div>
          )}

          {/* // book-layout button */}
          <button
            className={"buttonControl" + (this.state.gridMode ? " layout" : "")}
          >
            <FontAwesomeIcon
              icon="grip-vertical"
              size="2x"
              className="icoControl"
              onClick={this.handleChangeToGrid}
            />
          </button>

          {/* // grid-layout button */}
          <button
            className={"buttonControl" + (this.state.gridMode ? "" : " layout")}
          >
            <FontAwesomeIcon
              icon="book-open"
              size="2x"
              className="icoControl"
              onClick={this.handleChangeToBook}
            />
          </button>

          {/* // right button */}
          {pageOne < 7 && !this.state.gridMode ? (
            <button type="button" onClick={this.handleRight}>
              <FontAwesomeIcon
                icon="caret-square-right"
                size="2x"
                className="icoRight"
              />
            </button>
          ) : (
            <div className="buttonSpace"></div>
          )}
        </div>
        {/* end of layout control */}

        <div className={"ideasContainer" + (pageOne === 7 ?  " end": "")}>
          {!this.state.gridMode ? (
            <Fragment>
              <Idea
                current={this.props.current}
                domain={pageOneDomain}
                url={this.props.photos[pageOne].photoUrl}
                icon={pageOneIcon}
                layout="page"
              />
              { pageOne !== 7 ? (
              <Idea
                current={this.props.current}
                domain={pageTwoDomain}
                url={this.props.photos[pageTwo].photoUrl}
                icon={pageTwoIcon}
                layout="page"
              />
              ) : "" }
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
                    domain={photo.domain}
                    url={photo.photoUrl}
                    icon={this.state.domains[photo.domain]}
                    layout="grid"
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
