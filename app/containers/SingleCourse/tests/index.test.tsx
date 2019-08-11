import * as React from "react";
import SingleCourse from "../SingleCourse";
import { shallow } from "enzyme";
import * as course from "./mocks/course.json";
import { mapDispatchToProps } from "../index";
import { courseAction } from "../actions";
import { Location } from "history";

describe("<SingleCourse />", () => {
  it("should render correctly", () => {
    const renderedComponent = shallow(
      <SingleCourse
        location={{ pathname: "", search: "", state: "", hash: "git" }}
        match={{ params: { courseId: "1" }, isExact: true, path: "", url: "" }}
        getCourse={() => {}}
        error={false}
        loading={false}
        course={course}
      />
    );

    expect(renderedComponent).toMatchSnapshot();
  });

  describe("mapDispatchToProps", () => {
    describe("getCourse", () => {
      it("should be injected", function() {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.getCourse).toBeDefined();
      });

      it("should dispatch courseAction when called", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const id = "1";
        result.getCourse(id);
        expect(dispatch).toHaveBeenCalledWith(courseAction(id));
      });
    });
  });
});
