import { AuthFieldsInterface } from "../interfaces";
import { getValueFromFields, isTokenNotExpired, parseJwt } from "../auth-logic";

describe("Auth logic", () => {
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
  });
  describe("parseJWT", () => {
    it("should parseJWT to object", () => {
      const expectedValue = {
        name: "John Doe",
        iat: 1516239022,
        exp: 1516239022
      };

      const token = generateToken(expectedValue);

      expect(parseJwt(token)).toEqual(expectedValue);
    });
  });

  describe("isTokenNotExpired", () => {
    it("should check if token is not expired", () => {
      const tokenNotExpiredPayload = {
        name: "John Doe",
        iat: 1516239022,
        exp: new Date().setDate(new Date().getDay() + 1) / 1000
      };
      const tokenExpiredPayload = {
        name: "John Doe",
        iat: 1516239022,
        exp: new Date().setDate(new Date().getDay() - 1) / 1000
      };
      const tokenNotExpired = generateToken(tokenNotExpiredPayload);
      const tokenExpired = generateToken(tokenExpiredPayload);

      expect(isTokenNotExpired(tokenNotExpired)).toBeTruthy();
      expect(isTokenNotExpired(tokenExpired)).toBeFalsy();
    });
  });
});

function generateToken(payload) {
  return `${btoa(
    JSON.stringify({
      alg: "HS256",
      typ: "JWT"
    })
  )}.${btoa(
    JSON.stringify(payload)
  )}.mpAcFXpa8qlGeaOW_ltCGq851V4WgjM5q5MGc4toxu4`;
}
