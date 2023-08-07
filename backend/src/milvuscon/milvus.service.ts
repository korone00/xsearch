import { Injectable, Inject } from '@nestjs/common';
import { MilvusClient } from '@zilliz/milvus2-sdk-node';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

const MILVUS_COLLECTION_NAME = 'hello_milvus';

@Injectable()
export class MilvusService {
  
  private readonly collectionName: string;

  constructor(
    private readonly configService: ConfigService,
    @Inject('MILVUS_CLIENT') private readonly milvusClient: MilvusClient,
  ) {
    // configService를 사용하여 환경 변수에서 설정 값을 가져옴
    this.collectionName = this.configService.get<string>('MILVUS_COLLECTION_NAME');
  }

  async getMilvusData(): Promise<any[]> {
    try {
      // MilvusDB에서 'pred', 'score', 'minio_id', 그리고 타임스탬프 정보를 가져옴
      const results = await this.milvusClient.search({
        collection_name:MILVUS_COLLECTION_NAME,

        limit: 10, // 가져올 결과 개수
      });

      // 가져온 결과를 JSON 형식으로 변환하여 반환
      if (Array.isArray(results)){
      return results.map((result) => ({
        pred: result.entity.id, // 'pred' 정보 (MilvusDB에서는 entity.id로 가져옴)
        score: result.distance, // 'score' 정보 (MilvusDB에서는 distance로 가져옴)
        minio_id: result.entity.minio_id, // 'minio_id' 정보 (MilvusDB에서 entity 객체의 minio_id 필드로 가져옴)
        timestamp: new Date().toISOString(), // 현재 시간을 타임스탬프로 사용
      }));
    } {
      console.error('Invalid search results:', results);
      return [];
    }
    } catch (error) {
      console.error('Error while fetching data from MilvusDB:', error);
      throw error;
    }
  }
}
