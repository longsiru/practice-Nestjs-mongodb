import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { DefaultModule } from './module/default/default.module';

//2.在app.module.ts里面和数据库建立联系。（配置数据库连接。）
//import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './service/user/user.service';

@Module({
  imports: [
    AdminModule,
    ApiModule,
    DefaultModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/siru'), //用forRoot()建立连接。
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
