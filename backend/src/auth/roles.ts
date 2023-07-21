import {SetMetadata} from '@nestjs/common'

//add a custom decorator
export const Roles=(...args:string[])=>SetMetadata('roles',args);
// 일단 다 만들고 이 코드 공부하기