import axios from "axios";
// import { client_id } from "../../secret";

//initial state
const initialState = {
  user_id: null,
  username: "",
  email: ""
};

//const strings
const GET_SESSION = "GET_SESSION";
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

//functions
export function getSession(username: any) {
  return {
    type: GET_SESSION,
    payload: axios.get(`/auth/user?username=${username}`)
  };
}

export function registerUser(newUser: any) {
  return {
    type: REGISTER_USER,
    payload: axios.post("/auth/register", newUser)
  };
}

export function loginUser(user: any) {
  return {
    type: LOGIN_USER,
    payload: axios.post("/auth/login", user)
  };
}

export function logoutUser() {
  axios.post("/auth/logout");
  return {
    type: LOGOUT_USER
  };
}



//reducer
export default function reducer(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_SESSION}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.username,
        email: payload.data.email
      };
    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.username,
        email: payload.data.email
      };
    case `${LOGIN_USER}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.username,
        email: payload.data.email
      };
    case LOGOUT_USER:
      return {
        user_id: null,
        username: "",
        email: ""
      };
    default:
      return state;
  }
}