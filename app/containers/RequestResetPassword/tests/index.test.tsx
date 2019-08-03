import * as React from "react";
import { shallow } from "enzyme";
import { mapDispatchToProps } from "../index";
import { requestResetPasswordAction } from "../actions";
import RequestResetPassword from "../RequestResetPassword";

describe("<RequestResetPassword />", () => {
  it("should render RequestResetPassword component", () => {
    const renderedComponent = shallow(
      <RequestResetPassword
        loading={false}
        success={false}
        error={false}
        email={null}
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

      it("should dispatch requestResetPasswordAction when called", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const payload = "randomString";
        result.onSubmit(payload);
        expect(dispatch).toHaveBeenCalledWith(
          requestResetPasswordAction(payload)
        );
      });
    });
  });
});
