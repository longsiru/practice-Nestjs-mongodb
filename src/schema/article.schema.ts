//3.建立schema文件，在文件里建立要操作的表的schema。然后再schema里面引入mongoose,人后配置schema
import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  title: String,
  author: String,
  keywords: String,
  content: String,
  status: String,
});
