/**
 * Test the HomePage
 */
import React from "react";
import { shallow } from "enzyme";

import HomePage from "../HomePage";

describe("<HomePage />", () => {
  it("should render the homePage", () => {
    const wrapper = shallow(<HomePage user={{}} />);
    expect(wrapper.find("div.home-page").length).toBe(1);
  });
});
