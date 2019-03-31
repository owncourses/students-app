import { fromJS } from "immutable";
import {
  makeSelectSingleLesson,
  makeSelectSingleLessonError,
  makeSelectSingleLessonLoading,
  selectSingleLesson
} from "../selectors";

describe("SingleLesson Selectors", () => {
  describe("selectSingleLesson", () => {
    it("should select singleLesson", () => {
      const singleLessonState = fromJS({
        loading: false,
        error: false,
        currentLesson: false
      });
      const mockedState = fromJS({
        singleLesson: singleLessonState
      });

      expect(selectSingleLesson(mockedState)).toEqual(singleLessonState);
    });
  });

  describe("makeSelectSingleLessonLoading", () => {
    const singleLessonLoadingSelector = makeSelectSingleLessonLoading();
    it("should select the singleLessonLoading", () => {
      const loading = false;
      const mockedState = fromJS({
        singleLesson: {
          loading
        }
      });
      expect(singleLessonLoadingSelector(mockedState)).toEqual(loading);
    });
  });

  describe("makeSelectSingleLessonError", () => {
    const singleLessonErrorSelector = makeSelectSingleLessonError();
    it("should select the singleLessonError", () => {
      const error = false;
      const mockedState = fromJS({
        singleLesson: {
          error
        }
      });
      expect(singleLessonErrorSelector(mockedState)).toEqual(error);
    });
  });

  describe("makeSelectSingleLesson", () => {
    const singleLessonSelector = makeSelectSingleLesson();
    it("should select the singleLesson", () => {
      const currentLesson = false;
      const mockedState = fromJS({
        singleLesson: {
          currentLesson
        }
      });
      expect(singleLessonSelector(mockedState)).toEqual(currentLesson);
    });
  });
});
