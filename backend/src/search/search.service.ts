// search.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchResult } from './entity/search-result.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(SearchResult)
    private searchResultRepository: Repository<SearchResult>,
  ) {}

  async saveSearchResult(query: string, result: string): Promise<SearchResult> {
    const searchResult = new SearchResult();
    searchResult.query = query;
    searchResult.result = result;
    return this.searchResultRepository.save(searchResult);
  }
}
