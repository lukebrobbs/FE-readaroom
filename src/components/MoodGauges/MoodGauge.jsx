import { Chart } from 'react-google-charts';
import React from 'react';
import MoodGaugesNav from '../MoodGaugesNav';

class MoodGauge extends React.Component {
  state = {
    happy: false,
    sad: false,
    angry: false,
    calm: false,
    disgusted: true,
    surprised: true,
    confused: true
  };

  toggleCheckbox = toToggle => {
    this.setState({ [toToggle]: !this.state[toToggle] });
  };

  gaugeOptionsBad = {
    max: 100,
    min: 0,
    width: 300,
    height: 300,
    redFrom: 75,
    redTo: 100,
    yellowFrom: 50,
    yellowTo: 80,
    minorTicks: 0
  };
  gaugeOptionsGood = {
    max: 100,
    min: 0,
    width: 300,
    height: 300,
    greenFrom: 50,
    greenTo: 100,
    minorTicks: 0
  };

  render() {
    const gaugesToShow = this.props.data.filter(emotionObject => {
      return this.state[emotionObject.emotion.toLowerCase()];
    });
    console.log(this.props.data);
    console.log(gaugesToShow);
    return (
      <div>
        <h1>Mood Gauges</h1>
        <MoodGaugesNav
          toggleCheckbox={this.toggleCheckbox}
          checkedEmotions={this.state}
        />

        <div id="guages" className="d-flex flex-wrap justify-content-around">
          {gaugesToShow.map((emotionObject, i) => {
            const name = emotionObject.emotion;
            const percent = emotionObject.percentage;
            const goodEmotionGauge = emotionObject.goodEmotionGauge;
            return (
              <div id={name} key={i}>
                <Chart
                  chartType="Gauge"
                  data={[['Label', 'Value'], [name, percent]]}
                  options={
                    goodEmotionGauge
                      ? this.gaugeOptionsGood
                      : this.gaugeOptionsBad
                  }
                  graph_id={name}
                  width={'100%'}
                  height={'300px'}
                  legend_toggle
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MoodGauge;
