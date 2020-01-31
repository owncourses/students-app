import { call, put, takeEvery } from "redux-saga/effects";
import { RESET_PASSWORD_ACTION } from "./constatns";
import { getAuthorizationHeaders } from "../../utils/userUtils";
import request from "../../utils/request";
import {
  resetPasswordActionError,
  resetPasswordActionSuccess
} from "./actions";

export function* resetPassword({
  payload: { urlToken, ...rest }
}: {
  payload: { password: string; repeatedPassword: string; urlToken: string };
}) {
  try {
    const options = {
      method: "POST",
      url: `/users/password/reset?token=${urlToken}`,
      data: JSON.stringify({ ...rest }),
      headers: getAuthorizationHeaders()
    };

    yield call(request, options);

    yield put(resetPasswordActionSuccess());
  } catch (err) {
    const { message } = err.response.data;
    yield put(resetPasswordActionError(message));
  }
}

export default function* resetPasswordFlow() {
  // @ts-ignore
  yield takeEvery(RESET_PASSWORD_ACTION, resetPassword);
}
