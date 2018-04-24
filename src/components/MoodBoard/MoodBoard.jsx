import { Chart } from 'react-google-charts';
import React from 'react';
import './MoodBoard.css';

class MoodBoard extends React.Component {
  gaugeOptions = {
    max: 4,
    min: 0,
    width: 400,
    height: 400,
    redFrom: 3,
    redTo: 4,
    yellowFrom: 2,
    yellowTo: 3,
    minorTicks: 0
  };

  render() {
    return (
      <div>
        <h1>MoodBoard</h1>
        <p>
          Currently tracking {this.props.data.occupants || '0'} people in the
          room
        </p>
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

          <div className={'my-pretty-chart-container'}>
            <Chart
              chartType="Gauge"
              data={[
                ['Label', 'Value'],
                ['Disgusted', this.props.data.disgusted]
              ]}
              options={this.gaugeOptions}
              graph_id="gaugeDiv"
              width={'100%'}
              height={'400px'}
              legend_toggle
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MoodBoard;
