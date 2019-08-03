import { fromJS } from "immutable";
import {
  makeSelectResetPasswordError,
  makeSelectResetPasswordLoading,
  makeSelectResetPasswordSuccess,
  selectResetPassword
} from "../selectors";

describe("resetPassword selectors", () => {
  describe("selectResetPassword", () => {
    it("should select resetPassword", () => {
      const resetPasswordState = fromJS({
        loading: false,
        error: false,
        success: false
      });
      const mockedState = fromJS({
        resetPassword: resetPasswordState
      });

      expect(selectResetPassword(mockedState)).toEqual(resetPasswordState);
    });
  });

  describe("makeSelectResetPasswordLoading", () => {
    const resetPasswordLoadingSelector = makeSelectResetPasswordLoading();
    it("should select the resetPasswordLoading", () => {
      const loading = false;
      const mockedState = fromJS({
        resetPassword: {
          loading
        }
      });
      expect(resetPasswordLoadingSelector(mockedState)).toEqual(loading);
    });
  });

  describe("makeSelectResetPasswordError", () => {
    const resetPasswordErrorSelector = makeSelectResetPasswordError();
    it("should select the resetPasswordError", () => {
      const error = false;
      const mockedState = fromJS({
        resetPassword: {
          error
        }
      });
      expect(resetPasswordErrorSelector(mockedState)).toEqual(error);
    });
  });

  describe("makeSelectResetPasswordSuccess", () => {
    const resetPasswordSuccessSelector = makeSelectResetPasswordSuccess();
    it("should select the resetPasswordSuccess", () => {
      const success = false;
      const mockedState = fromJS({
        resetPassword: {
          success
        }
      });
      expect(resetPasswordSuccessSelector(mockedState)).toEqual(success);
    });
  });
});
