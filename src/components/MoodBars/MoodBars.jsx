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
        <div className="container border bg-light">
          <div className="row align-items-center my-3">
            <div className="col-auto px-0 mx-1">
              <h1>😃</h1>
            </div>
            <div className="progress p-0 col" style={{ height: '50px' }}>
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
            <div className="col-auto px-0 mx-1">
              <h1>🤢</h1>
            </div>
          </div>

          <div className="row align-items-center my-3">
            <div className="col-auto px-0 mx-1">
              <h1>😇</h1>
            </div>
            <div className="progress p-0 col" style={{ height: '50px' }}>
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
            <div className="col-auto px-0 mx-1">
              <h1>👹</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoodBars;
