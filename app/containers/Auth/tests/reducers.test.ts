import { fromJS } from "immutable";
import authReducer from "../reducer";
import { authAction, authActionError, authActionSuccess } from "../actions";
import { userLoginInterface } from "../constants";
import { UserInterface } from "../interfaces";
import * as user from "./mocks/user.json";

describe("auth Reducer", () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      currentUser: false,
      notifications: null
    });
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(authReducer(undefined, {})).toEqual(expectedResult);
  });

  it("should handle the authAction correctly", () => {
    const fixture: userLoginInterface = {
      username: "test",
      password: "password"
    };
    const expectedResult = state.set("loading", true).set("error", false);

    expect(authReducer(state, authAction(fixture))).toEqual(expectedResult);
  });

  it("should handle the authActionSuccess correctly", () => {
    const fixture: UserInterface = user;
    const expectedResult = state.set("loading", false).set("currentUser", user);

    expect(authReducer(state, authActionSuccess(fixture))).toEqual(
      expectedResult
    );
  });

  it("should handle the authActionError correctly", () => {
    const fixture: string = "Sample error message";
    const expectedResult = state.set("loading", false).set("error", fixture);

    expect(authReducer(state, authActionError(fixture))).toEqual(
      expectedResult
    );
  });
});
