import { AxiosResponse } from "axios";
import {
  AuthResponse,
  LoginData,
  RegisterData,
  User,
} from "../model/UserModel";
import { api } from "@/app/api";

export class UserService {
  static async login(
    loginData: LoginData
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post("/login", loginData);
  }

  static async register(
    registerData: RegisterData
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post("/register", registerData);
  }

  static async getUser(userId: string): Promise<AxiosResponse<User>> {
    return api.get(`/users/${userId}`);
  }
}
