import {
  REQUEST_RESET_PASSWORD,
  REQUEST_RESET_PASSWORD_ERROR,
  REQUEST_RESET_PASSWORD_SUCCESS
} from "./constants";

export function requestResetPasswordAction(
  payload: string
): { type: string; payload: string } {
  return {
    type: REQUEST_RESET_PASSWORD,
    payload
  };
}

export function requestResetPasswordActionSuccess(
  email: string
): { type: string; payload: string } {
  return {
    type: REQUEST_RESET_PASSWORD_SUCCESS,
    payload: email
  };
}

export function requestResetPasswordActionError(
  error: string
): { type: string; error: string } {
  return {
    type: REQUEST_RESET_PASSWORD_ERROR,
    error
  };
}
