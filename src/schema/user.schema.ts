//3.建立schema文件，在文件里建立要操作的表的schema。然后再schema里面引入mongoose,人后配置schema
import * as mongoose from 'mongoose';
import { stringify } from 'querystring';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  age: Number,
  sex: String,
  tel: String,
  status: String,
});
