import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { historyData } from '../users/entities/history.entity';

@Injectable()
export class HistoryDataService {
  
  constructor(
    @InjectRepository(historyData)
    private readonly historyDataRepository: Repository<historyData>,
  ) {}

  async saveData(data: historyData): Promise<historyData> {
    return await this.historyDataRepository.save(data);
  }
}
