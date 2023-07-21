import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger/dist/decorators';
@Entity()
export class User extends BaseEntity {
  @ApiProperty({
    example: 'kangin',
    description: 'id',
    required: true,
  })
  @PrimaryColumn()
  id: string;

  @ApiProperty({
    example: '0219',
    description: 'pw',
    required: true,
  })
  @Column()
  password: string;

  @ApiProperty({
    example: '이강인',
    description: 'name',
    required: true,
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 'kangin@gmail.com',
    description: 'email',
    required: true,
  })
  @Column()
  email: string;

  @ApiProperty({
    example:'user',
    description:'role',
    required:false,
})    
@Column()
role:string;

}
