import {
  RESET_PASSWORD_ACTION,
  RESET_PASSWORD_ACTION_ERROR,
  RESET_PASSWORD_ACTION_SUCCESS
} from "./constatns";

export function resetPasswordAction(payload: {
  password: string;
  repeatedPassword: string;
  urlToken: string;
}): {
  type: string;
  payload: { password: string; repeatedPassword: string; urlToken: string };
} {
  return {
    type: RESET_PASSWORD_ACTION,
    payload
  };
}

export function resetPasswordActionSuccess(): { type: string } {
  return {
    type: RESET_PASSWORD_ACTION_SUCCESS
  };
}

export function resetPasswordActionError(
  error: string
): { type: string; error: string } {
  return {
    type: RESET_PASSWORD_ACTION_ERROR,
    error
  };
}
