export const ADD_NEW_DATA_POINT = 'ADD_NEW_DATA_POINT';
export const CHANGE_AUTHENTICATED_USER = 'CHANGE_AUTHENTICATED_USER';
export const ADD_TO_ROWS = 'ADD_TO_ROWS';
export const ADD_MULTIPLE_DATA_POINTS = 'ADD_MULTIPLE_DATA_POINTS';

export function addNewDataPoint(timestamp, student, emotions) {
  return { type: ADD_NEW_DATA_POINT, timestamp, student, emotions };
}

export function addToRows(coordinates) {
  return { type: ADD_TO_ROWS, coordinates };
}
export function addMultipleDataPoints(timeStamp, dataPoints) {
  return { type: ADD_MULTIPLE_DATA_POINTS, timeStamp, dataPoints };
}
