import Axios from "../Utility/Axios";

export const getUsers = () => {
  return Axios.get("/users").then((res) => res.data);
};

export const getUserDetails = (id) => {
  return Axios.get("/users/" + id).then((res) => res.data);
};
