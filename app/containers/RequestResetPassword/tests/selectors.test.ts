import { fromJS } from "immutable";
import {
  makeSelectRequestResetPasswordEmail,
  makeSelectRequestResetPasswordError,
  makeSelectRequestResetPasswordLoading,
  makeSelectRequestResetPasswordSuccess,
  selectRequestResetPassword
} from "../selectors";

describe("requestResetPassword selectors", () => {
  describe("selectRequestResetPassword", () => {
    it("should select requestResetPassword", () => {
      const requestResetPasswordState = fromJS({
        loading: false,
        error: false,
        success: false,
        email: null
      });
      const mockedState = fromJS({
        requestResetPassword: requestResetPasswordState
      });

      expect(selectRequestResetPassword(mockedState)).toEqual(
        requestResetPasswordState
      );
    });
  });

  describe("makeSelectRequestResetPasswordLoading", () => {
    const requestResetPasswordLoadingSelector = makeSelectRequestResetPasswordLoading();
    it("should select the requestResetPasswordLoading", () => {
      const loading = false;
      const mockedState = fromJS({
        requestResetPassword: {
          loading
        }
      });
      expect(requestResetPasswordLoadingSelector(mockedState)).toEqual(loading);
    });
  });

  describe("makeSelectRequestResetPasswordError", () => {
    const requestResetPasswordErrorSelector = makeSelectRequestResetPasswordError();
    it("should select the requestResetPasswordError", () => {
      const error = false;
      const mockedState = fromJS({
        requestResetPassword: {
          error
        }
      });
      expect(requestResetPasswordErrorSelector(mockedState)).toEqual(error);
    });
  });

  describe("makeSelectRequestResetPasswordSuccess", () => {
    const requestResetPasswordSuccessSelector = makeSelectRequestResetPasswordSuccess();
    it("should select the requestResetPasswordSuccess", () => {
      const success = false;
      const mockedState = fromJS({
        requestResetPassword: {
          success
        }
      });
      expect(requestResetPasswordSuccessSelector(mockedState)).toEqual(success);
    });
  });

  describe("makeSelectRequestResetPasswordEmail", () => {
    const requestResetPasswordEmailSelector = makeSelectRequestResetPasswordEmail();
    it("should select the requestResetPasswordEmail", () => {
      const email = null;
      const mockedState = fromJS({
        requestResetPassword: {
          email
        }
      });
      expect(requestResetPasswordEmailSelector(mockedState)).toEqual(email);
    });
  });
});
