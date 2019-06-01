import {
  COURSE_ACTION,
  COURSE_ACTION_ERROR,
  COURSE_ACTION_SUCCESS
} from "../constants";
import {
  courseAction,
  courseActionError,
  courseActionSuccess
} from "../actions";
import * as course from "./mocks/course.json";
import { CourseInterface } from "../../Auth/interfaces";

describe("SingleCourse Actions", () => {
  describe("courseAction", () => {
    it("should return the correct type and the passed payload", () => {
      const fixture: string = "1";
      const expectedResult = {
        type: COURSE_ACTION,
        payload: { id: fixture }
      };

      expect(courseAction(fixture)).toEqual(expectedResult);
    });
  });

  describe("courseActionSuccess", () => {
    it("should return the correct type and the passed payload", () => {
      const fixture: CourseInterface = course;
      const expectedResult = {
        type: COURSE_ACTION_SUCCESS,
        course
      };
      expect(courseActionSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe("courseActionError", () => {
    it("should return the correct type and the passed payload", () => {
      const error: string = "Test error message";
      const fixture: string = error;
      const expectedResult = {
        type: COURSE_ACTION_ERROR,
        error
      };

      expect(courseActionError(fixture)).toEqual(expectedResult);
    });
  });
});
