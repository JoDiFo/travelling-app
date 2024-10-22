import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { MapsService } from './maps.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('maps')
export class MapsController {
    constructor(private readonly mapsService: MapsService) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async create(@UploadedFile() file: Express.Multer.File) {
      if (!file) {
        throw new Error('File is required');
      }
      
      const newMap = await this.mapsService.create(file.buffer);
      return newMap;
    }

    @Get()
    getAll() {
        return this.mapsService.findAll();
    }
}
