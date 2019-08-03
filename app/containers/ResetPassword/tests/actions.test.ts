import {
  resetPasswordAction,
  resetPasswordActionError,
  resetPasswordActionSuccess
} from "../actions";
import {
  RESET_PASSWORD_ACTION,
  RESET_PASSWORD_ACTION_ERROR,
  RESET_PASSWORD_ACTION_SUCCESS
} from "../constatns";

describe("ResetPassword actions", () => {
  describe("resetPasswordAction", () => {
    it("should return the correct type and the passed payload", () => {
      const fixture = {
        repeatedPassword: "password",
        password: "password",
        urlToken: "randomString"
      };
      const expectedResult = {
        type: RESET_PASSWORD_ACTION,
        payload: fixture
      };

      expect(resetPasswordAction(fixture)).toEqual(expectedResult);
    });
  });
  describe("resetPasswordActionSuccess", () => {
    it("should return correct type and the passed payload", () => {
      const expectedResult = {
        type: RESET_PASSWORD_ACTION_SUCCESS
      };
      expect(resetPasswordActionSuccess()).toEqual(expectedResult);
    });
  });
  describe("resetPasswordActionError", () => {
    it("should return correct type and passed payload", () => {
      const error: string = "Test error message";
      const expectedResult = {
        type: RESET_PASSWORD_ACTION_ERROR,
        error
      };

      expect(resetPasswordActionError(error)).toEqual(expectedResult);
    });
  });
});
