import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Summary from './Summary';

const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};

const SummaryContainer = connect(mapStateToProps, mapDispatchToProps)(Summary);

export default SummaryContainer;
