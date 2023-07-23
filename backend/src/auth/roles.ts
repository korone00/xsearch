import {SetMetadata} from '@nestjs/common'

//add a custom decorator
export const Roles=(...args:string[])=>SetMetadata('roles',args);