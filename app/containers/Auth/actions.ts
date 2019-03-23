import {
  AUTH_ACTION,
  AUTH_ACTION_ERROR,
  AUTH_ACTION_SUCCESS,
  USER_ACTION,
  userLoginInterface
} from "./constants";
import { UserInterface } from "./interfaces";

export function authAction(
  payload: userLoginInterface
): { type: string; payload: userLoginInterface } {
  return {
    type: AUTH_ACTION,
    payload
  };
}

export function authActionSuccess(
  user: UserInterface
): { type: string; user: UserInterface } {
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

export function getUser(): { type: string } {
  return {
    type: USER_ACTION
  };
}
