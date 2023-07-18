import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {User} from './entities/user.entity'
import * as bcrypt from 'bcrypt'
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository:UserRepository
  ) {}
  async find(user:User):Promise<User>{
    return await this.userRepository.findUserById(user.id);
}

async transformPassword(user:User):Promise<void>{
  user.password=await bcrypt.hash(
    user.password,10,
  );
    return Promise.resolve();
}

async save(user:User):Promise<User>{
  await this.transformPassword(user);
  console.log(user); // 암호화가 된 것을 확인해보기
  return await this.userRepository.save(user);
}

  // findAll(): Promise<User[]> {
  //   return this.usersRepository.find();
  // }

  // create(user: Partial<User>): Promise<User> {
  //   return this.usersRepository.save(user);
  // }

  // update(id: number, user: Partial<User>): Promise<User> {
  //   return this.usersRepository.save({ id,...user });
  // }

  // async remove(id: number): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }
}
