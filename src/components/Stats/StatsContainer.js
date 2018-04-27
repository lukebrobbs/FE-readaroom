import { connect } from 'react-redux';
import Stats from './Stats';

const calculateAverageAge = dataPoints => {
  if (dataPoints.length > 1) {
    const lastDataPoint = dataPoints[dataPoints.length - 1];
    const averageAge =
      lastDataPoint.data.reduce((a, b) => {
        return a + b.ageGroup;
      }, 0) / lastDataPoint.data.length;
    const roundedAge = Math.floor(averageAge);
    return `${roundedAge}`;
  }
  return '-';
};

const calculateNumberOfFaces = dataPoints => {
  if (dataPoints.length > 1) {
    const lastDataPoint = dataPoints[dataPoints.length - 1];
    return lastDataPoint.data.length;
  }
  return '-';
};

const calculateSessionLatency = dataPoints => {
  if (dataPoints.length > 1) {
    const timeNow = Date.now();
    const delay = dataPoints[dataPoints.length - 1].liveTimestamp - timeNow;
    return delay / 100 + 's';
  }
  return '-';
};

const mapStateToProps = (state, ownProps) => {
  return {
    averageAge: calculateAverageAge(state.dataPoints),
    facesRecognised: calculateNumberOfFaces(state.dataPoints),
    sessionLatency: calculateSessionLatency(state.dataPoints)
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

const StatsContainer = connect(mapStateToProps, mapDispatchToProps)(Stats);

export default StatsContainer;
