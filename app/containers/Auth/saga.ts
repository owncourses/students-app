/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeEvery } from "redux-saga/effects";
import { AUTH_ACTION, requestUrl, userLoginInterface } from "./constants";

// @ts-ignore
import request from "utils/request";
import { authActionError, authActionSuccess } from "./actions";
import {
  getAuthorizationHeaders,
  getToken,
  setToken
} from "../../utils/userUtils";
import { makeSelectAuthError } from "./selectors";

/**
 * Github repos request/response handler
 */
export function* getTokenAsync(payload: userLoginInterface) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: getAuthorizationHeaders()
    };
    const res = yield call(request, `${requestUrl}/login_check`, options);

    setToken(res.token);
  } catch (err) {
    yield put(authActionError(err.message));
  }
}

export function* getUser() {
  // TODO: Add func to get user
}

export function* login({ payload }) {
  try {
    yield call(getTokenAsync, payload);

    const err = yield select(makeSelectAuthError());

    if (!err) {
      const user = { username: "Bartek" };

      yield put(authActionSuccess(user));
    }
  } catch (err) {
    yield put(authActionError(err.message));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* authFlow() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // @ts-ignore
  yield takeEvery(AUTH_ACTION, login);
}
