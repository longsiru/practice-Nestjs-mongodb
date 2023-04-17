import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel) {}
  async findAll() {
    var result = await this.userModel.find().exec();

    return result;
  }
}
