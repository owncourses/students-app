import { createSelector } from "reselect";

const selectSingleLesson = state => state.get("singleLesson");

const makeSelectSingleLessonLoading = () =>
  createSelector(
    selectSingleLesson,
    lessonState => lessonState.get("loading")
  );

const makeSelectSingleLessonCompleteLoading = () =>
  createSelector(
    selectSingleLesson,
    lessonState => lessonState.get("completeLoading")
  );

const makeSelectSingleLessonError = () =>
  createSelector(
    selectSingleLesson,
    lessonState => lessonState.get("error")
  );

const makeSelectSingleLessonCompleteError = () =>
  createSelector(
    selectSingleLesson,
    lessonState => lessonState.get("completeError")
  );

const makeSelectSingleLesson = () =>
  createSelector(
    selectSingleLesson,
    lessonState => lessonState.get("currentLesson")
  );

export {
  selectSingleLesson,
  makeSelectSingleLessonLoading,
  makeSelectSingleLessonError,
  makeSelectSingleLesson,
  makeSelectSingleLessonCompleteLoading,
  makeSelectSingleLessonCompleteError
};
