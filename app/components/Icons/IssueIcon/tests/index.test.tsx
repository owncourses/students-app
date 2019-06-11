import * as React from "react";
import { shallow } from "enzyme";

import IssueIcon from "../index";

describe("<IssueIcon />", () => {
  it("should render a SVG", () => {
    const renderedComponent = shallow(<IssueIcon className={"issue"} />);
    expect(renderedComponent.find("svg").length).toBe(1);
  });
});
