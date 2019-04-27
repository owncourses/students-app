import React from "react";
import { shallow } from "enzyme";
import config from "../../../../config/config"

import Footer from "../Footer";

describe("<Footer />", () => {
  it("should render the copyright notice", () => {
    const headerTitle = config.brand.headerText;
    const renderedComponent = shallow(<Footer title={headerTitle} />);
    expect(renderedComponent.contains(<section>{headerTitle}</section>)).toBe(
      true
    );
  });
});
