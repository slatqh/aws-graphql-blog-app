export const GET_BLOG_ID = 'GET_BLOG_ID';
export const TEXT_INPUT = 'TEXT_INPUT';

const initialState = {
  postId: '',
  blogId: '',
  commentId: '',
  showingPosts: false,
  showingComments: false,
  input: '',
  postTitle: '',
  name: '',
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG_ID:
      return {
        ...state,
        showingPosts: true,
        blogId: action.id,
        postTitle: action.name,
      };
    case TEXT_INPUT:
      return { ...state, input: action.payload };
    default:
      return state;
  }
};
