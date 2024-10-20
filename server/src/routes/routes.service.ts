import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Route } from './routes.model';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(Route)
    private routesRepository: Repository<Route>,
  ) {}

  async getAllRoutes(): Promise<Route[]> {
    return this.routesRepository.find();
  }

  async getRouteById(routeId: string): Promise<Route> {
    return this.routesRepository.findOne({where: { id: routeId } });
  }

  // async getRoutesForUser(userId: string): Promise<Route[]> {
  //   return this.routesRepository.find({
  //     where: {
  //       bookings: {
  //         user: {
  //           id: userId
  //         }
  //       }
  //     },
  //     relations: ['bookings', 'bookings.user'] // Указываем явные связи для загрузки данных
  //   });
  // }

  // For admin
  async createRoute(route: Route): Promise<Route> {
    return this.routesRepository.save(route);
  }
}
