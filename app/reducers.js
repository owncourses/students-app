/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux-immutable";
import { connectRouter } from "connected-react-router/immutable";
import authReducer from "containers/Auth/reducer";
import resetPassword from "containers/ResetPassword/reducer";
import requestResetPassword from "containers/RequestResetPassword/reducer";
import singleCourseReducer from "containers/SingleCourse/reducer";
import singleLessonReducer from "containers/SingleLesson/reducer";

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(history, injectedReducers) {
  return combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    resetPassword,
    requestResetPassword,
    singleCourse: singleCourseReducer,
    singleLesson: singleLessonReducer,
    ...injectedReducers
  });
}
