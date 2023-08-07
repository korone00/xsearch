import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

@Injectable()
export class PostgresService {
  private readonly pool: Pool;
  private readonly tableName: string;

  constructor(private readonly configService: ConfigService) {
    // configService를 사용하여 환경 변수에서 설정 값을 가져옴
    this.pool = new Pool({
      user: this.configService.get<string>('DB_USER'),
      host: this.configService.get<string>('DB_HOST'),
      database: this.configService.get<string>('DB_NAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      port: this.configService.get<number>('DB_PORT'),
    });

    this.tableName = this.configService.get<string>('DB_TABLE_NAME');
  }

  async saveDataToPostgres(data: any[]): Promise<void> {
    const query = `INSERT INTO ${this.tableName} (data) VALUES ($1)`;

    try {
      await Promise.all(
        data.map(async (item) => {
          const values = [JSON.stringify(item)];
          await this.pool.query(query, values);
        }),
      );
    } catch (error) {
      console.error('Error while saving data to PostgreSQL:', error);
      throw error;
    }
  }
}
