interface AuthHeadersInterface {
  "Content-Type": string;
  Authorization?: string;
}

export function setToken(token: string): void {
  localStorage.setItem("token", token);
}

export function removeToken(): void {
  localStorage.removeItem("token");
}

export function getToken(): string | null {
  const token = localStorage.getItem("token");

  if (token) {
    return token;
  }

  return null;
}

export function getAuthorizationHeaders(
  paramToken?: string
): AuthHeadersInterface {
  const token = getToken();
  const credentials: AuthHeadersInterface = {
    "Content-Type": "application/json"
  };

  if (token) {
    credentials.Authorization = `Bearer ${paramToken ? paramToken : token}`;
  }

  return credentials;
}
