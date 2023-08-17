import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { rawResponseData } from '../users/entities/fileresponsedto.entity';

@Injectable()
export class RawResponseDataService {
  
  constructor(
    @InjectRepository(rawResponseData)
    private readonly rawDataRepository: Repository<rawResponseData>,
  ) {}

  async saveData(data: rawResponseData): Promise<rawResponseData> {
    return await this.rawDataRepository.save(data);
  }
}