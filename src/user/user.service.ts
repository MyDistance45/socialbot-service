import { Get, Inject, Injectable, Post } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/create-user-request.dto';
import {UserResponseDto} from './dto/user-response.dto'
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(
    private readonly prisma: PrismaService
  ){

  }
  async findAll(): Promise<UserResponseDto[]>{
    return await this.prisma.user.findMany();
  }

  async create(createUserRequest: CreateUserRequestDto): Promise<User>{

    return await this.prisma.user.create({data: createUserRequest});

  }
}
