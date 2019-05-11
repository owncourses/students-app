import getSingleLesson, { getLesson } from "../saga";
import * as lesson from "./mocks/lesson.json";
import { put, takeEvery } from "redux-saga/effects";
import { lessonActionError, lessonActionSuccess } from "../actions";
import { LESSON_ACTION } from "../constants";
import { LessonInterface } from "../interfaces";

const lessonPayload = { payload: { id: "1" } };

describe("getLesson Saga", () => {
  let getLessonGenerator;

  beforeEach(() => {
    getLessonGenerator = getLesson(lessonPayload);
    const callDescriptor = getLessonGenerator.next(lessonPayload).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("should dispatch the lessonActionSuccess if it requests the data successfully", () => {
    const response: { data: LessonInterface } = { data: lesson };
    const putDescriptor = getLessonGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(lessonActionSuccess(response.data)));
  });

  it("should call the authActionError if the response errors", () => {
    const err = { response: { data: { message: "Test error" } } };
    const putDescriptor = getLessonGenerator.throw(err).value;
    expect(putDescriptor).toEqual(put(lessonActionError("Test error")));
  });
});

describe("getSingleLesson Saga", () => {
  const getSingleLessonSaga = getSingleLesson();

  it("should start task to watch for LESSON_ACTION action", () => {
    const takeEveryDescriptor = getSingleLessonSaga.next().value;
    // @ts-ignore
    expect(takeEveryDescriptor).toEqual(takeEvery(LESSON_ACTION, getLesson));
  });
});
