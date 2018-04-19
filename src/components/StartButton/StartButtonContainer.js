import { connect } from 'react-redux';
import moment from 'moment';
import { addDataPoint } from '../../actions';
import utils from '../../utils/db';
import StartButton from './StartButton';

const students = ['Sami', 'Luke', 'Joe', 'Spence'];

const addToReduxState = dispatch => {
  const startTime = moment()._d;
  setInterval(() => {
    const timestamp = moment()._d - startTime;
    const chunkedData = [];
    students.forEach(student => {
      chunkedData.push({
        timestamp,
        student,
        emotions: utils.createTestEmotionData()
      });
    });
    dispatch(addDataPoint(timestamp, chunkedData));
  }, 2000);
};

const mapStateToProps = (state, ownProps) => {
  return { addToReduxState };
};
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      addToReduxState(dispatch);
    }
  };
};

const StartButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  StartButton
);

export default StartButtonContainer;
