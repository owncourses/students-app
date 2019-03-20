import {
  LESSON_ACTION,
  LESSON_ACTION_SUCCESS,
  LESSON_ACTION_ERROR
} from "./constants";

export function lessonAction(
  id: number
): { type: string; payload: { id: number } } {
  return {
    type: LESSON_ACTION,
    payload: { id }
  };
}

export function lessonActionSuccess(
  lesson: any
): { type: string; lesson: any } {
  return {
    type: LESSON_ACTION_SUCCESS,
    lesson
  };
}

export function lessonActionError(
  error: string
): { type: string; error: string } {
  return {
    type: LESSON_ACTION_ERROR,
    error
  };
}
