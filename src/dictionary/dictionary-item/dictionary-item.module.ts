import { Module } from '@nestjs/common';
import { DictionaryItemService } from './dictionary-item.service';
import { DictionaryItemController } from './dictionary-item.controller';

@Module({
  controllers: [DictionaryItemController],
  providers: [DictionaryItemService]
})
export class DictionaryItemModule {}
