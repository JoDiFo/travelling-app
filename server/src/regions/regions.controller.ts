import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { Region } from './regions.model';

@Controller('regions')
export class RegionsController {
    constructor(private readonly regionsService: RegionsService) {}

    @Get()
    async getFavourites() {
        return this.regionsService.find();
    }

    @Post()
    async Create(@Body() regionData: Region) {
        return this.regionsService.create(regionData);
    }
}
