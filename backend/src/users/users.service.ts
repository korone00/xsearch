import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService implements OnApplicationBootstrap {
  constructor(private readonly userRepository: UserRepository) {}

  async onApplicationBootstrap() {
    const data: User[] = await this.findAll();
    const hasAdmin = (users: User[]): boolean => {
      return users.some((user) => user.role === 'admin');
    };
    const isAdminPresent = hasAdmin(data);
    if (!isAdminPresent) {
      console.log('default admin 등록');
      //default admin 등록
      const defaultAdmin: Partial<User> = {
        id: 'admin',
        password: '0000',
        name: '관리자',
        email: 'admin@gmail.com',
        phone: '010-0000-0000',
        role: 'admin',
      };
      console.log('default admin 등록 완');
    }
  }
  async find(userId: string): Promise<User> {
    return await this.userRepository.findUserById(userId);
  }
  async findAll(): Promise<any> {
    return await this.userRepository.find();
  }
  async transformPassword(user: User): Promise<void> {
    user.password = await bcrypt.hash(user.password, 10);
    return Promise.resolve();
  }

  async save(user: Partial<User>): Promise<User> {
    await this.transformPassword(user as User);
    console.log(user); // 암호화가 된 것을 확인해보기
    return await this.userRepository.save(user);
  }

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
