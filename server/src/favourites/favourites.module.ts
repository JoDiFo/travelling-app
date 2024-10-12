import { Module } from '@nestjs/common';
import { FavouritesController } from './favourites.controller';
import { Favourite } from './favourites.model';
import { FavouritesService } from './favourites.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([Favourite, User])],
  providers: [FavouritesService],
  controllers: [FavouritesController]
})
export class FavouritesModule {}
