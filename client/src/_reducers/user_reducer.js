import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginSuccess: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        register: action.payload,
      };
    case AUTH_USER:
      // userData : 모든 유정 정보가 담겨 있다.
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}
