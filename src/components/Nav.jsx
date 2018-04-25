import React, { Component } from 'react';

class Nav extends Component {
  state = {};

  render() {
    const { toggleCheckbox } = this.props;

    return (
      <nav className="navbar bg-light align-content-center container-fluid">
        <div className="form-check form-check-inline ">
          <input
            onChange={() => toggleCheckbox('stats')}
            className="form-check-input mx-2"
            type="checkbox"
            id="stats"
            defaultChecked={true}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox1">
            Stats
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('bars')}
            className="form-check-input mx-2"
            type="checkbox"
            id="bars"
            defaultChecked={true}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox2">
            Bars
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('gauges')}
            className="form-check-input mx-2"
            type="checkbox"
            id="gauges"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox3">
            Gauges
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('timechart')}
            className="form-check-input mx-2"
            type="checkbox"
            id="timechart"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox4">
            Time Chart
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('linechart')}
            className="form-check-input mx-2"
            type="checkbox"
            id="linechart"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox5">
            Line Chart
          </label>
        </div>
      </nav>
    );
  }
}

export default Nav;
