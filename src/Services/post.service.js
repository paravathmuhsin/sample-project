import Axios from "../Utility/Axios";

export const getPosts = () => {
  return Axios.get("/posts").then((res) => res.data);
};

export const getPostDetails = (id) => {
  return Axios.get("/posts/" + id).then((res) => res.data);
};
