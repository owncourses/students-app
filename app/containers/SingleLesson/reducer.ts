import { fromJS } from "immutable";

import {
  LESSON_ACTION,
  LESSON_ACTION_SUCCESS,
  LESSON_ACTION_ERROR,
  LESSON_COMPLETE_ACTION,
  LESSON_COMPLETE_ACTION_SUCCESS,
  LESSON_COMPLETE_ACTION_ERROR
} from "./constants";

const initialState = fromJS({
  loading: false,
  completeLoading: false,
  completeError: false,
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
    case LESSON_COMPLETE_ACTION:
      return state.set("completeLoading", true).set("completeError", false);
    case LESSON_COMPLETE_ACTION_SUCCESS:
      return state
        .set("completeLoading", false)
        .set("currentLesson", action.lesson);
    case LESSON_COMPLETE_ACTION_ERROR:
      return state
        .set("completeLoading", false)
        .set("completeError", action.error);
    default:
      return state;
  }
}

export default appReducer;
