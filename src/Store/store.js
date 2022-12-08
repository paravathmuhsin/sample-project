import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Reducers/login.reducer";
import postReducer from "./Reducers/post.reducer";

const store = configureStore({
  reducer: {
    login: loginReducer,
    post: postReducer,
  },
});
export default store;
