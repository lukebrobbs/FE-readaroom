import { connect } from 'react-redux';
import MoodBars from './MoodBars';

const processData = dataPoints => {
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
    dataPoints[dataPoints.length - 1].data.forEach(dataPoint => {
      dataPoint.emotions.forEach(emotion => (emotions[emotion.Type] += 1));
    });
    const totalHS = emotions.HAPPY + emotions.SAD;
    const totalAC = emotions.ANGRY + emotions.CALM;

    return {
      happy: Math.round(emotions.HAPPY / totalHS * 100),
      sad: Math.round(emotions.SAD / totalHS * 100),
      angry: Math.round(emotions.ANGRY / totalAC * 100),
      calm: Math.round(emotions.CALM / totalAC * 100)
    };
  }
  return {
    happy: 50,
    sad: 50,
    angry: 50,
    confused: 50,
    disgusted: 50,
    surprised: 50,
    calm: 50
  };
};

const mapStateToProps = (state, ownProps) => {
  return { data: processData(state.dataPoints) };
};
const mapDispatchToProps = dispatch => {
  return {};
};

const MoodBarsContainer = connect(mapStateToProps, mapDispatchToProps)(
  MoodBars
);

export default MoodBarsContainer;
