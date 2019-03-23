import { COURSE_ACTION } from "./constants";
import { call, put, takeEvery } from "redux-saga/effects";
import { getAuthorizationHeaders } from "../../utils/userUtils";
import { courseActionError, courseActionSuccess } from "./actions";
// @ts-ignore
import request from "utils/request";
import { ModuleInterface } from "./interfaces";

export function* getCourse({
  payload: { id: courseId }
}: {
  payload: { id: string };
}) {
  try {
    const options = {
      method: "GET",
      url: `/courses/${courseId}/modules`,
      headers: getAuthorizationHeaders()
    };
    const { data: modules }: { data: [ModuleInterface] } = yield call(
      request,
      options
    );

    yield put(courseActionSuccess(modules));
  } catch (err) {
    const { message }: { message: string } = err.response.data;
    yield put(courseActionError(message));
  }
}

export default function* getSingleCourse() {
  // @ts-ignore
  yield takeEvery(COURSE_ACTION, getCourse);
}
