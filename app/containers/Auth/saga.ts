import { call, put, select, takeEvery } from "redux-saga/effects";
import * as ReactGA from "react-ga";
import {
  AUTH_ACTION,
  LOGOUT_ACTION,
  USER_ACTION,
  userLoginInterface
} from "./constants";
// @ts-ignore
import request from "utils/request";
import {
  authActionError,
  authActionSuccess,
  logoutActionSuccess
} from "./actions";
import { getAuthorizationHeaders, setToken } from "../../utils/userUtils";
import { makeSelectAuthError } from "./selectors";
import { UserInterface } from "./interfaces";
import { logout } from "./auth-logic";

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
    }: { data: { token: string } } = yield call(request, options);

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
    const { data: user }: { data: UserInterface } = yield call(
      request,
      options
    );

    ReactGA.set({ userId: user.id });
    yield put(authActionSuccess(user));
  } catch (err) {
    let { message } = err.response.data;

    if (err.response.status === 500) {
      message = err.response.statusText;
    }

    yield put(authActionError(message));
  }
}

export function* login({ payload }: { payload: userLoginInterface }) {
  try {
    yield call(getTokenFromApi, payload);

    const err = yield select(makeSelectAuthError());

    if (!err) {
      yield call(getUser);
    }
  } catch (err) {
    const { message } = err.response.data;
    yield put(authActionError(message));
  }
}

export function* logoutSaga() {
  try {
    logout();

    yield put(logoutActionSuccess());
  } catch (err) {
    //This console is placed here purposely.
    console.warn(err);
  }
}

export default function* authFlow() {
  // @ts-ignore
  yield takeEvery(AUTH_ACTION, login);
  yield takeEvery(LOGOUT_ACTION, logoutSaga);
  yield takeEvery(USER_ACTION, getUser);
}
