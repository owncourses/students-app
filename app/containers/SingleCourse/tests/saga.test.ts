import getSingleCourse, { getCourse } from "../saga";
import * as course from "./mocks/course.json";
import * as user from "./../../Auth/tests/mocks/user.json";
import { put, takeEvery } from "redux-saga/effects";
import { courseActionError, courseActionSuccess } from "../actions";
import { COURSE_ACTION } from "../constants";
import { CourseInterface } from "../../Auth/interfaces";

const coursePayload = { payload: { id: "1" } };

describe("getCourse Saga", () => {
  let getCourseGenerator;

  beforeEach(() => {
    getCourseGenerator = getCourse(coursePayload);
    const callDescriptor = getCourseGenerator.next(coursePayload).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("should dispatch the courseActionSuccess if it requests the data successfully", () => {
    const response: { data: CourseInterface } = { data: course };
    getCourseGenerator.next({ data: response.data.modules });
    const putDescriptor = getCourseGenerator.next({ courses: user.courses })
      .value;
    expect(putDescriptor).toEqual(put(courseActionSuccess(response.data)));
  });

  it("should call the authActionError if the response errors", () => {
    const err = { response: { data: { message: "Test error" } } };
    const putDescriptor = getCourseGenerator.throw(err).value;
    expect(putDescriptor).toEqual(put(courseActionError("Test error")));
  });
});

describe("getSingleCourse Saga", () => {
  const getSingleCourseSaga = getSingleCourse();

  it("should start task to watch for COURSE_ACTION action", () => {
    const takeEveryDescriptor = getSingleCourseSaga.next().value;
    // @ts-ignore
    expect(takeEveryDescriptor).toEqual(takeEvery(COURSE_ACTION, getCourse));
  });
});
