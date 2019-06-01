import { fromJS } from "immutable";
import courseReducer from "../reducer";
import {
  courseAction,
  courseActionError,
  courseActionSuccess
} from "../actions";
import * as course from "./mocks/course.json";
import { CourseInterface } from "../../Auth/interfaces";

describe("singleCourse Reducer", () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      course: false
    });
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(courseReducer(undefined, {})).toEqual(expectedResult);
  });

  it("should handle the courseAction correctly", () => {
    const fixture: string = "1";
    const expectedResult = state.set("loading", true).set("error", false);

    expect(courseReducer(state, courseAction(fixture))).toEqual(expectedResult);
  });

  it("should handle the courseActionSuccess correctly", () => {
    const fixture: CourseInterface = course;
    const expectedResult = state.set("loading", false).set("course", course);

    expect(courseReducer(state, courseActionSuccess(fixture))).toEqual(
      expectedResult
    );
  });

  it("should handle the courseActionError correctly", () => {
    const fixture: string = "Sample error message";
    const expectedResult = state.set("loading", false).set("error", fixture);

    expect(courseReducer(state, courseActionError(fixture))).toEqual(
      expectedResult
    );
  });
});
