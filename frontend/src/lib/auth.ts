export type User = {
  id: number;
  email: string;
  username: string;
  avatar: string | null;
  city: string;
  phone: string;
  rating: string;
};

export function saveTokens(access: string, refresh: string) {
  localStorage.setItem("access", access);
  localStorage.setItem("refresh", refresh);
}

export function clearTokens() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
}

export function isAuthenticated(): boolean {
  return Boolean(localStorage.getItem("access"));
}