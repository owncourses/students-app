import * as React from "react";
import ResetPassword from "../ResetPassword";
import { shallow } from "enzyme";
import { mapDispatchToProps } from "../index";
import { resetPasswordAction } from "../actions";

describe("<ResetPassword />", () => {
  it("should render ResetPassword component", () => {
    const renderedComponent = shallow(
      <ResetPassword
        loading={false}
        success={false}
        error={false}
        onSubmit={() => {}}
      />
    );

    expect(renderedComponent).toMatchSnapshot();
  });

  describe("mapDispatchToProps", () => {
    describe("onSubmit", () => {
      it("should be injected", function() {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmit).toBeDefined();
      });

      it("should dispatch courseAction when called", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const payload = {
          password: "test",
          repeatedPassword: "test",
          urlToken: "randomString"
        };
        result.onSubmit(payload);
        expect(dispatch).toHaveBeenCalledWith(resetPasswordAction(payload));
      });
    });
  });
});
