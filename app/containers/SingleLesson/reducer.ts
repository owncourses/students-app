import { fromJS } from "immutable";

import {
  LESSON_ACTION,
  LESSON_ACTION_SUCCESS,
  LESSON_ACTION_ERROR,
  LESSON_COMPLETE_ACTION,
  LESSON_COMPLETE_ACTION_SUCCESS,
  LESSON_COMPLETE_ACTION_ERROR,
  CREATE_BOOKMARK_ACTION,
  CREATE_BOOKMARK_ACTION_SUCCESS,
  CREATE_BOOKMARK_ACTION_ERROR,
  GET_BOOKMARK_LIST_ACTION,
  GET_BOOKMARK_LIST_ACTION_SUCCESS,
  GET_BOOKMARK_LIST_ACTION_ERROR,
  DELETE_BOOKMARK_ACTION,
  DELETE_BOOKMARK_ACTION_SUCCESS,
  DELETE_BOOKMARK_ACTION_ERROR
} from "./constants";

const initialState = fromJS({
  loading: false,
  completeLoading: false,
  completeError: false,
  error: false,
  currentLesson: false,
  bookmarkLoading: true,
  bookmarkError: false,
  bookmarkList: null
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

    case CREATE_BOOKMARK_ACTION:
      return state.set("bookmarkLoading", true).set("bookmarkError", false);
    case CREATE_BOOKMARK_ACTION_SUCCESS:
      return state
        .set("bookmarkLoading", false)
        .set("bookmarkList", action.bookmarkList);
    case CREATE_BOOKMARK_ACTION_ERROR:
      return state
        .set("bookmarkLoading", false)
        .set("bookmarkError", action.error);

    case GET_BOOKMARK_LIST_ACTION:
      return state.set("bookmarkLoading", true).set("bookmarkError", false);
    case GET_BOOKMARK_LIST_ACTION_SUCCESS:
      return state
        .set("bookmarkLoading", false)
        .set("bookmarkList", action.bookmarkList);
    case GET_BOOKMARK_LIST_ACTION_ERROR:
      return state
        .set("bookmarkLoading", false)
        .set("bookmarkError", action.error);

    case DELETE_BOOKMARK_ACTION:
      return state.set("bookmarkError", false);
    case DELETE_BOOKMARK_ACTION_SUCCESS:
      return state.set("bookmarkList", action.bookmarkList);
    case DELETE_BOOKMARK_ACTION_ERROR:
      return state.set("bookmarkError", action.error);

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
