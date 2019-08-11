import {
  CREATE_BOOKMARK_ACTION,
  DELETE_BOOKMARK_ACTION,
  GET_BOOKMARK_LIST_ACTION,
  LESSON_ACTION,
  LESSON_COMPLETE_ACTION
} from "./constants";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { getAuthorizationHeaders } from "../../utils/userUtils";
// @ts-ignore
import {
  createBookmarkActionError,
  createBookmarkActionSuccess,
  deleteBookmarkActionError,
  deleteBookmarkActionSuccess,
  getBookmarkListActionError,
  getBookmarkListActionSuccess,
  lessonActionError,
  lessonActionSuccess,
  lessonCompleteActionError,
  lessonCompleteActionSuccess
} from "./actions";

// @ts-ignore
import request from "utils/request";
import { Bookmark, BookmarkViewModel, LessonInterface } from "./interfaces";
import { makeSelectBookmarkList } from "./selectors";
import i18next from "i18next";

export function* getLesson({
  payload: { id: lessonId }
}: {
  payload: { id: string };
}) {
  try {
    const options = {
      method: "GET",
      url: `/lessons/${lessonId}`,
      headers: getAuthorizationHeaders()
    };
    const { data: lesson }: { data: LessonInterface } = yield call(
      request,
      options
    );

    yield put(lessonActionSuccess(lesson));
  } catch (err) {
    const { message } = err.response.data;
    yield put(lessonActionError(message || i18next.t("Something goes wrong")));
  }
}

export function* completeLesson({
  payload: { isComplete, lessonId }
}: {
  payload: { isComplete: boolean; lessonId: string };
}) {
  try {
    const options = {
      method: "PUT",
      url: `/lessons/${lessonId}/progress`,
      data: JSON.stringify({
        completed: isComplete
      }),
      headers: getAuthorizationHeaders()
    };

    const { data: lesson }: { data: LessonInterface } = yield call(
      request,
      options
    );

    yield put(lessonCompleteActionSuccess(lesson));
  } catch (err) {
    const { message } = err.response.data;
    yield put(lessonCompleteActionError(message));
  }
}

export function* createBookmark({
  payload: { title, bookmarkTime: timeInSeconds, lessonId }
}: {
  payload: Bookmark;
}) {
  try {
    const options = {
      method: "POST",
      url: `/lessons/${lessonId}/bookmarks`,
      data: JSON.stringify({
        title,
        timeInSeconds
      }),
      headers: getAuthorizationHeaders()
    };

    const { data: bookmark }: { data: BookmarkViewModel } = yield call(
      request,
      options
    );

    const bookmarkList = yield select(makeSelectBookmarkList());

    bookmarkList.push(bookmark);

    // Sorting Bookmark List by time
    bookmarkList.sort((a: BookmarkViewModel, b: BookmarkViewModel) => {
      return a.time_in_seconds - b.time_in_seconds;
    });

    yield put(createBookmarkActionSuccess(bookmarkList));
  } catch (err) {
    const { message } = err.response.data;
    yield put(createBookmarkActionError(message));
  }
}

export function* getBookmarkList({ payload: lessonId }: { payload: string }) {
  try {
    const options = {
      method: "GET",
      url: `/lessons/${lessonId}/bookmarks`,
      headers: getAuthorizationHeaders()
    };

    const { data: bookmarkList }: { data: BookmarkViewModel[] } = yield call(
      request,
      options
    );

    // Sorting Bookmark List by time
    bookmarkList.sort((a: BookmarkViewModel, b: BookmarkViewModel) => {
      return a.time_in_seconds - b.time_in_seconds;
    });

    yield put(getBookmarkListActionSuccess(bookmarkList));
  } catch (err) {
    const { message } = err.response.data;
    yield put(getBookmarkListActionError(message));
  }
}

export function* deleteBookmark({ payload: bookmarkId }: { payload: string }) {
  try {
    const options = {
      method: "DELETE",
      url: `/bookmarks/${bookmarkId}`,
      headers: getAuthorizationHeaders()
    };

    yield call(request, options);

    const bookmarkList = yield select(makeSelectBookmarkList());
    const updatedBookmarkList: BookmarkViewModel[] = bookmarkList.filter(
      (bookmark: BookmarkViewModel) => bookmark.id !== bookmarkId
    );

    yield put(deleteBookmarkActionSuccess(updatedBookmarkList));
  } catch (err) {
    const { message } = err.response.data;
    yield put(deleteBookmarkActionError(message));
  }
}

export default function* getSingleLesson() {
  // @ts-ignore
  yield takeEvery(LESSON_ACTION, getLesson);
  // @ts-ignore
  yield takeEvery(LESSON_COMPLETE_ACTION, completeLesson);
  // @ts-ignore
  yield takeEvery(CREATE_BOOKMARK_ACTION, createBookmark);
  // @ts-ignore
  yield takeEvery(GET_BOOKMARK_LIST_ACTION, getBookmarkList);
  // @ts-ignore
  yield takeEvery(DELETE_BOOKMARK_ACTION, deleteBookmark);
}
