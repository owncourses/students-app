import * as React from "react";
import SingleCourse from "../SingleCourse";
import { shallow } from "enzyme";
import * as modules from "./mocks/modules.json";
import { mapDispatchToProps } from "../index";
import { courseAction } from "../actions";

describe("<SingleCourse />", () => {
  it("should render correctly", () => {
    const renderedComponent = shallow(
      <SingleCourse
        match={{ params: { courseId: "1" }, isExact: true, path: "", url: "" }}
        getCourse={() => {}}
        error={false}
        loading={false}
        modules={modules}
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
