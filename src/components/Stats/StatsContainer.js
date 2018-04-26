import { connect } from "react-redux";
import Stats from "./Stats";

const calculateAverageAge = dataPoints => {
  if (dataPoints.length) {
    const lastDataPoint = dataPoints[dataPoints.length - 1];
    const averageAge =
      lastDataPoint.data.reduce((a, b) => {
        return a + b.ageGroup;
      }, 0) / lastDataPoint.data.length;
    const roundedAge = Math.floor(averageAge);
    return `${roundedAge}`;
  }
  return "N/A";
};

const calculateNumberOfFaces = dataPoints => {
  if (dataPoints.length) {
    const lastDataPoint = dataPoints[dataPoints.length - 1];
    return lastDataPoint.data.length;
  }
  return 0;
};

const calculateSessionDuration = dataPoints => {
  if (dataPoints.length) {
    const startTime = dataPoints[dataPoints.length - 1].timestamp;
    return startTime;
  }
  return "--:--:--";
};

const mapStateToProps = (state, ownProps) => {
  return {
    averageAge: calculateAverageAge(state.dataPoints),
    facesRecognised: calculateNumberOfFaces(state.dataPoints),
    sessionDuration: calculateSessionDuration(state.dataPoints)
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

const StatsContainer = connect(mapStateToProps, mapDispatchToProps)(Stats);

export default StatsContainer;
