/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { AUTH_ACTION, USER_ACTION, userLoginInterface } from "./constants";

// @ts-ignore
import request from "utils/request";
import { authActionError, authActionSuccess } from "./actions";
import { getAuthorizationHeaders, setToken } from "../../utils/userUtils";
import { makeSelectAuthError } from "./selectors";

export function* getTokenFromApi(payload: userLoginInterface) {
  try {
    const options = {
      method: "POST",
      url: `/login_check`,
      data: JSON.stringify(payload),
      headers: getAuthorizationHeaders()
    };
    const {
      data: { token }
    } = yield call(request, options);

    setToken(token);
  } catch (err) {
    const { message } = err.response.data;
    yield put(authActionError(message));
  }
}

export function* getUser() {
  try {
    const options = {
      method: "GET",
      url: `/users/me`,
      headers: getAuthorizationHeaders()
    };
    const { data: user } = yield call(request, options);

    yield put(authActionSuccess(user));
  } catch (err) {
    const { message } = err.response.data;
    yield put(authActionError(message));
  }
}

export function* login({ payload }) {
  try {
    yield call(getTokenFromApi, payload);

    const err = yield select(makeSelectAuthError());

    if (!err) {
      yield call(getUser);
    }
  } catch (err) {
    yield put(authActionError(err.message));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* authFlow() {
  // @ts-ignore
  yield takeEvery(AUTH_ACTION, login);
  yield takeEvery(USER_ACTION, getUser);
}
