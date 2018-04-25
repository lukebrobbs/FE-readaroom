import React, { Component } from 'react';

class Nav extends Component {
  state = {};

  render() {
    const { toggleCheckbox } = this.props;

    return (
      <nav>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('stats')}
            type="form-check-input"
            type="checkbox"
            id="stats"
            defaultChecked={true}
          />
          <label className="form-check-label" for="inlineCheckbox1">
            Stats
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('bars')}
            type="form-check-input"
            type="checkbox"
            id="bars"
            defaultChecked={true}
          />
          <label className="form-check-label" for="inlineCheckbox2">
            Bars
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('gauges')}
            type="form-check-input"
            type="checkbox"
            id="gauges"
          />
          <label className="form-check-label" for="inlineCheckbox3">
            Gauges
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('timechart')}
            type="form-check-input"
            type="checkbox"
            id="timechart"
          />
          <label className="form-check-label" for="inlineCheckbox4">
            Time Chart
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('linechart')}
            type="form-check-input"
            type="checkbox"
            id="linechart"
          />
          <label className="form-check-label" for="inlineCheckbox5">
            Line Chart
          </label>
        </div>
      </nav>
    );
  }
}

export default Nav;
