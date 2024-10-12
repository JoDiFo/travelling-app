import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favourite } from './favourites.model';
import { User } from '../users/user.model';

@Injectable()
export class FavouritesService {
  constructor(
    @InjectRepository(Favourite)
    private favouriteRepository: Repository<Favourite>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

}
