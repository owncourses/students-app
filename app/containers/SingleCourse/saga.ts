import { COURSE_ACTION } from "./constants";
import { call, put, takeEvery } from "redux-saga/effects";
import { getAuthorizationHeaders } from "../../utils/userUtils";
import { courseActionError, courseActionSuccess } from "./actions";

// @ts-ignore
import request from "utils/request";

export function* getCourse({ payload }) {
  try {
    const { id: courseId } = payload;
    const options = {
      method: "GET",
      url: `/courses/${courseId}/modules`,
      headers: getAuthorizationHeaders()
    };
    const { data: modules } = yield call(request, options);

    yield put(courseActionSuccess(modules));
  } catch (err) {
    const { message } = err.response.data;
    yield put(courseActionError(message));
  }
}

export default function* getSingleCourse() {
  // @ts-ignore
  yield takeEvery(COURSE_ACTION, getCourse);
}
