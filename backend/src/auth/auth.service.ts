import {
  Injectable,
  HttpStatus,
  ForbiddenException,
  HttpException,
} from '@nestjs/common';
import { UserRepository } from 'src/users/user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { UpdateUserDto } from 'src/users/entities/user.updatedto';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private userService: UserService,
  ) {}
  async validateUser(id: string, password: string): Promise<any> {
    const user = await this.userRepository.findUserById(id);
    if (!user) {
      return new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: [`아이디가 존재하지 않습니다. 회원가입을 시작하세요!`],
        error: 'Forbidden',
      });
    }
    const matching = await bcrypt.compare(password, user.password);
    if (matching) {
      const { id } = user;
      return id;
    } else {
      return new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: [`아이디 또는 비밀번호가 일치하지 않습니다.`],
        error: 'Forbidden',
      });
    }
  }

  async login(userId: string) {
    const user = await this.userRepository.findUserById(userId);
    const payload = { id: user.id, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
  async registerUser(newUser: User) {
    const userExist = await this.userService.find(newUser.id);
    if (userExist) {
      // 중복 회원 검사
      throw new HttpException(
        '이미 존재하는 회원아이디입니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const userRegister = await this.userService.save(newUser);
    if (!userRegister) {
      // 혹시 모를 회원가입 실패
      throw new HttpException(
        '회원가입 오류',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return userRegister;
  }
  //getUserList --> paginate
  public findAll(query: PaginateQuery): Promise<Paginated<User>> {
    return paginate(query, this.userRepository, {
      sortableColumns: ['id', 'name'],
      nullSort: 'last',
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['id', 'name', 'email'],
      select: ['id', 'name', 'email', 'phone', 'role'],
      filterableColumns: {},
      maxLimit: 5,
    });
  }
  async getUser(userId: string): Promise<User> {
    return await this.userService.find(userId);
  }
  async deleteUser(id: string): Promise<any> {
    return this.userRepository.delete({ id: id });
  }
  async modify(id: string, modifyInfo: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    const newInfo = {
      ...user,
      ...modifyInfo,
    };
    return await this.userRepository.save(newInfo);
  }
}
