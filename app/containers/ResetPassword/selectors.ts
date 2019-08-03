import { createSelector } from "reselect";

const selectResetPassword = state => state.get("resetPassword");
const makeSelectResetPasswordLoading = () =>
  createSelector(
    selectResetPassword,
    authState => authState.get("loading")
  );
const makeSelectResetPasswordError = () =>
  createSelector(
    selectResetPassword,
    authState => authState.get("error")
  );
const makeSelectResetPasswordSuccess = () =>
  createSelector(
    selectResetPassword,
    authState => authState.get("success")
  );

export {
  makeSelectResetPasswordLoading,
  makeSelectResetPasswordError,
  makeSelectResetPasswordSuccess
};
