import { getPosts } from "../../Services/post.service";
import { GET_POSTS } from "../Types/post.types";

export const getPostAction = () => (dispatch, getState) => {
  //   console.log(getState());
  getPosts().then((res) => {
    dispatch({
      type: GET_POSTS,
      payload: res,
    });
  });
};
