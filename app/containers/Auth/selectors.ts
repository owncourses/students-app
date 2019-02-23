/**
 * Auth selectors
 */

import { createSelector } from "reselect";

const selectAuth = state => state.get("auth");

const makeSelectAuthLoading = () =>
  createSelector(
    selectAuth,
    authState => authState.get("loading")
  );

const makeSelectAuthError = () =>
  createSelector(
    selectAuth,
    authState => authState.get("error")
  );

export { selectAuth, makeSelectAuthLoading, makeSelectAuthError };
