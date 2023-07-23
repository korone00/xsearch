import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    example: 'examid',
    description: 'id',
    required: true,
  })
  id: string;

  @ApiProperty({
    example: '123',
    description: 'Password',
    required: true,
  })
  password: string;
}
