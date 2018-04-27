import { connect } from 'react-redux';
import LiveStats from './LiveStats';

const mapStateToProps = (state, ownProps) => {
  return { dataPoints: state.dataPoints };
};
const mapDispatchToProps = dispatch => {
  return {};
};

const LiveStatsContainer = connect(mapStateToProps, mapDispatchToProps)(
  LiveStats
);

export default LiveStatsContainer;
