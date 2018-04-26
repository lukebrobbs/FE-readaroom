// export const CHANGE_AUTHENTICATED_USER = 'CHANGE_AUTHENTICATED_USER';
/* Actions */
export const ADD_TO_TIME_CHART_ROWS = "ADD_TO_TIME_CHART_ROWS";
export const ADD_TO_LINE_CHART_ROWS = "ADD_TO_LINE_CHART_ROWS";
export const ADD_DATA_POINT = "ADD_DATA_POINT";
export const UPDATE_ALL = "UPDATE_ALL";

/* Action Creators */
export function addToTimeChartRows(coordinates) {
  return { type: ADD_TO_TIME_CHART_ROWS, coordinates };
}
export function addToLineChartRows(coordinates) {
  return { type: ADD_TO_LINE_CHART_ROWS, coordinates };
}
export function addDataPoint(timeStamp, dataPoint) {
  return { type: ADD_DATA_POINT, timeStamp, dataPoint };
}
export function updateAll(
  timeStamp,
  dataPoint,
  chartCoordinates,
  graphCoordinates
) {
  return {
    type: UPDATE_ALL,
    timeStamp,
    dataPoint,
    chartCoordinates,
    graphCoordinates
  };
}
