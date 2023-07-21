import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common'
import { Reflector } from '@nestjs/core'

@Injectable()
export class RoleGuard implements CanActivate{
    constructor(private readonly reflector:Reflector){}
    //reflector의 역할 공부하기
    //reflector.get --> 메타데이터 키/ 데코레이터대상
    matchRoles(roles:string[],userRole:string){
        return roles.some((role)=>role===userRole);
    }
    
    canActivate(context:ExecutionContext):boolean{ // 접근 가능 여부 ture/false
        const roles=this.reflector.get<string[]>('roles',context.getHandler());
        if(!roles){ // 특정한 role이 정해지지 않은 경우
            return true;
        }
        const request= context.switchToHttp().getRequest();
        const user=request.user;
        return this.matchRoles(roles,user.role);
    }

}