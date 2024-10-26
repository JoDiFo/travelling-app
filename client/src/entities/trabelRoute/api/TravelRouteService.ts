import { api } from "@/app/api";
import { TravelRoute } from "../model/TravelRoute";
import { AxiosResponse } from "axios";

export class TravelRouteService {
  static async createRoute(travelRoute: TravelRoute): Promise<void> {
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
}
