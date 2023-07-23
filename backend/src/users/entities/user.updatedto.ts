import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    example: '0219',
    description: 'password',
  })
  @IsString()
  @IsOptional()
  password?: string;

  @ApiProperty({
    example: 'kangin',
    description: 'name',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    example: 'kangin@gmail.com',
    description: 'email',
  })
  @IsString()
  @IsOptional()
  email?: string;
}
