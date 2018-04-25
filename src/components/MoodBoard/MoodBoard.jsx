import { Chart } from 'react-google-charts';
import React from 'react';
import './MoodBoard.css';

class MoodBoard extends React.Component {
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
        <h1>MoodBoard</h1>
        <p>
          Currently tracking {this.props.data.occupants || '0'}
          {this.props.data.occupants === 1 ? ' person' : ' people'} in the room
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
          <div id="guages" className="d-flex flex-wrap justify-content-around">
            <div id="surprised-gauge">
              <Chart
                chartType="Gauge"
                data={[
                  ['Label', 'Value'],
                  ['Surprised', this.props.data.surprised]
                ]}
                options={this.gaugeOptions}
                graph_id="surprised-gauge"
                width={'100%'}
                height={'300px'}
                legend_toggle
              />
            </div>
            <div id="confused-gauge">
              <Chart
                chartType="Gauge"
                data={[
                  ['Label', 'Value'],
                  ['Confused', this.props.data.confused]
                ]}
                options={this.gaugeOptions}
                graph_id="confused-gauge"
                width={'100%'}
                height={'300px'}
                legend_toggle
              />
            </div>
            <div id="disgusted-guage">
              <Chart
                chartType="Gauge"
                data={[
                  ['Label', 'Value'],
                  ['Disgusted', this.props.data.disgusted]
                ]}
                options={this.gaugeOptions}
                graph_id="disgusted-gauge"
                width={'100%'}
                height={'300px'}
                legend_toggle
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoodBoard;
