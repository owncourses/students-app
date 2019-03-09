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

export function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(window.atob(base64));
}

export function isAuth() {
  const token = getToken();
  const expires = localStorage.getItem("expires");

  if (!token || !expires) {
    return false;
  }

  return parseInt(expires) < Date.now();
}
