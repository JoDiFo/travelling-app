import { Module } from '@nestjs/common';
import { MapsController } from './maps.controller';
import { MapsService } from './maps.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Map } from './maps.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Map])
  ],
  controllers: [MapsController],
  providers: [MapsService]
})
export class MapsModule {}
