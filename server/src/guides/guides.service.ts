import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Guide } from './guide.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from 'src/regions/regions.model';

@Injectable()
export class GuidesService {
    constructor(@InjectRepository(Guide) private guideRepository: Repository<Guide>) {}

    async find() {
        return await this.guideRepository.find()
    }

    async create(guideData: Region) {
        const guide = this.guideRepository.create({...guideData})
        return await this.guideRepository.save(guide)
    }
}
