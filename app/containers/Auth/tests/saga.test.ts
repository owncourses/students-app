import { getTokenFromApi, getUser } from "../saga";
import { userLoginInterface } from "../constants";
import { setToken } from "../../../utils/userUtils";
import { put } from "redux-saga/effects";
import { authActionError, authActionSuccess } from "../actions";
import * as user from "./mocks/user.json";

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
