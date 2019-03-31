import { shallow } from "enzyme";
import SingleLesson from "../SingleLesson";
import * as lesson from "./mocks/lesson.json";
import * as React from "react";
import { mapDispatchToProps } from "../index";
import { lessonAction } from "../actions";

describe("<SingleLesson />", () => {
  it("should render correctly", function() {
    const renderedComponent = shallow(
      <SingleLesson
        getLesson={() => {}}
        error={false}
        loading={false}
        currentLesson={lesson}
        match={{ params: { lessonId: "1" }, isExact: true, path: "", url: "" }}
      />
    );

    expect(renderedComponent).toMatchSnapshot();
  });

  describe("mapDispatchToProps", () => {
    describe("getLesson", () => {
      it("should be injected", function() {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.getLesson).toBeDefined();
      });

      it("should dispatch lessonAction when called", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const id = "1";
        result.getLesson(id);
        expect(dispatch).toHaveBeenCalledWith(lessonAction(id));
      });
    });
  });
});
