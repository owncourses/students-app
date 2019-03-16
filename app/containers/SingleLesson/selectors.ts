import { createSelector } from "reselect";

const selectSingleLesson = state => state.get("singleLesson");

const makeSelectSingleLessonLoading = () =>
  createSelector(
    selectSingleLesson,
    lessonState => lessonState.get("loading")
  );

const makeSelectSingleLessonError = () =>
  createSelector(
    selectSingleLesson,
    lessonState => lessonState.get("error")
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
  makeSelectSingleLesson
};
