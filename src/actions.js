// export const CHANGE_AUTHENTICATED_USER = 'CHANGE_AUTHENTICATED_USER';
export const ADD_TO_ROWS = "ADD_TO_ROWS";
export const ADD_DATA_POINT = "ADD_DATA_POINT";

export function addToRows(coordinates) {
  return { type: ADD_TO_ROWS, coordinates };
}
export function addDataPoint(timeStamp, dataPoint) {
  return { type: ADD_DATA_POINT, timeStamp, dataPoint };
}
