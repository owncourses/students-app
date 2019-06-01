import {
  COURSE_ACTION,
  COURSE_ACTION_SUCCESS,
  COURSE_ACTION_ERROR
} from "./constants";
import { ModuleInterface } from "./interfaces";
import { CourseInterface } from "../Auth/interfaces";

export function courseAction(
  id: string
): { type: string; payload: { id: string } } {
  return {
    type: COURSE_ACTION,
    payload: { id }
  };
}

export function courseActionSuccess(
  course: CourseInterface
): { type: string; course: CourseInterface } {
  return {
    type: COURSE_ACTION_SUCCESS,
    course
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
