import React, { Component } from "react";

class Nav extends Component {
  state = {};

  render() {
    const { toggleCheckbox } = this.props;

    return (
      <nav className="navbar justify-content-center">
        <div class="btn-group btn-group-toggle " data-toggle="buttons">
          <label class="btn btn-secondary active">
            <input
              type="radio"
              name="options"
              id="option1"
              // autocomplete="off"
              onClick={e => toggleCheckbox(e, "moodBoard")}
              checked
            />{" "}
            MoodBoards
          </label>
          <label class="btn btn-secondary">
            <input
              type="radio"
              name="options"
              id="option2"
              onClick={e => toggleCheckbox(e, "charts")}
              // autocomplete="off"
            />{" "}
            Charts
          </label>
          <label class="btn btn-secondary">
            <input
              type="radio"
              name="options"
              id="option3"
              onClick={e => toggleCheckbox(e, "graphs")}
              // autocomplete="off"
            />{" "}
            Graphs
          </label>
        </div>
      </nav>
    );
  }
}

export default Nav;
