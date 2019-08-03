import { fromJS } from "immutable";

import {
  AUTH_ACTION,
  AUTH_ACTION_SUCCESS,
  AUTH_ACTION_ERROR,
  USER_ACTION,
  LOGOUT_ACTION_SUCCESS
} from "./constants";

const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTION:
      return state.set("loading", true).set("error", false);
    case AUTH_ACTION:
      return state.set("loading", true).set("error", false);
    case AUTH_ACTION_SUCCESS:
      return state.set("loading", false).set("currentUser", action.user);
    case AUTH_ACTION_ERROR:
      return state.set("loading", false).set("error", action.error);
    case LOGOUT_ACTION_SUCCESS:
      return state.set("currentUser", false);
    default:
      return state;
  }
}

export default authReducer;
