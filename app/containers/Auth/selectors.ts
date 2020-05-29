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
const makeSelectUser = () =>
  createSelector(
    selectAuth,
    authState => authState.get("currentUser")
  );
const makeSelectNotifications = () =>
  createSelector(
    selectAuth,
    authState => authState.get("notifications")
  );
export {
  selectAuth,
  makeSelectNotifications,
  makeSelectAuthLoading,
  makeSelectAuthError,
  makeSelectUser
};
