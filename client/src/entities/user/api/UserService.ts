import { AxiosResponse } from "axios";
import { AuthResponse, LoginData, RegisterData } from "../model/UserModel";
import { api } from "@/app/api";

export class UserService {
  static async login(
    loginData: LoginData
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post("/auth/login", loginData);
  }

  static async register(
    registerData: RegisterData
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post("/auth/signin", registerData);
  }
}
