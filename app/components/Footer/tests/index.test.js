import React from "react";
import { shallow } from "enzyme";

import Footer from "../Footer";

describe("<Footer />", () => {
  it("should render the copyright notice", () => {
    const headerTitle = process.env.BRAND_HEADER_TEXT;
    const renderedComponent = shallow(<Footer title={headerTitle} />);
    expect(renderedComponent.contains(<section>{headerTitle}</section>)).toBe(
      true
    );
  });
});
