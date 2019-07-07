export function isInLoginScreen(pathname: string): boolean {
  return pathname === "/login";
}

export function isInHomeScreen(pathname: string): boolean {
  return pathname === "/";
}
