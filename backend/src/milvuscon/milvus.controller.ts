import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller()
@ApiTags('Get Data API')
export class GetMilvusController {
  constructor(private httpService: HttpService) {}
  @ApiOperation({
    summary: 'Get Milvus Data API',
    description: 'MilvusDB의 json파일을 가져온다.',
  })
  @ApiResponse({ description: 'json data 가져오기' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Get('getdata')
  async getData(): Promise<any> {
    const response = await this.httpService
      .get('http://127.0.0.1:5000/search')
      .toPromise();
    return response.data;
  }
}
