import { fromJS } from "immutable";

import {
  AUTH_ACTION,
  AUTH_ACTION_SUCCESS,
  AUTH_ACTION_ERROR
} from "./constants";

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTION:
      return state.set("loading", true).set("error", false);
    case AUTH_ACTION_SUCCESS:
      return state.set("loading", false).set("currentUser", action.user);
    case AUTH_ACTION_ERROR:
      return state.set("loading", false).set("error", action.error);
    default:
      return state;
  }
}

export default appReducer;
