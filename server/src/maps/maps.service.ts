import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Map } from './maps.model'; // Импортируем сущность Map

@Injectable()
export class MapsService {
  constructor(
    @InjectRepository(Map)
    private readonly mapRepository: Repository<Map>,
  ) {}

  async findAll() {
    return await this.mapRepository.find();
  }

  async create(imageBuffer: Buffer) {
    const newMap = this.mapRepository.create({ image: imageBuffer });
    const map = await this.mapRepository.save(newMap);
    delete map.image;
    return map;
  }
}
