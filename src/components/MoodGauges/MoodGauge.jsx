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
    minorTicks: 10
  };
  gaugeOptionsGood = {
    max: 100,
    min: 0,
    width: 200,
    height: 200,
    greenFrom: 50,
    greenTo: 100,
    minorTicks: 10
  };

  render() {
    const gaugesToShow = this.props.data;
    return (
      <div className="container border bg-light my-4">
        <h2 className="text-center mt-3">
          <strong>Mood Gauges</strong>
        </h2>
        <div
          id="guages"
          className="d-flex flex-wrap justify-content-center mx-auto w-75"
        >
          {gaugesToShow.map((emotionObject, i) => {
            const name = emotionObject.emotion;
            const percent = emotionObject.percentage || 0;
            const goodEmotionGauge = emotionObject.goodEmotionGauge;
            return (
              <div id={name} key={i} className="m-4">
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
