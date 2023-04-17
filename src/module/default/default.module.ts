import { Module } from '@nestjs/common';
import { NewsController } from './controller/news/news.controller';
import { AppService } from '../../app.service';

@Module({
  //引入其他模块-> imports
  imports: [],
  controllers: [NewsController],
  providers: [AppService],
})
export class DefaultModule {}
