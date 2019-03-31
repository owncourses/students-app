/**
 * Test the HomePage
 */
import * as React from "react";
import { shallow } from "enzyme";
import HomePage from "../HomePage";
import * as user from "../../Auth/tests/mocks/user.json";

describe("<HomePage />", () => {
  it("should render the homePage", () => {
    const wrapper = shallow(<HomePage user={user} />);
    expect(wrapper.find("div.home-page").length).toBe(1);
  });
});
