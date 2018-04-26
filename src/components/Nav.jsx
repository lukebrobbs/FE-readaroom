import React, { Component } from "react";

class Nav extends Component {
  state = {
    moodboard: "btn btn-secondary active",
    charts: "btn btn-secondary",
    graphs: "btn btn-secondary"
  };

  handleClick = currentlyRendered => {
    const toggleStates = {
      moodBoard: {
        moodboard: "btn btn-secondary active",
        charts: "btn btn-secondary",
        graphs: "btn btn-secondary"
      },
      charts: {
        moodboard: "btn btn-secondary",
        charts: "btn btn-secondary active",
        graphs: "btn btn-secondary"
      },
      graphs: {
        moodboard: "btn btn-secondary",
        charts: "btn btn-secondary",
        graphs: "btn btn-secondary active"
      }
    };
    this.props.toggleCheckbox(currentlyRendered);
    this.setState(toggleStates[currentlyRendered]);
  };
  render() {
    const { toggleCheckbox } = this.props;
    const { moodboard, charts, graphs } = this.state;
    return (
      <nav className="navbar justify-content-center">
        <div className="btn-group btn-group-toggle">
          <label className={moodboard}>
            <input
              type="radio"
              name="options"
              id="option1"
              autocomplete="off"
              onClick={() => this.handleClick("moodBoard")}
            />{" "}
            MoodBoards
          </label>
          <label className={charts}>
            <input
              type="radio"
              name="options"
              id="option2"
              onClick={() => this.handleClick("charts")}
              autocomplete="off"
            />{" "}
            Charts
          </label>
          <label className={graphs}>
            <input
              type="radio"
              name="options"
              id="option3"
              onClick={() => this.handleClick("graphs")}
              autocomplete="off"
            />{" "}
            Graphs
          </label>
        </div>
      </nav>
    );
  }
}

export default Nav;
