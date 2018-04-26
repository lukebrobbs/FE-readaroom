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
      <div className="container row justify-content-center mx-auto">
        <div className="container border bg-light">
          <div className="row align-items-center my-3">
            <div className="col-auto px-0 mx-1">
              <span> </span>
              <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/whatsapp/116/smiling-face-with-open-mouth_1f603.png" />
            </div>
            <div className="progress p-0 col" style={{ height: '50px' }}>
              <div
                className="progress-bar bg-success progress-bar-striped"
                role="progressbar"
                style={{ width: this.props.data.happy + '%' }}
              />
              <div
                className="progress-bar bg-danger progress-bar-striped"
                role="progressbar"
                style={{ width: this.props.data.sad + '%' }}
              />
            </div>
            <div className="col-auto px-0 mx-1">
              <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/whatsapp/116/slightly-frowning-face_1f641.png" />
              <span> </span>
            </div>
          </div>

          <div className="row align-items-center my-3">
            <div className="col-auto px-0 mx-1">
              <span> </span>
              <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/whatsapp/116/relieved-face_1f60c.png" />
            </div>
            <div className="progress p-0 col" style={{ height: '50px' }}>
              <div
                className="progress-bar bg-warning progress-bar-striped"
                role="progressbar"
                style={{ width: this.props.data.calm + '%' }}
              />
              <div
                className="progress-bar bg-primary progress-bar-striped"
                role="progressbar"
                style={{ width: this.props.data.angry + '%' }}
              />
            </div>
            <div className="col-auto px-0 mx-1">
              <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/whatsapp/116/imp_1f47f.png" />
              <span> </span>
            </div>
          </div>
        </div>

        <div className="legend ">
          <div className="row align-items-center my-3">
            <div className="col px-0 mx-1">
              <span>Happy </span>
            </div>
            <div className="progress p-0 col" style={{ height: '25px' }}>
              <div
                className="progress-bar bg-success progress-bar-striped"
                role="progressbar"
                style={{ width: '25px' }}
              />
              <div
                className="progress-bar bg-danger progress-bar-striped"
                role="progressbar"
                style={{ width: '25px' }}
              />
            </div>
            <div className="col px-0 mx-1">
              <span> Sad</span>
            </div>
          </div>

          <div className="row align-items-center my-3">
            <div className="col px-0 mx-1">
              <span>Calm </span>
            </div>
            <div className="progress p-0 col" style={{ height: '25px' }}>
              <div
                className="progress-bar bg-warning progress-bar-striped"
                role="progressbar"
                style={{ width: '25px' }}
              />
              <div
                className="progress-bar bg-primary progress-bar-striped"
                role="progressbar"
                style={{ width: '25px' }}
              />
            </div>
            <div className="col-auto px-0 mx-1">
              <span> Angry</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoodBars;
