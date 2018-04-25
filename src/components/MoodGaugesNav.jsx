import React, { Component } from 'react';

class MoodGaugesNav extends Component {
  state = {};

  render() {
    const { toggleCheckbox } = this.props;

    return (
      <nav>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('happy')}
            className="form-check-input"
            type="checkbox"
            id="happy"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox1">
            Happy
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('sad')}
            className="form-check-input"
            type="checkbox"
            id="sad"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox2">
            Sad
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('angry')}
            className="form-check-input"
            type="checkbox"
            id="angry"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox3">
            Angry
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('calm')}
            className="form-check-input"
            type="checkbox"
            id="calm"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox4">
            Calm
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('disgusted')}
            className="form-check-input"
            type="checkbox"
            id="disgusted"
            defaultChecked={true}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox5">
            Disgusted
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('surprised')}
            className="form-check-input"
            type="checkbox"
            id="surprised"
            defaultChecked={true}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox6">
            Surprised
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={() => toggleCheckbox('confused')}
            className="form-check-input"
            type="checkbox"
            id="confused"
            defaultChecked={true}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox7">
            Confused
          </label>
        </div>
      </nav>
    );
  }
}

export default MoodGaugesNav;
