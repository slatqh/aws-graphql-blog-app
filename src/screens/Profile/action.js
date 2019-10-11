import { UPDATE_USER_SUCCESS } from "./reducer";

export const updateUserReducer = (user, userID) => ({
  type: UPDATE_USER_SUCCESS,
  payload: { user, userID }
});
