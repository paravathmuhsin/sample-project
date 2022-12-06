import { LOGIN, LOGOUT } from "../Types/login.types";

const initialValue = {
  isLogin: Boolean(localStorage.getItem("isLogin")),
  loggedUser: JSON.parse(localStorage.getItem("loggedUser")),
  token: localStorage.getItem("token"),
};
const loginReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        loggedUser: action.payload.user,
        token: action.payload.token,
      };
    case LOGOUT:
      return { ...state, isLogin: false, loggedUser: null, token: null };
    default:
      return state;
  }
};

export default loginReducer;
