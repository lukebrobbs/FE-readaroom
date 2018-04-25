import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Stats from './Stats';
import moment from 'moment';

const calculateAverageAge = dataPoints => {
  if (dataPoints.length) {
    const lastDataPoint = dataPoints[dataPoints.length - 1];
    const averageAge =
      lastDataPoint.data.reduce((a, b) => {
        return a + b.ageGroup;
      }, 0) / lastDataPoint.data.length;
    return `${averageAge} years`;
  }
  return 'N/A';
};

const calculateNumberOfFaces = dataPoints => {
  if (dataPoints.length) {
    const lastDataPoint = dataPoints[dataPoints.length - 1];
    return lastDataPoint.data.length;
  }
  return 'No faces currently detected';
};

const calculateSessionDuration = dataPoints => {
  if (dataPoints.length) {
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    averageAge: calculateAverageAge(state.dataPoints),
    facesRecognised: calculateNumberOfFaces(state.dataPoints)
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

const StatsContainer = connect(mapStateToProps, mapDispatchToProps)(Stats);

export default StatsContainer;
