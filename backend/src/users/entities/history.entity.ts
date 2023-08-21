import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';
import { rawResponseData } from './fileresponsedto.entity';

@Entity()
export class historyData {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @ManyToOne(() => rawResponseData)
  @JoinColumn({ name: 'number' })
  number: number;

  @ApiProperty()
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user_id: string;

  @ApiProperty()
  @Column()
  modifiedFileName: string;

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  uploadDate: Date;

  @ApiProperty({ type: [String] })
  @Column('simple-array')
  pred: string[];
}
