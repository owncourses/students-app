import {
  LESSON_ACTION,
  LESSON_ACTION_SUCCESS,
  LESSON_ACTION_ERROR,
  LESSON_COMPLETE_ACTION,
  LESSON_COMPLETE_ACTION_SUCCESS,
  LESSON_COMPLETE_ACTION_ERROR
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

export function lessonCompleteAction(
  isComplete: boolean,
  lessonId: string
): { type: string; payload: { isComplete: boolean; lessonId: string } } {
  return {
    type: LESSON_COMPLETE_ACTION,
    payload: {
      isComplete,
      lessonId
    }
  };
}

export function lessonCompleteActionSuccess(
  lesson: LessonInterface
): { type: string; lesson: LessonInterface } {
  return {
    type: LESSON_COMPLETE_ACTION_SUCCESS,
    lesson
  };
}

export function lessonCompleteActionError(
  error: string
): { type: string; error: string } {
  return {
    type: LESSON_COMPLETE_ACTION_ERROR,
    error
  };
}
