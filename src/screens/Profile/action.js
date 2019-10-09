import { UPDATE_USER_SUCCESS } from './reducer';

export const updateUserReducer = args => ({
  type: UPDATE_USER_SUCCESS,
  payload: args,
});
