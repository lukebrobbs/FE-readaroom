import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Setup from './Setup';
import addInput from '../../actions';

const setupSession = session => {
  const hardCoded = {username: 'hello', sessionName='mySession'}
  dispatch(addSession, hardCoded)
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {}
};

const SetupContainer = connect(mapStateToProps, mapDispatchToProps)(Setup);

export default SetupContainer;
