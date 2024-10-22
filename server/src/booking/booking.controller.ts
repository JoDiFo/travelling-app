import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RoutesService } from '../routes/routes.service';
import { Route } from '../routes/routes.model';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Get(':userId')
  async getBookingsForUser(@Param('userId') userId: string) {
    return await this.bookingService.getRoutesForUser(userId);
  }

  @Post()
  bookRoute(@Body() bookData : { userId: string, routeId: string }) {
    return this.bookingService.bookRoute(bookData);
  }
}
