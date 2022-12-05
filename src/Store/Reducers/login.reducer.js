const initialValue = {
  isLogin: false,
};
const loginReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogin: true };
    case "LOGOUT":
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

export default loginReducer;
