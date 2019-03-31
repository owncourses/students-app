import {
  LESSON_ACTION,
  LESSON_ACTION_ERROR,
  LESSON_ACTION_SUCCESS
} from "../constants";
import {
  lessonAction,
  lessonActionError,
  lessonActionSuccess
} from "../actions";
import * as lesson from "./mocks/lesson.json";
import { LessonInterface } from "../interfaces";

describe("SingleLesson actions", () => {
  describe("lessonAction", () => {
    it("should return the correct type and the passed payload", () => {
      const fixture: string = "1";
      const expectedResult = {
        type: LESSON_ACTION,
        payload: { id: fixture }
      };

      expect(lessonAction(fixture)).toEqual(expectedResult);
    });
  });

  describe("lessonActionSuccess", () => {
    it("should return the correct type and the passed payload", () => {
      const fixture: LessonInterface = lesson;
      const expectedResult = {
        type: LESSON_ACTION_SUCCESS,
        lesson: fixture
      };
      expect(lessonActionSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe("lessonActionError", () => {
    it("should return the correct type and the passed payload", () => {
      const error: string = "Test error message";
      const fixture: string = error;
      const expectedResult = {
        type: LESSON_ACTION_ERROR,
        error
      };

      expect(lessonActionError(fixture)).toEqual(expectedResult);
    });
  });
});
