import { fromJS } from "immutable";
import {
  requestResetPasswordAction,
  requestResetPasswordActionError,
  requestResetPasswordActionSuccess
} from "../actions";
import requestResetPasswordReducer from "../reducer";

describe("requestResetPassword Reducer", () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      success: false,
      email: null
    });
  });

  it("should return the initial state", () => {
    expect(requestResetPasswordReducer(undefined, {})).toEqual(state);
  });

  it("should handle the requestResetPassword correctly", () => {
    const fixture = "randomString";
    const expectedResult = state.set("loading", true);

    expect(
      requestResetPasswordReducer(state, requestResetPasswordAction(fixture))
    ).toEqual(expectedResult);
  });

  it("should handle the requestResetPasswordSuccess correctly", () => {
    const fixture = "randomString";
    const expectedResult = state
      .set("loading", false)
      .set("success", true)
      .set("email", fixture);

    expect(
      requestResetPasswordReducer(
        state,
        requestResetPasswordActionSuccess(fixture)
      )
    ).toEqual(expectedResult);
  });

  it("should handle the requestResetPasswordError correctly", () => {
    const fixture: string = "Sample error message";
    const expectedResult = state.set("loading", false).set("error", fixture);

    expect(
      requestResetPasswordReducer(
        state,
        requestResetPasswordActionError(fixture)
      )
    ).toEqual(expectedResult);
  });
});
