import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { NewsController } from './controller/news/news.controller';
import { NewsService } from './service/news/news.service';
import { AppService } from '../../app.service';
//4.在控制器对应的module中配置model
//4.1 配置数据库模型。
//import { MongooseModule } from '@nestjs/mongoose';
//4.2引入schema
import { ArticleSchema } from 'src/schema/article.schema';
import { UserSchema } from 'src/schema/user.schema';

//4.4然后在import里面引入当前的MongooseModule。用forFeature方法，在方法里面配置schema的模型。注意：forFeature里面传入的应该是集合【】

//5.在服务器里面使用injectmodel 获取数据库model实现操作数据。 操作数据库一般是放在服务里面的。
//5.1 引入servis（ArticleService）
import { ArticleService } from '../../service/article/article.service';
import { UserService } from 'src/service/user/user.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Article',
        schema: ArticleSchema,
        collection: 'article', //要操作的数据库表。
      },
      {
        name: 'User',
        schema: UserSchema,
        collection: 'user', //要操作的数据库表。
      },
    ]),
  ],
  //nest g co module/admin/controller/user
  controllers: [UserController, NewsController],
  providers: [NewsService, AppService, ArticleService, UserService],
})
export class AdminModule {}
