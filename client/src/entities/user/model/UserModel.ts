export interface User {
  id: string;
}

export interface LoginData {
  login: string;
  password: string;
}

export interface RegisterData {
  login: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}
