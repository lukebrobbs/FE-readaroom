import { ADD_NEW_DATA_POINT, ADD_TO_ROWS } from "./actions";
import { combineReducers } from "redux";

import produce from "immer";

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

function rows(state = [], action) {
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
