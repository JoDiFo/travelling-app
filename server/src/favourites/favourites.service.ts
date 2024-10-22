import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favourite } from './favourites.model';
import { User } from '../users/user.model';
import { Route } from 'src/routes/routes.model';

@Injectable()
export class FavouritesService {
  constructor(
    @InjectRepository(Favourite)
    private favouriteRepository: Repository<Favourite>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Route)
    private routeRepository: Repository<Route>
  ) {}

  async getFavourites(userId: string) {
    const favs = await this.favouriteRepository.find({
      where: { user: { id: userId } }, 
      relations: ['route']
    });

    return favs.map(favourite => favourite.route);
  }

  async addToFavourites(userId: string, routeId: string) {
    const user = await this.userRepository.findOne({where: { id: userId }});
    const route = await this.routeRepository.findOne({where: { id: routeId }});

    if (!user || !route) {
      throw new Error('User or route not found');
    }

    const fav = this.favouriteRepository.create({user: user, route: route})

    return await this.favouriteRepository.save(fav);
  }
}
