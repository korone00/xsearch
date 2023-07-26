// search-result.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SearchResult {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  query: string; // 사용자의 검색어

  @Column()
  result: string; // 검색 결과
}
