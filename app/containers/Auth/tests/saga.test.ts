import authFlow, { getTokenFromApi, getUser, login } from "../saga";
import { AUTH_ACTION, USER_ACTION, userLoginInterface } from "../constants";
import { setToken } from "../../../utils/userUtils";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { authActionError, authActionSuccess } from "../actions";
import * as user from "./mocks/user.json";
import { makeSelectAuthError } from "../selectors";

const userLoginData: userLoginInterface = {
  username: "test",
  password: "password"
};

describe("getTokenFromApi Saga", () => {
  let getTokenFromApiGenerator;

  beforeEach(() => {
    localStorage.clear();
    getTokenFromApiGenerator = getTokenFromApi(userLoginData);
    const callDescriptor = getTokenFromApiGenerator.next(userLoginData).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("should put token in localstorage if it requests the data successfully", () => {
    const response = { data: { token: "test_token" } };
    setToken(response.data.token);
    const token = localStorage.getItem("token");
    expect(token).toEqual(response.data.token);
  });

  it("should call the authActionError if the response errors", () => {
    const err = { response: { data: { message: "Test error" } } };
    const putDescriptor = getTokenFromApiGenerator.throw(err).value;
    expect(putDescriptor).toEqual(put(authActionError("Test error")));
  });
});

describe("getUser Saga", () => {
  let getUserGenerator;

  beforeEach(() => {
    getUserGenerator = getUser();
    const callDescriptor = getUserGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("should dispatch the authActionSuccess if it requests the data successfully", () => {
    const response = { data: user };
    const putDescriptor = getUserGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(authActionSuccess(response.data)));
  });

  it("should call the authActionError if the response errors", () => {
    const err = { response: { data: { message: "Test error" } } };
    const putDescriptor = getUserGenerator.throw(err).value;
    expect(putDescriptor).toEqual(put(authActionError("Test error")));
  });
});

describe("login Saga", () => {
  let loginGenerator;

  beforeEach(() => {
    loginGenerator = login({ payload: userLoginData });
    const callDescriptor = loginGenerator.next().value;
    console.log(callDescriptor);
    expect(callDescriptor).toMatchSnapshot();
  });

  it("should call the getUser saga if no errors", () => {
    const selectDescriptor = loginGenerator.next().value;

    expect(JSON.stringify(selectDescriptor)).toEqual(
      JSON.stringify(select(makeSelectAuthError()))
    );

    const callUserDescriptor = loginGenerator.next().value;

    expect(callUserDescriptor).toEqual(call(getUser));
  });

  it("should call the authActionError if the ", () => {
    const err = { response: { data: { message: "Test error" } } };

    const putDescriptor = loginGenerator.throw(err).value;
    expect(putDescriptor).toEqual(put(authActionError("Test error")));
  });
});

describe("authFlow Saga", () => {
  const authFlowSaga = authFlow();

  it("should start task to watch for AUTH_ACTION action", () => {
    const takeEveryDescriptor = authFlowSaga.next().value;
    // @ts-ignore
    expect(takeEveryDescriptor).toEqual(takeEvery(AUTH_ACTION, login));
  });

  it("should start task to watch for USER_ACTION action", () => {
    const takeEveryDescriptor = authFlowSaga.next().value;
    // @ts-ignore
    expect(takeEveryDescriptor).toEqual(takeEvery(USER_ACTION, getUser));
  });
});
