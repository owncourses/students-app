import { fromJS } from "immutable";
import * as _ from "lodash";
import {
  AUTH_ACTION,
  AUTH_ACTION_SUCCESS,
  AUTH_ACTION_ERROR,
  USER_ACTION,
  LOGOUT_ACTION_SUCCESS,
  NOTIFICATIONS_ACTION_SUCCESS,
  TOGGLE_NOTIFICATION_ACTION_SUCCESS
} from "./constants";

const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  notifications: null
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
    case NOTIFICATIONS_ACTION_SUCCESS:
      return state.set("notifications", action.payload);
    case TOGGLE_NOTIFICATION_ACTION_SUCCESS:
      return state.set("notifications", action.payload);
    default:
      return state;
  }
}

export default authReducer;
