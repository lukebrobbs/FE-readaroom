import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoodBoard from './MoodBoard';

const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};

const MoodBoardContainer = connect(mapStateToProps, mapDispatchToProps)(
  MoodBoard
);

export default MoodBoardContainer;
