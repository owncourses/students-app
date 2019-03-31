import { fromJS } from "immutable";
import lessonReducer from "../reducer";
import * as lesson from "./mocks/lesson.json";
import {
  lessonAction,
  lessonActionError,
  lessonActionSuccess
} from "../actions";
import { LessonInterface } from "../interfaces";

describe("SingleLesson Reducer", () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      currentLesson: false
    });
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(lessonReducer(undefined, {})).toEqual(expectedResult);
  });

  it("should handle the lessonAction correctly", () => {
    const fixture: string = "1";
    const expectedResult = state.set("loading", true).set("error", false);

    expect(lessonReducer(state, lessonAction(fixture))).toEqual(expectedResult);
  });

  it("should handle the lessonActionSuccess correctly", () => {
    const fixture: LessonInterface = lesson;
    const expectedResult = state
      .set("loading", false)
      .set("currentLesson", lesson);

    expect(lessonReducer(state, lessonActionSuccess(fixture))).toEqual(
      expectedResult
    );
  });

  it("should handle the lessonActionError correctly", () => {
    const fixture: string = "Sample error message";
    const expectedResult = state.set("loading", false).set("error", fixture);

    expect(lessonReducer(state, lessonActionError(fixture))).toEqual(
      expectedResult
    );
  });
});
