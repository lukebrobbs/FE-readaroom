export const ADD_NEW_DATA_POINT = "ADD_NEW_DATA_POINT";
export const CHANGE_AUTHENTICATED_USER = "CHANGE_AUTHENTICATED_USER";

export function addNewDataPoint(dataPoint) {
  return { type: ADD_NEW_DATA_POINT, dataPoint };
}
