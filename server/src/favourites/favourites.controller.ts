import { Controller, Get, Post, Param, Query } from '@nestjs/common';
import { FavouritesService } from './favourites.service';

@Controller('favourites')
export class FavouritesController {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Get(':user_id')
  async getFavourites(@Param('userId') userId: string) {
    return this.favouritesService.getFavourites(userId);
  }

  @Post(':userId/route/:routeId')
  async addToFavourites(
    @Param('userId') userId: string,
    @Param('routeId') routeId: string
  ) {
    this.favouritesService.addToFavourites(userId, routeId);
  }
}
