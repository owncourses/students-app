import { fromJS } from "immutable";
import {
  resetPasswordAction,
  resetPasswordActionError,
  resetPasswordActionSuccess
} from "../actions";
import resetPasswordReducer from "../reducer";

describe("resetPassword Reducer", () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      success: false
    });
  });

  it("should return the initial state", () => {
    expect(resetPasswordReducer(undefined, {})).toEqual(state);
  });

  it("should handle the resetPassword correctly", () => {
    const fixture = {
      repeatedPassword: "password",
      password: "password",
      urlToken: "randomString"
    };
    const expectedResult = state.set("loading", true);

    expect(resetPasswordReducer(state, resetPasswordAction(fixture))).toEqual(
      expectedResult
    );
  });

  it("should handle the resetPasswordSuccess correctly", () => {
    const expectedResult = state.set("loading", false).set("success", true);

    expect(resetPasswordReducer(state, resetPasswordActionSuccess())).toEqual(
      expectedResult
    );
  });

  it("should handle the resetPasswordError correctly", () => {
    const fixture: string = "Sample error message";
    const expectedResult = state.set("loading", false).set("error", fixture);

    expect(
      resetPasswordReducer(state, resetPasswordActionError(fixture))
    ).toEqual(expectedResult);
  });
});
