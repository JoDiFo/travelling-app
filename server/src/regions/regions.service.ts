import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Guide } from 'src/guides/guide.model';
import { Repository } from 'typeorm';
import { Region } from './regions.model';

@Injectable()
export class RegionsService {
    constructor(@InjectRepository(Region) private regionRepository: Repository<Region>) {}

    async find() {
        return await this.regionRepository.find()
    }

    async create(regionData: Region) {
        const region = this.regionRepository.create({...regionData})
        return await this.regionRepository.save(region)
    }
}
