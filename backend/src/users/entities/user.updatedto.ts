import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  id?: string;
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
  @ApiProperty({
    example: '010-0000-0000',
    description: 'phone',
  })
  @IsString()
  @IsOptional()
  phone?: string;
}
