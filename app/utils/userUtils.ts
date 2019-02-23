interface AuthHeadersInterface {
  "Content-Type": string;
  Authorization?: string;
}

export function setToken(token: string) {
  localStorage.setItem("token", token);
}

export function getToken(): string {
  const token = localStorage.getItem("token");

  if (token) {
    return token;
  }

  return "";
}

export function getAuthorizationHeaders(): AuthHeadersInterface {
  const token = getToken();
  const credentials: AuthHeadersInterface = {
    "Content-Type": "application/json"
  };

  if (token) {
    credentials.Authorization = `Bearer ${token}`;
  }

  return credentials;
}
