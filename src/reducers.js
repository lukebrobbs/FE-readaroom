import { ADD_NEW_DATA_POINT } from './actions';
import { combineReducers } from 'redux';

import produce from 'immer';

function dataPoint(state = [], action) {
  return produce(state, draftState => {
    switch (action.type) {
      case ADD_NEW_DATA_POINT:
        draftState.push({
          timestamp: action.timestamp,
          student: action.student,
          emotions: action.emotions
        });
        return draftState;
      default:
        return state;
    }
  });
}

const reducers = combineReducers({ dataPoint });

export default reducers;
