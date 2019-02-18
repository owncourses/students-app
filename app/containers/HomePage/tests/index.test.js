/**
 * Test the HomePage
 */
import React from "react";
import { shallow } from "enzyme";

import HomePage from "../HomePage";
import App from "../index";

describe("<HomePage />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(HomePage).length).toBe(1);
  });
});
