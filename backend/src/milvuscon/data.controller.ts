import { Controller, Get, Inject } from '@nestjs/common';
import { MilvusService } from './milvus.service';
import { PostgresService } from './postgres.service';

@Controller('data')
export class DataController {
  constructor(
    private readonly milvusService: MilvusService,
    private readonly postgresService: PostgresService,
  ) {}

  @Get('fetch-and-save')
  async fetchAndSaveData(): Promise<void> {
    // Milvus 데이터를 가져옴
    const data = await this.milvusService.getMilvusData();

    // 가져온 Milvus 데이터를 PostgreSQL에 JSON 형식으로 저장
    await this.postgresService.saveDataToPostgres(data);
  }
}
