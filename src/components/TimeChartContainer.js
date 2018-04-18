import { connect } from "react-redux";
import TimeChart from "./TimeChart";
import { addToRows } from "../actions";
import { bindActionCreators } from "redux";

const processLatestDatapoints = dataPoint => {
  if (dataPoint.length) {
    const currentTimeStamp = dataPoint[dataPoint.length - 1].timeStamp;
    const arrayToReduce = [];

    for (let i = dataPoint.length - 1; i > 0; i--) {
      if (dataPoint[i].timeStamp !== currentTimeStamp) break;
      arrayToReduce.push(dataPoint[i]);
    }
    return arrayToReduce;
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
