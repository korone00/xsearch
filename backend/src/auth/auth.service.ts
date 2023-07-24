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
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: [`아이디가 존재하지 않습니다. 회원가입을 시작하세요!`],
        error: 'Forbidden',
      });
    }
    const matching = await bcrypt.compare(password, user.password);
    if (matching) {
      const { password, ...result } = user;
      return result; 
    } else {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: [`아이디 또는 비밀번호가 일치하지 않습니다.`],
        error: 'Forbidden',
      });
    }
  }

  async login(userlogin: any) {
    const user = await this.userRepository.findUserById(userlogin.id);
    const payload = { id: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
  // public getCookieWithJWT(token: any) {
  //   return `Authentication=${token};HttpOnly;Path=/;Max-Age=60s`;
  // }

  // public getAwayCookie() {
  //   return `Authentication=;HttpOnly;Path=/,Max-Age=0`;
  // }
  async registerUser(newUser: User) {
    const userExist = await this.userService.find(newUser);
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
  // paginate 직접 구현
  async paginate(page: number = 1): Promise<any> {
    const take = 5;
    const [users, total] = await this.userRepository.findAndCount({
      take,
      skip: (page - 1) * take,
    });
    return {
      data: users.map((user) => {
        const { password, role, ...data } = user;
        return data;
      }),
      meta: {
        total, // 총 데이터 개수
        page, // 현재 페이지
        last_page: Math.ceil(total / take), // 마지막 페이지
      },
    };
  }
  public findAll(query: PaginateQuery): Promise<Paginated<User>> {
    return paginate(query, this.userRepository, {
      sortableColumns: ['id', 'name'],
      // 정렬 가능한 컬럼으로, 'sortBy=?'에서 사용할 수 있는 값들이다. 즉, id와 name으로만 정렬 가능
      nullSort: 'last', // 정렬할 때 null 값이 있는 데이터들은 마지막에 위치.
      defaultSortBy: [['id', 'ASC']], // 기본 정렬 방법
      searchableColumns: ['id', 'name', 'email'],
      // 'search=?' 로 검색 가능한 컬럼. 즉, id와 name 중 ?가 있으면 그 값을 가져온다.
      select: ['id', 'name', 'email', 'role'],
      // 파라미터에서 'select=?,?...' 안 해도 기본적으로 가져오는 정보들
      filterableColumns: {}, // 이게 뭔지 대표님께 여쭤보기
      maxLimit: 5,
    });
  }
  async deleteUser(id: string): Promise<any> {
    return this.userRepository.delete({ id: id });
  }
  async modify(id: string, modifyInfo: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    const newInfo = {
      ...user, // 원래 정보
      ...modifyInfo, // 새로운 정보
    };
    return await this.userRepository.save(newInfo);
    //update문을 사용할 수도 있지만, 수정된 객체를 반환하기 위해 save를 사용
  }
}
