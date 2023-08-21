import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class rawResponseData {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  img_path: string;

  @ApiProperty({ type: [String] })
  @Column('simple-array')
  pred: string[];

  @ApiProperty({ type: [String] })
  @Column('simple-array')
  score: string[];
}
