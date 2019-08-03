import { requestResetPassword } from "../saga";
import { put } from "redux-saga/effects";
import {
  requestResetPasswordActionError,
  requestResetPasswordActionSuccess
} from "../actions";

const requestResetPasswordPayload = { payload: "randomString" };

describe("requestResetPassword Saga", () => {
  let requestResetPasswordGenerator;

  beforeEach(() => {
    requestResetPasswordGenerator = requestResetPassword(
      requestResetPasswordPayload
    );
    const callDescriptor = requestResetPasswordGenerator.next(
      requestResetPasswordPayload
    ).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("should dispatch the requestResetPasswordActionSuccess if it requests the data successfully", () => {
    const email = "randomString";
    const putDescriptor = requestResetPasswordGenerator.next(email).value;
    expect(putDescriptor).toEqual(
      put(requestResetPasswordActionSuccess(email))
    );
  });

  it("should call the requestResetPasswordActionError if the response errors", () => {
    const err = { response: { data: { message: "Test error" } } };
    const putDescriptor = requestResetPasswordGenerator.throw(err).value;
    expect(putDescriptor).toEqual(
      put(requestResetPasswordActionError("Test error"))
    );
  });
});
