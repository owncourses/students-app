import { LESSON_ACTION } from "./constants";
import { call, put, takeEvery } from "redux-saga/effects";
import { getAuthorizationHeaders } from "../../utils/userUtils";
// @ts-ignore
import { lessonActionError, lessonActionSuccess } from "./actions";

// @ts-ignore
import request from "utils/request";

export function* getLesson({ payload }) {
  try {
    const { id: lessonId } = payload;
    const options = {
      method: "GET",
      url: `/lessons/${lessonId}`,
      headers: getAuthorizationHeaders()
    };
    const { data: lesson } = yield call(request, options);

    yield put(lessonActionSuccess(lesson));
  } catch (err) {
    const { message } = err.response.data;
    yield put(lessonActionError(message));
  }
}

export default function* getSingleLesson() {
  // @ts-ignore
  yield takeEvery(LESSON_ACTION, getLesson);
}
