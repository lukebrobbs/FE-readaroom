import { connect } from 'react-redux';
import TimeChart from './TimeChart';
import { addToRows } from '../actions';
import { bindActionCreators } from 'redux';

const processLatestDatapoints = dataPoint => {
  if (dataPoint.length) {
    const currentTimestamp = dataPoint[dataPoint.length - 1].timestamp;
    const dataPointsAtTimestamp = [];

    for (let i = dataPoint.length - 1; i >= 0; i--) {
      // console.log(dataPointsAtTimestamp);
      if (dataPoint[i].timestamp !== currentTimestamp) break;
      dataPointsAtTimestamp.push(dataPoint[i]);
      const emotions = {
        timestamp: dataPointsAtTimestamp[0].timestamp,
        HAPPY: 0,
        SAD: 0,
        ANGRY: 0,
        CONFUSED: 0,
        DISGUSTED: 0,
        SURPRISED: 0,
        CALM: 0
      };
      dataPointsAtTimestamp.forEach(student =>
        student.emotions.forEach(emotion => (emotions[emotion.Type] += 1))
      );
      // console.log(emotions);
      const newRow = dataPointsAtTimestamp.reduce((acc, curr) => {
        curr.emotions.forEach(emotion => {});
      }, []);
    }
    return dataPointsAtTimestamp;
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
