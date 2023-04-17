import { Controller, Get } from '@nestjs/common';

import { UserService } from '../../../../service/user/user.service';

@Controller('admin/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async index() {
    var result = await this.userService.findAll();
    return result;
  }
}
