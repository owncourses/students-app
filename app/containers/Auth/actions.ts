import {
  AUTH_ACTION,
  AUTH_ACTION_ERROR,
  AUTH_ACTION_SUCCESS,
  userLoginInterface
} from "./constants";

export function authAction(
  payload: userLoginInterface
): { type: string; payload: userLoginInterface } {
  return {
    type: AUTH_ACTION,
    payload
  };
}

export function authActionSuccess(user: any): { type: string; user: any } {
  return {
    type: AUTH_ACTION_SUCCESS,
    user
  };
}

export function authActionError(
  error: string
): { type: string; error: string } {
  return {
    type: AUTH_ACTION_ERROR,
    error
  };
}
