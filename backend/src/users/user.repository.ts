import { Repository ,DataSource} from 'typeorm'
import { User } from './entities/user.entity';
import {Injectable} from '@nestjs/common';

//@EntityRepository(User)
@Injectable()
export class UserRepository extends Repository<User>{ //Repository<Entity> 형식
    constructor(dataSource: DataSource){
      super(User,dataSource.createEntityManager());
    }
    async findUserById(id:string) : Promise<User>{
        const user=await this.findOne({
          where: { id}
        });

        if(!user){
          return null;
        }
        return user; // 일단 user service 오류 제쳐두고 auth 먼저 해결
      } 
      // 아마 auth를 생성하면서 아래 로직들은 필요가 없어질 듯
    async validate(id:string,password:string):Promise<String>{
      const validateUser=await this.findOne({
        where: {id}
      });
      if(password==validateUser.password) return validateUser.name; 
      else return null;
    }
    async saveUser(user: User):Promise<void>{
      await this.save(user);
    }
}