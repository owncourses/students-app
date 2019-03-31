import { fromJS } from "immutable";

import {
  COURSE_ACTION,
  COURSE_ACTION_SUCCESS,
  COURSE_ACTION_ERROR
} from "./constants";

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  modules: false
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case COURSE_ACTION:
      return state.set("loading", true).set("error", false);
    case COURSE_ACTION_SUCCESS:
      return state.set("loading", false).set("modules", action.modules);
    case COURSE_ACTION_ERROR:
      return state.set("loading", false).set("error", action.error);
    default:
      return state;
  }
}

export default appReducer;
