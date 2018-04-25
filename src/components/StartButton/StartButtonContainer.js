import { connect } from "react-redux";
import moment from "moment";
import { bindActionCreators } from "redux";
import { addDataPoint } from "../../actions";
import utils from "../../utils/db";
import StartButton from "./StartButton";

const students = ["Sami", "Luke", "Joe", "Spence"];

const addToReduxState = dispatch => {
  const startTime = new Date(Date.now());
  setInterval(() => {
    const now = new Date(Date.now());
    const timestamp = Math.floor((now.getTime() - startTime.getTime()) / 1000);
    const chunkedData = [];
    students.forEach(student => {
      chunkedData.push({
        timestamp: moment().second(timestamp),
        student,
        emotions: utils.createTestEmotionData()
      });
    });
    dispatch(addDataPoint(timestamp, chunkedData));
  }, 3000);
};

const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      addToReduxState(dispatch);
    },
    addToDataPoint: bindActionCreators(addDataPoint, dispatch)
  };
};

const StartButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  StartButton
);

export default StartButtonContainer;
