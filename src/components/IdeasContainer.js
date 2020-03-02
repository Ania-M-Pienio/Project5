import React, { Component } from "react";
import Idea from './Idea';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class IdeasContainer extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      domains: {
        cake: "birthday-cake",
        centerpiece: "shapes",
        favor: "gift",
        floral: "spa",
        invite: "envelope-open-text",
        pattern: "chess-board",
        tableware: "wine-glass",
        venue: "door-open"
      }
    };
  }

  handleLeft = () => {
    if (this.state.page > 0) {
      this.setState({
        page: this.state.page - 1
      });
    }
  };

  handleRight = () => {
    if (this.state.page < 6) {
      this.setState({
        page: this.state.page + 1
      });
    }
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
      <div className={"ideasContainer "}>
        <button type="button" onClick={this.handleLeft}>
          {pageOne > 0 ? (
            <FontAwesomeIcon icon="caret-square-left" size="2x" />
          ) : (
            ""
          )}
        </button>
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
        <button type="button" onClick={this.handleRight}>
          {pageOne < 6 ? (
            <FontAwesomeIcon icon="caret-square-right" size="2x" />
          ) : (
            ""
          )}
        </button>
      </div>
    );
  }
}
export default IdeasContainer;
