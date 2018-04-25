import { Chart } from 'react-google-charts';
import React from 'react';
import './MoodBars.css';

class MoodBars extends React.Component {
  gaugeOptions = {
    max: 100,
    min: 0,
    width: 300,
    height: 300,
    redFrom: 80,
    redTo: 100,
    yellowFrom: 50,
    yellowTo: 80,
    minorTicks: 0
  };

  render() {
    return (
      <div>
        <h1>Mood Bars</h1>
        <div className="container">
          <div id="bar-one" className="">
            <h1 className="float-left">😃</h1>
            <h1 className="float-right">🤢</h1>
          </div>
          <div className="progress my-4" style={{ height: '50px' }}>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: this.props.data.happy + '%' }}
            >
              <h3>Happy</h3>
            </div>
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: this.props.data.sad + '%' }}
            >
              <h3>Sad</h3>
            </div>
          </div>
          <div id="bar-two" className="">
            <h1 className="float-left">😇</h1>
            <h1 className="float-right">👹</h1>
          </div>
          <div className="progress my-4 float-none" style={{ height: '50px' }}>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: this.props.data.calm + '%' }}
            >
              <h3>Calm</h3>
            </div>
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: this.props.data.angry + '%' }}
            >
              <h3>Angry</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoodBars;
