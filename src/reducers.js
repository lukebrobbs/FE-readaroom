import { combineReducers } from "redux";
import produce from "immer";
import {
  ADD_TO_TIME_CHART_ROWS,
  ADD_TO_LINE_CHART_ROWS,
  ADD_DATA_POINT,
  UPDATE_ALL
} from "./actions";

function dataPoints(state = [], action) {
  return produce(state, draftState => {
    switch (action.type) {
      case ADD_DATA_POINT:
        draftState.push({
          timestamp: action.timeStamp,
          data: action.dataPoint
        });
        return draftState;
      case UPDATE_ALL:
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
function lineChartRows(
  state = [["Time (s)", "Confused", "Happy"], [0, 0, 0]],
  action
) {
  return produce(state, draftState => {
    switch (action.type) {
      case ADD_TO_LINE_CHART_ROWS:
        draftState.push(action.coordinates);
        return draftState;
      case UPDATE_ALL:
        draftState.push(action.graphCoordinates);
        return draftState;
      default:
        return state;
    }
  });
}

function timeChartRows(
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
      case ADD_TO_TIME_CHART_ROWS:
        draftState.push(action.coordinates);
        return draftState;
      case UPDATE_ALL:
        draftState.push(action.chartCoordinates);
        return draftState;
      default:
        return state;
    }
  });
}

const reducers = combineReducers({ dataPoints, timeChartRows, lineChartRows });

export default reducers;
