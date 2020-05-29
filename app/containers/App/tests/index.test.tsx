import * as React from "react";
import { shallow } from "enzyme";
import { Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import App from "../App";
import { History } from "history";

describe("<App />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <App
        getUser={() => false}
        toggleNotification={() => false}
        getNotifications={() => false}
        logoutAction={() => false}
        history={{} as History}
        loading={false}
        error={""}
        notifications={null}
      />
    );
    expect(renderedComponent.find(Header).length).toBe(1);
  });

  it("should render some routes", () => {
    const renderedComponent = shallow(
      <App
        getNotifications={() => false}
        toggleNotification={() => false}
        getUser={() => false}
        logoutAction={() => false}
        history={{} as History}
        loading={false}
        error={""}
        notifications={null}
      />
    );
    expect(renderedComponent.find(Route).length).not.toBe(0);
  });

  it("should render the footer", () => {
    const renderedComponent = shallow(
      <App
        getNotifications={() => false}
        toggleNotification={() => false}
        getUser={() => false}
        logoutAction={() => false}
        history={{} as History}
        loading={false}
        error={""}
        notifications={null}
      />
    );
    expect(renderedComponent.find(Footer).length).toBe(1);
  });
});
