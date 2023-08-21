import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { UpdateDictionaryDto } from './dto/update-dictionary.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('字典')
@UseGuards(AuthGuard('jwt'))
@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Post()
  create(@Body() createDictionaryDto: any) {
    return this.dictionaryService.create(createDictionaryDto);
  }
  @Post('item')
  createItem(@Body() createDictionaryItemDto: any) {
    return this.dictionaryService.createItem(createDictionaryItemDto);
  }

  @Get()
  findAll() {
    return this.dictionaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dictionaryService.findOne(id);
  }

  @Get('item/:dictId')
  findDictItemByDictId(@Param('dictId') dictId: string) {
    return this.dictionaryService.findDictItemByDictId(dictId);
  }

  @Get('key/:key')
  findOneByCode(@Param('key') key: string) {
    return this.dictionaryService.findOneByKey(key);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDictionaryDto: UpdateDictionaryDto,
  ) {
    return this.dictionaryService.update(id, updateDictionaryDto);
  }

  @Patch('/item/:id')
  updateItem(@Param('id') id: string, @Body() updateDictionaryItemDto: any) {
    return this.dictionaryService.updateItem(id, updateDictionaryItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dictionaryService.remove(id);
  }
  @Delete('item/:id')
  removeItem(@Param('id') id: string) {
    return this.dictionaryService.removeItem(id);
  }
}
