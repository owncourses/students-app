import {
  COURSE_ACTION,
  COURSE_ACTION_SUCCESS,
  COURSE_ACTION_ERROR
} from "./constants";

export function courseAction(
  id: number
): { type: string; payload: { id: number } } {
  return {
    type: COURSE_ACTION,
    payload: { id }
  };
}

export function courseActionSuccess(
  modules: any
): { type: string; modules: any } {
  return {
    type: COURSE_ACTION_SUCCESS,
    modules
  };
}

export function courseActionError(
  error: string
): { type: string; error: string } {
  return {
    type: COURSE_ACTION_ERROR,
    error
  };
}
