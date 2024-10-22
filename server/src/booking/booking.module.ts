import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingController } from './booking.controller';
import { Booking } from './booking.model';
import { User } from 'src/users/user.model';
import { Route } from 'src/routes/routes.model';
import { RoutesModule } from 'src/routes/routes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, User, Route]),
    RoutesModule
  ],
  providers: [BookingService],
  exports: [BookingService],
  controllers: [BookingController]
})
export class BookingModule {}
