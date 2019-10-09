export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

const initialState = {
  user: null,
  userId: null,
  cognitoId: null,
  gender: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_USER_SUCCESS:
      return { ...state, user: payload.user, userID: payload.userID };

    default:
      return state;
  }
};

// firstName: this.state.firstName,
// lastName: this.state.lastName,
// username: this.state.username,
// instrument: this.state.instrument,
