import { ADD_TO_ROWS, ADD_DATA_POINT } from "./actions";
import { combineReducers } from "redux";

import produce from "immer";

function dataPoints(state = [], action) {
  return produce(state, draftState => {
    switch (action.type) {
      case ADD_DATA_POINT:
        draftState.push({
          timestamp: action.timeStamp,
          data: action.dataPoint
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
      "Time (s)",
      "Disgusted",
      "Angry",
      "Calm",
      "Suprised",
      "Confused",
      "Sad",
      "Happy"
    ],
    [0, 0, 0, 0, 0, 0, 0, 0]
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

const reducers = combineReducers({ dataPoints, rows });

export default reducers;
