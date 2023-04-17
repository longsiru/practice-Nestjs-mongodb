import { Controller, Get, UseGuards } from '@nestjs/common';

//5.2 引入服务
import { ArticleService } from '../../../../service/article/article.service';

@Controller('admin/news')
export class NewsController {
  //5.3依赖注入
  constructor(
    private articleService: ArticleService, //访问index的时候我们需要获取数据。
  ) {}

  @Get()
  async index() {
    var result = await this.articleService.findAll({ title: '习近平访问美国' });
    return result;
  }
}
