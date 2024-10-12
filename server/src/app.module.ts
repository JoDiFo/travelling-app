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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3001,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [User, Role, Favourite],
      synchronize: true,
      autoLoadEntities: true
    }),
    AuthModule,
    RolesModule,
    UsersModule,
    FavouritesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
