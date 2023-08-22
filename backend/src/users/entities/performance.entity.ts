import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('performanceMetrics')
export class PerformanceMetrics {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ApiProperty()
  @Column('int')
  elapsed_time: number;

  @ApiProperty()
  @Column('int')
  memory_usage: number;

  @ApiProperty()
  @Column('text')
  memo: string;
}
