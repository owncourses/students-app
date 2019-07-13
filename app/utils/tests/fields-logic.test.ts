import { AuthFieldsInterface } from "../../containers/Auth/interfaces";
import { getValueFromFields, updateFields } from "../fields-logic";

describe("getValueFromFields", () => {
  const fields: AuthFieldsInterface = [
    {
      type: "login",
      label: "Login",
      value: "test",
      disabled: false,
      error: null
    },
    {
      type: "password",
      label: "Password",
      value: "password",
      disabled: false,
      error: null
    }
  ];
  it("should return first value for searched field", () => {
    const searchedFieldName: string = "login";
    const expectedValue: string = "test";

    expect(getValueFromFields(fields, searchedFieldName)).toEqual(
      expectedValue
    );
  });

  it("should return empty string if field not found", () => {
    const searchedFieldName: string = "cantFindThis";
    const expectedValue: string = "";

    expect(getValueFromFields(fields, searchedFieldName)).toEqual(
      expectedValue
    );
  });

  it("should updated fields with fieldName and value", () => {
    const fieldName: string = "login";
    const value: string = "test";

    const expectedValue = [
      {
        type: "login",
        value: "test",
        label: "Login",
        disabled: false,
        error: null
      },
      {
        type: "password",
        label: "Password",
        value: "password",
        disabled: false,
        error: null
      }
    ];

    expect(updateFields(fieldName, value, fields)).toEqual(expectedValue);
  });

  it("should return not touched fields when fieldName not found", () => {
    expect(updateFields("fieldName", "test", fields)).toEqual(fields);
  });
});
