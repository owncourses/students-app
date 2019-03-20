import { fromJS } from "immutable";

import {
  LESSON_ACTION,
  LESSON_ACTION_SUCCESS,
  LESSON_ACTION_ERROR
} from "./constants";

const initialState = fromJS({
  loading: false,
  error: false,
  currentLesson: false
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LESSON_ACTION:
      return state.set("loading", true).set("error", false);
    case LESSON_ACTION_SUCCESS:
      return state.set("loading", false).set("currentLesson", action.lesson);
    case LESSON_ACTION_ERROR:
      return state.set("loading", false).set("error", action.error);
    default:
      return state;
  }
}

export default appReducer;
