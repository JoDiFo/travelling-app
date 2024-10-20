import { Module } from '@nestjs/common';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';
import { Route } from './routes.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [RoutesController],
    providers: [RoutesService],
    exports: [RoutesService],
    imports: [
      TypeOrmModule.forFeature([Route]),
    ],
})
export class RoutesModule {
    
}
