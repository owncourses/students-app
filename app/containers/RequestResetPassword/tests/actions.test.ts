import {
  requestResetPasswordAction,
  requestResetPasswordActionError,
  requestResetPasswordActionSuccess
} from "../actions";
import {
  REQUEST_RESET_PASSWORD,
  REQUEST_RESET_PASSWORD_ERROR,
  REQUEST_RESET_PASSWORD_SUCCESS
} from "../constants";

describe("RequestResetPassword actions", () => {
  describe("requestResetPasswordAction", () => {
    it("should return the correct type and the passed payload", () => {
      const fixture = "randomString";
      const expectedResult = {
        type: REQUEST_RESET_PASSWORD,
        payload: fixture
      };

      expect(requestResetPasswordAction(fixture)).toEqual(expectedResult);
    });
  });
  describe("requestResetPasswordActionSuccess", () => {
    it("should return correct type and the passed payload", () => {
      const fixture = "randomString";
      const expectedResult = {
        type: REQUEST_RESET_PASSWORD_SUCCESS,
        payload: fixture
      };

      expect(requestResetPasswordActionSuccess(fixture)).toEqual(
        expectedResult
      );
    });
  });
  describe("requestResetPasswordActionError", () => {
    it("should return correct type and passed payload", () => {
      const error: string = "Test error message";
      const expectedResult = {
        type: REQUEST_RESET_PASSWORD_ERROR,
        error
      };

      expect(requestResetPasswordActionError(error)).toEqual(expectedResult);
    });
  });
});
