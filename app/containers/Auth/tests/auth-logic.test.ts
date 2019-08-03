import { isTokenNotExpired, parseJwt } from "../auth-logic";

describe("Auth logic", () => {
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
      const today = new Date();
      // I divide exp date here by 1k cause token i received from api need to be multiply by 1000
      const tokenNotExpiredPayload = {
        name: "John Doe",
        iat: 1516239022,
        exp: new Date().setDate(today.getDate() + 1) / 1000
      };
      const tokenExpiredPayload = {
        name: "John Doe",
        iat: 1516239022,
        exp: new Date().setDate(today.getDate() - 1) / 1000
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
