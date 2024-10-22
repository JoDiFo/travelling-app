import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './roles/roles.model';
import { User } from './users/user.model';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { FavouritesModule } from './favourites/favourites.module';
import { Favourite } from './favourites/favourites.model';
import { RoutesModule } from './routes/routes.module';
import { Route } from './routes/routes.model';
import { BookingModule } from './booking/booking.module';
import { Booking } from './booking/booking.model';
import { GuidesModule } from './guides/guides.module';
import { Guide } from './guides/guide.model';
import { RegionsModule } from './regions/regions.module';
import { MapsModule } from './maps/maps.module';
import { Map } from './maps/maps.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3001,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [User, Role, Favourite, Route, Booking, Guide, Map],
      synchronize: true,
      autoLoadEntities: true
    }),
    AuthModule,
    RolesModule,
    UsersModule,
    FavouritesModule,
    RoutesModule,
    BookingModule,
    GuidesModule,
    RegionsModule,
    MapsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
