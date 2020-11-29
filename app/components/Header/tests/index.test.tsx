import * as React from "react";
import { shallow } from "enzyme";

import Header from "../Header";

describe("<Header />", () => {
  it("should render a div", () => {
    // @ts-ignore
    const renderedComponent = shallow(<Header title={"test title"} />);
    expect(renderedComponent.length).toEqual(1);
  });
});
