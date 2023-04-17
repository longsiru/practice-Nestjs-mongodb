import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

//nestjs中使用mongoose 操作mongodb。
//1.首先安装nestjs/mongoose，以及mongoose 模块。：npm install --save @nestjs/mongoose mongoose
//2.在app.module.ts里面和数据库建立联系。forRoot（）
//3.建立schema文件，在文件里建立要操作的表的schema。然后再schema里面引入mongoose,人后配置schema
//4.在控制器对应的module中配置model
//5.在服务器里面使用injectmodel 获取数据库model实现操作数据。 操作数据库一般是放在服务里面的。
