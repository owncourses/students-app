import { shallow } from "enzyme";
import Auth from "../Auth";
import * as React from "react";
import Fields from "../../../components/Fields";
import { mapDispatchToProps } from "../index";
import { userLoginInterface } from "../constants";
import { authAction } from "../actions";

describe("<Auth />", () => {
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
        <Fields
          buttonLabel={"test"}
          label={"test"}
          fields={[]}
          isLoading={true}
          error={false}
          onUserInput={() => {}}
          onSubmit={() => {}}
        />
      )
    );
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
