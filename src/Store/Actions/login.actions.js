import { LOGIN, LOGOUT } from "../Types/login.types";

export const setLogin = (payload) => ({ type: LOGIN, payload });

export const setLogout = () => ({ type: LOGOUT });
