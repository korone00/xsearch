import { Repository ,DataSource} from 'typeorm'
import { User } from './entities/user.entity';
import {Injectable} from '@nestjs/common';

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
        return user; 
      } 
      
}