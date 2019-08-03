/**
 * Auth selectors
 */

import { createSelector } from "reselect";

const selectRequestResetPassword = state => state.get("requestResetPassword");
const makeSelectRequestResetPasswordLoading = () =>
  createSelector(
    selectRequestResetPassword,
    requestResetPasswordState => requestResetPasswordState.get("loading")
  );
const makeSelectRequestResetPasswordError = () =>
  createSelector(
    selectRequestResetPassword,
    requestResetPasswordState => requestResetPasswordState.get("error")
  );
const makeSelectRequestResetPasswordSuccess = () =>
  createSelector(
    selectRequestResetPassword,
    requestResetPasswordState => requestResetPasswordState.get("success")
  );
const makeSelectRequestResetPasswordEmail = () =>
  createSelector(
    selectRequestResetPassword,
    requestResetPasswordState => requestResetPasswordState.get("email")
  );

export {
  selectRequestResetPassword,
  makeSelectRequestResetPasswordLoading,
  makeSelectRequestResetPasswordError,
  makeSelectRequestResetPasswordSuccess,
  makeSelectRequestResetPasswordEmail
};
