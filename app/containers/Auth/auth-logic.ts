import { AuthFieldsInterface } from "./interfaces";
import { getToken } from "../../utils/userUtils";

export function getValueFromFields(
  fields: AuthFieldsInterface = [],
  fieldName: string
): string {
  let value = null;
  fields.forEach(field => {
    if (field.type === fieldName) {
      value = field.value;
    }
  });

  return value;
}

export function parseJwt(
  token: string
): { exp: number; iat: number; roles: [string]; userName: string } {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(window.atob(base64));
}

export function isTokenNotExpired(token: string, expires: number): boolean {
  if (!token || !expires) {
    return false;
  }

  return expires < Date.now();
}
