import {
  AUTH_ACTION,
  AUTH_ACTION_ERROR,
  AUTH_ACTION_SUCCESS,
  USER_ACTION,
  userLoginInterface
} from "../constants";
import {
  authAction,
  authActionError,
  authActionSuccess,
  getUser
} from "../actions";
import { UserInterface } from "../interfaces";
import * as user from "./mocks/user.json";

describe("Auth actions", () => {
  describe("authAction", () => {
    it("should return the correct type and the passed payload", () => {
      const fixture: userLoginInterface = {
        username: "test",
        password: "password"
      };
      const expectedResult = {
        type: AUTH_ACTION,
        payload: fixture
      };

      expect(authAction(fixture)).toEqual(expectedResult);
    });
  });
  describe("authActionSuccess", () => {
    it("should return correct type and the passed payload", () => {
      const fixture: UserInterface = user;
      const expectedResult = {
        type: AUTH_ACTION_SUCCESS,
        user
      };
      expect(authActionSuccess(fixture)).toEqual(expectedResult);
    });
  });
  describe("authActionError", () => {
    it("should return correct type and passed payload", () => {
      const error: string = "Test error message";
      const fixture: string = error;
      const expectedResult = {
        type: AUTH_ACTION_ERROR,
        error
      };

      expect(authActionError(fixture)).toEqual(expectedResult);
    });
  });
  describe("userAction", () => {
    it("should return correct type", () => {
      const expectedResult = {
        type: USER_ACTION
      };

      expect(getUser()).toEqual(expectedResult);
    });
  });
});
