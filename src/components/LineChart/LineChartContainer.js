import { connect } from "react-redux";
import LineChart from "./LineChart";
import { addToLineChartRows } from "../../actions";
import { bindActionCreators } from "redux";

const processLatestDatapoints = dataPoints => {
  if (dataPoints.length) {
    const emotions = {
      CONFUSED: 0,
      HAPPY: 0
    };
    const emotionPercentages = [dataPoints[dataPoints.length - 1].timestamp];
    dataPoints[dataPoints.length - 1].data.forEach(dataPoint => {
      dataPoint.emotions.forEach(emotion => {
        if (emotion.Type === "HAPPY" || emotion.Type === "CONFUSED") {
          emotions[emotion.Type] += 1;
        }
      });
    });
    const totalRegisteredEmotions = Object.values(emotions).reduce(
      (acc, value) => (acc += value)
    );
    Object.values(emotions).forEach(value => {
      emotionPercentages.push(value);
    });
    return emotionPercentages;
  }
  return [];
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: processLatestDatapoints(state.dataPoints),
    rows: state.lineChartRows,
    people: state.dataPoints.length ? state.dataPoints[0].data.length + 5 : 0
  };
};
const mapDispatchToProps = dispatch => {
  return { updateGraph: bindActionCreators(addToLineChartRows, dispatch) };
};

const LineChartContainer = connect(mapStateToProps, mapDispatchToProps)(
  LineChart
);
export default LineChartContainer;
