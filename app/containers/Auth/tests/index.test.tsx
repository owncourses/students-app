import { shallow } from "enzyme";
import Auth from "../Auth";
import * as React from "react";
import Login from "../../../components/Login";
import { AuthFieldsInterface } from "../interfaces";
import { mapDispatchToProps } from "../index";
import { userLoginInterface } from "../constants";
import { authAction } from "../actions";

describe("<Auth />", () => {
  const fields: AuthFieldsInterface = [
    {
      type: "login",
      value: "",
      label: "Login",
      disabled: false,
      error: null
    }
  ];

  it("should render Login component", () => {
    const renderedComponent = shallow(
      <Auth
        onLogin={() => {}}
        loading={true}
        error={false}
        currentUser={false}
      />
    );

    expect(
      renderedComponent.contains(
        <Login
          fields={[]}
          isLoading={true}
          error={false}
          onUserInput={() => {}}
          onSubmit={() => {}}
        />
      )
    );
  });

  it("should updated fields with fieldName and value", () => {
    const wrapper = shallow(
      <Auth
        onLogin={() => {}}
        loading={true}
        error={false}
        currentUser={false}
      />
    );

    const fieldName: string = "login";
    const value: string = "test";

    const expectedValue = [
      {
        type: "login",
        value: "test",
        label: "Login",
        disabled: false,
        error: null
      }
    ];

    expect(wrapper.instance().updateFields(fieldName, value, fields)).toEqual(
      expectedValue
    );
  });

  it("should return not touched fields when fieldName not found", () => {
    const wrapper = shallow(
      <Auth
        onLogin={() => {}}
        loading={true}
        error={false}
        currentUser={false}
      />
    );

    expect(
      wrapper.instance().updateFields("fieldName", "test", fields)
    ).toEqual(fields);
  });

  describe("mapDispatchToProps", () => {
    describe("onLogin", () => {
      it("should be injected", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLogin).toBeDefined();
      });

      it("should dispatch authAction when called", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const payload: userLoginInterface = {
          username: "test",
          password: "password"
        };
        result.onLogin(payload);
        expect(dispatch).toHaveBeenCalledWith(authAction(payload));
      });
    });
  });
});
