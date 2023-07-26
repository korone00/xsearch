// search.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search') //search라는 경로로 매개변수 제공
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
  async saveSearchResult(@Body() body: { query: string, result: string }) {
    const { query, result } = body;
    return this.searchService.saveSearchResult(query, result);
  }
}

