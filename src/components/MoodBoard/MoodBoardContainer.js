import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoodBoard from './MoodBoard';

const mapStateToProps = (state, ownProps) => {
  return { happy: '60%', sad: '40%' };
};
const mapDispatchToProps = dispatch => {
  return {};
};

const MoodBoardContainer = connect(mapStateToProps, mapDispatchToProps)(
  MoodBoard
);

export default MoodBoardContainer;
