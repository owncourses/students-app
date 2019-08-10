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
import { Bookmark, BookmarkViewModel, LessonInterface } from "./interfaces";

export function lessonAction(
  id: string
): { type: string; payload: { id: string } } {
  return {
    type: LESSON_ACTION,
    payload: { id }
  };
}
export function lessonActionSuccess(
  lesson: LessonInterface
): { type: string; lesson: LessonInterface } {
  return {
    type: LESSON_ACTION_SUCCESS,
    lesson
  };
}
export function lessonActionError(
  error: string
): { type: string; error: string } {
  return {
    type: LESSON_ACTION_ERROR,
    error
  };
}

export function lessonCompleteAction(
  isComplete: boolean,
  lessonId: string
): { type: string; payload: { isComplete: boolean; lessonId: string } } {
  return {
    type: LESSON_COMPLETE_ACTION,
    payload: {
      isComplete,
      lessonId
    }
  };
}
export function lessonCompleteActionSuccess(
  lesson: LessonInterface
): { type: string; lesson: LessonInterface } {
  return {
    type: LESSON_COMPLETE_ACTION_SUCCESS,
    lesson
  };
}
export function lessonCompleteActionError(
  error: string
): { type: string; error: string } {
  return {
    type: LESSON_COMPLETE_ACTION_ERROR,
    error
  };
}

export function createBookmarkAction(
  bookmark: Bookmark
): { type: string; payload: Bookmark } {
  return {
    type: CREATE_BOOKMARK_ACTION,
    payload: bookmark
  };
}
export function createBookmarkActionSuccess(
  bookmarkList: BookmarkViewModel[]
): { type: string; bookmarkList: BookmarkViewModel[] } {
  return {
    type: CREATE_BOOKMARK_ACTION_SUCCESS,
    bookmarkList
  };
}
export function createBookmarkActionError(
  error: string
): { type: string; error: string } {
  return {
    type: CREATE_BOOKMARK_ACTION_ERROR,
    error
  };
}

export function getBookmarkListAction(
  lessonId: string
): { type: string; payload: string } {
  return {
    type: GET_BOOKMARK_LIST_ACTION,
    payload: lessonId
  };
}
export function getBookmarkListActionSuccess(
  bookmarkList: BookmarkViewModel[]
): { type: string; bookmarkList: BookmarkViewModel[] } {
  return {
    type: GET_BOOKMARK_LIST_ACTION_SUCCESS,
    bookmarkList
  };
}
export function getBookmarkListActionError(
  error: string
): { type: string; error: string } {
  return {
    type: GET_BOOKMARK_LIST_ACTION_ERROR,
    error
  };
}

export function deleteBookmarkAction(
  bookmarkId: string
): { type: string; payload: string } {
  return {
    type: DELETE_BOOKMARK_ACTION,
    payload: bookmarkId
  };
}
export function deleteBookmarkActionSuccess(
  bookmarkList: BookmarkViewModel[]
): { type: string; bookmarkList: BookmarkViewModel[] } {
  return {
    type: DELETE_BOOKMARK_ACTION_SUCCESS,
    bookmarkList
  };
}
export function deleteBookmarkActionError(
  error: string
): { type: string; error: string } {
  return {
    type: DELETE_BOOKMARK_ACTION_ERROR,
    error
  };
}
