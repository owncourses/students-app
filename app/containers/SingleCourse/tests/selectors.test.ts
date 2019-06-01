import { fromJS } from "immutable";
import {
  makeSelectSingleCourseError,
  makeSelectSingleCourseLoading,
  makeSelectSingleCourse,
  selectSingleCourse
} from "../selectors";

describe("singleCourse selectors", () => {
  describe("selectSingleCourse", () => {
    it("should select singleCourse", () => {
      const singleCourseState = fromJS({
        loading: false,
        error: false,
        modules: false
      });
      const mockedState = fromJS({
        singleCourse: singleCourseState
      });

      expect(selectSingleCourse(mockedState)).toEqual(singleCourseState);
    });
  });

  describe("makeSelectSingleCourseLoading", () => {
    const singleCourseLoadingSelector = makeSelectSingleCourseLoading();
    it("should select the singleCourseLoading", () => {
      const loading = false;
      const mockedState = fromJS({
        singleCourse: {
          loading
        }
      });
      expect(singleCourseLoadingSelector(mockedState)).toEqual(loading);
    });
  });

  describe("makeSelectSingleCourseError", () => {
    const singleCourseErrorSelector = makeSelectSingleCourseError();
    it("should select the singleCourseError", () => {
      const error = false;
      const mockedState = fromJS({
        singleCourse: {
          error
        }
      });
      expect(singleCourseErrorSelector(mockedState)).toEqual(error);
    });
  });

  describe("makeSelectSingleCourseModules", () => {
    const singleCourseModulesSelector = makeSelectSingleCourse();
    it("should select the singleCourseModules", () => {
      const course = false;
      const mockedState = fromJS({
        singleCourse: {
          course
        }
      });
      expect(singleCourseModulesSelector(mockedState)).toEqual(course);
    });
  });
});
