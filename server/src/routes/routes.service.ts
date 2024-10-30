import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Route } from "./routes.model";
import { Guide } from "src/guides/guide.model";
import { Region } from "src/regions/regions.model";
import { Map } from "src/maps/maps.model";

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(Route)
    private routesRepository: Repository<Route>,
    @InjectRepository(Guide)
    private guideRepository: Repository<Guide>,
    @InjectRepository(Region)
    private regionRepository: Repository<Region>,
    @InjectRepository(Map)
    private mapRepository: Repository<Map>
  ) {}

  async getAllRoutes(): Promise<Route[]> {
    return this.routesRepository.find();
  }

  async getRouteById(routeId: string): Promise<Route> {
    return this.routesRepository.findOne({ where: { id: routeId } });
  }

  // For admin
  async createRoute(route: Route): Promise<Route> {
    const name = route.guide as unknown as string;
    const g = await this.guideRepository.findOne({
      where: { name },
    });
    const r = await this.regionRepository.findOne({
      where: { name: route.region.name },
    });
    const m = await this.mapRepository.findOne({ where: { id: route.map.id } });

    return await this.routesRepository.save({
      ...route,
      guide: g,
      region: r,
      map: m,
    });
  }
}
