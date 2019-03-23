import {
  COURSE_ACTION,
  COURSE_ACTION_SUCCESS,
  COURSE_ACTION_ERROR
} from "./constants";
import { ModuleInterface } from "./interfaces";

export function courseAction(
  id: string
): { type: string; payload: { id: string } } {
  return {
    type: COURSE_ACTION,
    payload: { id }
  };
}

export function courseActionSuccess(
  modules: [ModuleInterface]
): { type: string; modules: [ModuleInterface] } {
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
