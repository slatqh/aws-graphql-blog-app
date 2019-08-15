export const SAVE_POST_ID = 'SAVE_POST_ID';
export const TEXT_INPUT = 'TEXT_INPUT';

const initialState = {
  postId: '',
  blogId: '',
  commentId: '',
  input: '',
  name: '',
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_POST_ID:
      return { ...state, postId: action.payload };
    case TEXT_INPUT:
      return { ...state, input: action.payload };
    default:
      return state;
  }
};
