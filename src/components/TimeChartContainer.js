import { connect } from 'react-redux';
import TimeChart from './TimeChart';
import { addToRows } from '../actions';
import { bindActionCreators } from 'redux';

const processLatestDatapoints = dataPoints => {
  if (dataPoints.length) {
    const emotions = {
      HAPPY: 0,
      SAD: 0,
      ANGRY: 0,
      CONFUSED: 0,
      DISGUSTED: 0,
      SURPRISED: 0,
      CALM: 0
    };
    const emotionPercentages = [dataPoints[dataPoints.length - 1].timestamp];
    dataPoints[dataPoints.length - 1].data.forEach(dataPoint => {
      dataPoint.emotions.forEach(emotion => (emotions[emotion.Type] += 1));
    });

    Object.values(emotions).forEach(value => {
      emotionPercentages.push(
        Math.floor(value / dataPoints[dataPoints.length - 1].data.length * 100)
      );
    });
    console.log(emotionPercentages);
  }
  return [];
};

const mapStateToProps = (state, ownProps) => {
  return { array: processLatestDatapoints(state.dataPoint) };
};
const mapDispatchToProps = dispatch => {
  return { updateGraphRows: bindActionCreators(addToRows, dispatch) };
};

const TimeChartContainer = connect(mapStateToProps, mapDispatchToProps)(
  TimeChart
);
export default TimeChartContainer;
