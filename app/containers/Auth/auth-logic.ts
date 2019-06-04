import { AuthFieldsInterface } from "./interfaces";
import { removeToken } from "../../utils/userUtils";

export function getValueFromFields(
  fields: AuthFieldsInterface = [],
  fieldName: string
): string {
  const filteredField = fields.find(field => field.type === fieldName);

  if (!filteredField) {
    return "";
  }

  return filteredField.value;
}

export function parseJwt(
  token: string
): { exp: number; iat: number; roles: [string]; userName: string } {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(window.atob(base64));
}

export function isTokenNotExpired(token: string): boolean {
  if (!token) {
    return false;
  }

  const parsedToken = parseJwt(token);

  return parsedToken.exp * 1000 > +new Date();
}

export function logout() {
  removeToken();
}
