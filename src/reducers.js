import {
  ADD_NEW_DATA_POINT,
  ADD_TO_ROWS,
  ADD_MULTIPLE_DATA_POINTS
} from './actions';
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
      case ADD_MULTIPLE_DATA_POINTS:
        draftState.push({
          timestamp: action.timeStamp,
          data: action.dataPoints
        });
        return draftState;
      default:
        return state;
    }
  });
}

function rows(
  state = [
    [
      'Time (s)',
      'Disgusted',
      'Angry',
      'Calm',
      'Suprised',
      'Confused',
      'Sad',
      'Happy'
    ]
  ],
  action
) {
  return produce(state, draftState => {
    switch (action.type) {
      case ADD_TO_ROWS:
        draftState.push(action.coordinates);
        return draftState;
      default:
        return state;
    }
  });
}

const reducers = combineReducers({ dataPoint, rows });

export default reducers;
