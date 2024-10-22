import { Module } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { RegionsController } from './regions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from './regions.model';

@Module({
  providers: [RegionsService],
  controllers: [RegionsController],
  imports: [
    TypeOrmModule.forFeature([Region])
  ]
})
export class RegionsModule {}
