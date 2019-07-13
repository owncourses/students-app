import { removeToken } from "../../utils/userUtils";

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
