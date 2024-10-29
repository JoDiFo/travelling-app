import { api } from "@/app/api";
import { TravelRoute, CreateRouteData } from "../model/TravelRoute";
import { AxiosResponse } from "axios";

export class TravelRouteService {
  static async createRoute(travelRoute: CreateRouteData): Promise<void> {
    api.post("/routes", travelRoute);
  }

  static async getRoute(routeId: string): Promise<AxiosResponse<TravelRoute>> {
    return api.get(`/routes${routeId}`);
  }

  static async getRoutes(): Promise<AxiosResponse<TravelRoute[]>> {
    return api.get("/routes");
  }

  static async addFavorite(userId: string, routeId: string): Promise<void> {
    return api.post(`/favourites/${userId}/route/${routeId}`);
  }

  static async getFavorites(
    userId: string
  ): Promise<AxiosResponse<TravelRoute[]>> {
    return api.get(`/favourites/${userId}`);
  }

  static async getBookedRoutes(
    userId: string
  ): Promise<AxiosResponse<TravelRoute[]>> {
    return api.get(`/booking/${userId}`);
  }

  static async bookRoute(
    userId: string,
    routeId: string,
    time: string
  ): Promise<void> {
    return api.post("/booking", { userId, routeId, time });
  }
}
