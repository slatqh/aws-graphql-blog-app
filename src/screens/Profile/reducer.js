export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

const initialState = {
  userId: null,
  cognitoId: null,
  lastName: null,
  firstName: null,
  instrument: null,
  gender: null,
};

export default (state = initialState, { type, payload }) => {
  console.log('PAYLOAD', payload);
  switch (type) {
    case UPDATE_USER:
      return { ...state, userID: payload };

    default:
      return state;
  }
};
