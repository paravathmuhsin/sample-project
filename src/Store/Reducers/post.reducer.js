import { GET_POSTS } from "../Types/post.types";

const initialValue = {
  posts: [],
};
const postReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
