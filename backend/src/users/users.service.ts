import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {User} from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  create(user: Partial<User>): Promise<User> {
    return this.usersRepository.save(user);
  }

  // update(id: number, user: Partial<User>): Promise<User> {
  //   return this.usersRepository.save({ id,...user });
  // }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
