import React from "react";
import { shallow } from "enzyme";

import Footer from "../Footer";
import { loadConfig } from "../../../services/configService";

const projectConfig = loadConfig();

describe("<Footer />", () => {
  it("should render the copyright notice", () => {
    const {
      header: { text: headerTitle }
    } = projectConfig;
    const renderedComponent = shallow(<Footer title={headerTitle} />);
    expect(renderedComponent.contains(<section>{headerTitle}</section>)).toBe(
      true
    );
  });
});
