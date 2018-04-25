import { Chart } from 'react-google-charts';
import React from 'react';

class MoodGauge extends React.Component {
  gaugeOptionsBad = {
    max: 100,
    min: 0,
    width: 200,
    height: 200,
    redFrom: 75,
    redTo: 100,
    yellowFrom: 50,
    yellowTo: 80,
    minorTicks: 0
  };
  gaugeOptionsGood = {
    max: 100,
    min: 0,
    width: 200,
    height: 200,
    greenFrom: 50,
    greenTo: 100,
    minorTicks: 0
  };

  render() {
    return (
      <div>
        <h1>Mood Gauges</h1>
        <div id="guages" className="d-flex flex-wrap justify-content-around">
          {this.props.data.map(emotionObject => {
            const name = emotionObject.emotion;
            const percent = emotionObject.percentage;
            const goodEmotionGauge = emotionObject.goodEmotionGauge;
            return (
              <div id={name}>
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
