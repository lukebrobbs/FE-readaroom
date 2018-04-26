import { connect } from "react-redux";
import MoodGauge from "./MoodGauge";

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
    let numTrackedPeople = dataPoints[dataPoints.length - 1].data.length;

    return [
      {
        emotion: "Happy",
        percentage: Math.round(emotions.HAPPY / numTrackedPeople * 100),
        goodEmotionGauge: true
      },
      {
        emotion: "Sad",
        percentage: Math.round(emotions.SAD / numTrackedPeople * 100),
        goodEmotionGauge: false
      },
      {
        emotion: "Calm",
        percentage: Math.round(emotions.CALM / numTrackedPeople * 100),
        goodEmotionGauge: true
      },
      {
        emotion: "Angry",
        percentage: Math.round(emotions.ANGRY / numTrackedPeople * 100),
        goodEmotionGauge: false
      },
      {
        emotion: "Confused",
        percentage: Math.round(emotions.CONFUSED / numTrackedPeople * 100),
        goodEmotionGauge: false
      },
      {
        emotion: "Disgusted",
        percentage: Math.round(emotions.DISGUSTED / numTrackedPeople * 100),
        goodEmotionGauge: false
      },
      {
        emotion: "Surprised",
        percentage: Math.round(emotions.SURPRISED / numTrackedPeople * 100),
        goodEmotionGauge: false
      }
    ];
  }
  return [
    { emotion: "Happy", percentage: 0, goodEmotionGauge: true },
    { emotion: "Sad", percentage: 0, goodEmotionGauge: false },
    { emotion: "Angry", percentage: 0, goodEmotionGauge: false },
    { emotion: "Calm", percentage: 0, goodEmotionGauge: true },
    { emotion: "Disgusted", percentage: 0, goodEmotionGauge: false },
    { emotion: "Surprised", percentage: 0, goodEmotionGauge: true },
    { emotion: "Confused", percentage: 0, goodEmotionGauge: false }
  ];
};

const mapStateToProps = (state, ownProps) => {
  return { data: processData(state.dataPoints) };
};
const mapDispatchToProps = dispatch => {
  return {};
};

const MoodGaugeContainer = connect(mapStateToProps, mapDispatchToProps)(
  MoodGauge
);

export default MoodGaugeContainer;
