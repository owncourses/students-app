import { COURSE_ACTION } from "./constants";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { getAuthorizationHeaders } from "../../utils/userUtils";
import { courseActionError, courseActionSuccess } from "./actions";
// @ts-ignore
import request from "utils/request";
import { makeSelectUser } from "../Auth/selectors";
import { CourseInterface } from "../Auth/interfaces";

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
    const { data: modules }: { data: CourseInterface } = yield call(
      request,
      options
    );

    const userState = yield select(makeSelectUser());
    const parsedCourseId = parseInt(courseId);
    const singleCourse = userState.courses.find(
      course => course.id === parsedCourseId
    ) || {
      authors: []
    };

    const course = {
      ...singleCourse,
      modules
    };

    yield put(courseActionSuccess(course));
  } catch (err) {
    const { message }: { message: string } = err.response.data;
    yield put(courseActionError(message));
  }
}

export default function* getSingleCourse() {
  // @ts-ignore
  yield takeEvery(COURSE_ACTION, getCourse);
}
