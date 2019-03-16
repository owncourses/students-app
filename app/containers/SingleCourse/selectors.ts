/**
 * Single Course selectors
 */

import { createSelector } from "reselect";

const selectSingleCourse = state => state.get("singleCourse");

const makeSelectSingleCourseLoading = () =>
  createSelector(
    selectSingleCourse,
    singleCourse => singleCourse.get("loading")
  );

const makeSelectSingleCourseError = () =>
  createSelector(
    selectSingleCourse,
    singleCourse => singleCourse.get("error")
  );

const makeSelectSingleCourseModules = () =>
  createSelector(
    selectSingleCourse,
    singleCourse => singleCourse.get("modules")
  );

export {
  selectSingleCourse,
  makeSelectSingleCourseLoading,
  makeSelectSingleCourseError,
  makeSelectSingleCourseModules
};
