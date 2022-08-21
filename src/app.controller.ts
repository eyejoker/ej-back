import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('')
@Controller('')
export class AppController {
  @Get('/')
  @ApiOperation({ summary: '기본 호출 테스트' })
  async findMultipleUsers() {
    return {};
  }
}
