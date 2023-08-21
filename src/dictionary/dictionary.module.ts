import { Module } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { DictionaryController } from './dictionary.controller';
import { DictionaryItemModule } from './dictionary-item/dictionary-item.module';

@Module({
  controllers: [DictionaryController],
  providers: [DictionaryService],
  imports: [DictionaryItemModule]
})
export class DictionaryModule {}
