import { Injectable } from '@nestjs/common';

///在数据库查询全部文章。如何获取。
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArticleService {
  //需要指定articleModel的属性，不指定就报错。
  constructor(@InjectModel('Article') private articleModel) {} //(@InjectModel('Article')里面的参数要和forFeature(）定义的name对应。
  //在数据库查询全部文章。
  //直接写的话是一部操作，需要用async await来获取。
  async findAll(json = {}) {
    var result = await this.articleModel.find(json).exec(); //获取articleModel的全部数据。
    //如果要找特定的数据就在find()的括号里面写条件，也可以不再service里面指定，让json等于空（json = {}）--find(json) 然后去controller里面操作。

    return result;
  }
}
