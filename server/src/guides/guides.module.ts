import { Module } from '@nestjs/common';
import { GuidesController } from './guides.controller';
import { GuidesService } from './guides.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guide } from './guide.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Guide])
  ],
  controllers: [GuidesController],
  providers: [GuidesService],
  exports: [GuidesService]
})
export class GuidesModule {}
