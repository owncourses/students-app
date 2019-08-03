import { call, put, takeEvery } from "redux-saga/effects";
import request from "../../utils/request";
import {
  requestResetPasswordActionError,
  requestResetPasswordActionSuccess
} from "./actions";
import { REQUEST_RESET_PASSWORD } from "./constants";
import { getAuthorizationHeaders } from "../../utils/userUtils";

function* requestResetPassword({ payload }: { payload: string }) {
  try {
    const options = {
      method: "POST",
      url: `/users/password/reset_request`,
      data: JSON.stringify({ email: payload }),
      headers: getAuthorizationHeaders()
    };

    console.log(options);

    yield call(request, options);

    yield put(requestResetPasswordActionSuccess(payload));
  } catch (err) {
    const { message } = err.response.data;
    yield put(requestResetPasswordActionError(message));
  }
}

export default function* requestResetPasswordFlow() {
  // @ts-ignore
  yield takeEvery(REQUEST_RESET_PASSWORD, requestResetPassword);
}
