import { fromJS } from "immutable";
import {
  makeSelectAuthError,
  makeSelectAuthLoading,
  makeSelectUser,
  selectAuth
} from "../selectors";

describe("selectAuth", () => {
  it("should select Auth", () => {
    const authState = fromJS({
      loading: false,
      error: false,
      currentUser: false
    });
    const mockedState = fromJS({
      auth: authState
    });

    expect(selectAuth(mockedState)).toEqual(authState);
  });
});

describe("makeSelectAuthLoading", () => {
  const authLoadingSelector = makeSelectAuthLoading();
  it("should select the authLoading", () => {
    const loading = false;
    const mockedState = fromJS({
      auth: {
        loading
      }
    });
    expect(authLoadingSelector(mockedState)).toEqual(loading);
  });
});

describe("makeSelectAuthError", () => {
  const authErrorSelector = makeSelectAuthError();
  it("should select the authError", () => {
    const error = false;
    const mockedState = fromJS({
      auth: {
        error
      }
    });
    expect(authErrorSelector(mockedState)).toEqual(error);
  });
});

describe("makeSelectUser", () => {
  const userSelector = makeSelectUser();
  it("should select the user", () => {
    const currentUser = false;
    const mockedState = fromJS({
      auth: {
        currentUser
      }
    });
    expect(userSelector(mockedState)).toEqual(currentUser);
  });
});
