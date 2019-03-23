import {
  LESSON_ACTION,
  LESSON_ACTION_SUCCESS,
  LESSON_ACTION_ERROR
} from "./constants";
import { LessonInterface } from "./interfaces";

export function lessonAction(
  id: string
): { type: string; payload: { id: string } } {
  return {
    type: LESSON_ACTION,
    payload: { id }
  };
}

export function lessonActionSuccess(
  lesson: LessonInterface
): { type: string; lesson: LessonInterface } {
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
