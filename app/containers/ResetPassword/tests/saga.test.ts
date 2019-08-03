import { resetPassword } from "../saga";
import { put } from "redux-saga/effects";
import {
  resetPasswordActionError,
  resetPasswordActionSuccess
} from "../actions";

const resetPasswordPayload = {
  payload: {
    password: "password",
    repeatedPassword: "password",
    urlToken: "randomString"
  }
};

describe("resetPassword Saga", () => {
  let resetPasswordGenerator;

  beforeEach(() => {
    resetPasswordGenerator = resetPassword(resetPasswordPayload);
    const callDescriptor = resetPasswordGenerator.next(resetPasswordPayload)
      .value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("should dispatch the resetPasswordActionSuccess if it requests the data successfully", () => {
    const putDescriptor = resetPasswordGenerator.next().value;
    expect(putDescriptor).toEqual(put(resetPasswordActionSuccess()));
  });

  it("should call the resetPasswordActionError if the response errors", () => {
    const err = { response: { data: { message: "Test error" } } };
    const putDescriptor = resetPasswordGenerator.throw(err).value;
    expect(putDescriptor).toEqual(put(resetPasswordActionError("Test error")));
  });
});
