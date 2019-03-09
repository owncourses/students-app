/**
 * Single Course selectors
 */

import { createSelector } from "reselect";

const selectSingleCourse = state => state.get("singleCourse");

const makeSelectSingleCourseLoading = () =>
  createSelector(
    selectSingleCourse,
    authState => authState.get("loading")
  );

const makeSelectSingleCourseError = () =>
  createSelector(
    selectSingleCourse,
    authState => authState.get("error")
  );
const makeSelectSingleCourse = () =>
  createSelector(
    selectSingleCourse,
    authState => authState.get("currentCourse")
  );

export {
  selectSingleCourse,
  makeSelectSingleCourseLoading,
  makeSelectSingleCourseError,
  makeSelectSingleCourse
};
