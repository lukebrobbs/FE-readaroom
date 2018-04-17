import { Chart } from 'react-google-charts';
import React from 'react';
import db from '../config.js';

class TimeChart extends React.Component {
  state = {
    options: {
      title: 'Age vs. Weight comparison',
      hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
      vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
      legend: 'none'
    },
    rows: [[0, 0, 0, 0, 0, 0, 0, 0]],
    columns: [
      { type: 'number', label: 'Age' },
      { type: 'number', label: 'Weight' }
    ]
  };
  snapshot = db
    .collection('sessions')
    .doc('ZmrKU1MgAHfNFnqF2VJe')
    .onSnapshot(function(doc) {
      const emotions = [];
      const emotionCount = {
        HAPPY: 0,
        SAD: 0,
        ANGRY: 0,
        CONFUSED: 0,
        DISGUSTED: 0,
        SURPRISED: 0,
        CALM: 0
      };
      doc.data().students.forEach(student => {
        emotions.push(student.emotions.slice(-3));
      });
      emotions.forEach(emotionData => {
        emotionData.forEach(emotion => {
          emotionCount[emotion.Type] += 1;
        });
      });
    });

  render() {
    return (
      <Chart
        chartType="LineChart"
        rows={this.state.rows}
        columns={this.state.columns}
        options={this.state.options}
        graph_id="SteppedAreaChart"
        width={'100%'}
        height={'400px'}
        legend_toggle
      />
    );
  }
}
export default TimeChart;
