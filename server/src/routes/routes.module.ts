import { Module } from '@nestjs/common';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';
import { Route } from './routes.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuidesModule } from 'src/guides/guides.module';
import { Guide } from 'src/guides/guide.model';
import { Region } from 'src/regions/regions.model';
import { Map } from 'src/maps/maps.model';

@Module({
    controllers: [RoutesController],
    providers: [RoutesService],
    exports: [RoutesService],
    imports: [
      TypeOrmModule.forFeature([Route, Guide, Region, Map]),
    ],
})
export class RoutesModule {
    
}
