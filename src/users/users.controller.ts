import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.usersService.findOne(+_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+_id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('_id') _id: string) {
    return this.usersService.remove(+_id);
  }
}
