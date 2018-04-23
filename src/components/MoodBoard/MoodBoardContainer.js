import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoodBoard from './MoodBoard';

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
    const emotionPercentages = [dataPoints[dataPoints.length - 1].timestamp];
    dataPoints[dataPoints.length - 1].data.forEach(dataPoint => {
      dataPoint.emotions.forEach(emotion => (emotions[emotion.Type] += 1));
    });
    const totalHS = emotions.HAPPY + emotions.SAD;
    const totalAC = emotions.ANGRY + emotions.CALM;
    const totalSDC =
      emotions.SURPRISED + emotions.DISGUSTED + emotions.CONFUSED;
    return {
      occupants: dataPoints[dataPoints.length - 1].data.length,
      happy: Math.round(emotions.HAPPY / totalHS) * 100,
      sad: Math.round(emotions.SAD / totalHS) * 100,
      angry: Math.round(emotions.ANGRY / totalAC) * 100,
      calm: Math.round(emotions.CALM / totalAC) * 100,
      surprised: Math.round(emotions.SURPRISED / totalSDC) * 100,
      disgusted: Math.round(emotions.DISGUSTED / totalSDC) * 100,
      confused: Math.round(emotions.CONFUSED / totalSDC) * 100
    };
  }
  return {
    happy: 50,
    sad: 50,
    angry: 50,
    confused: 33,
    disgusted: 33,
    surprised: 34,
    calm: 50
  };
};

const mapStateToProps = (state, ownProps) => {
  return { data: processData(state.dataPoints) };
};
const mapDispatchToProps = dispatch => {
  return {};
};

const MoodBoardContainer = connect(mapStateToProps, mapDispatchToProps)(
  MoodBoard
);

export default MoodBoardContainer;
