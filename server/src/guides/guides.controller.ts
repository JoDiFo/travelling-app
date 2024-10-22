import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GuidesService } from './guides.service';
import { Guide } from './guide.model';

@Controller('guides')
export class GuidesController {
    constructor(private readonly guideService: GuidesService) {}

    @Get()
    async getFavourites() {
        return this.guideService.find();
    }

    @Post()
    async Create(@Body() guideData: Guide) {
        return this.guideService.create(guideData);
    }
}
