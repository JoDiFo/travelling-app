import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { Route } from './routes.model';

@Controller('routes')
export class RoutesController {
  constructor(private routesService: RoutesService) {}

  @Get()
  async getAllRoutes(): Promise<Route[]> {
    return await this.routesService.getAllRoutes();
  }

  @Get(':route_id')
  async getRouteById(@Param('route_id') routeId: string): Promise<Route> {
    return this.routesService.getRouteById(routeId);
  }
  
  // ADMIN
  @Post()
  async createRoute(@Body() route: Route): Promise<Route> {
    return this.routesService.createRoute(route);
  }
}