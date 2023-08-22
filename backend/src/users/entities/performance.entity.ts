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

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'id' })
  @ApiProperty()
  @Column()
  user: number;

  @ApiProperty()
  @Column()
  elapsed_time: number;

  @ApiProperty()
  @Column('int')
  memory_usage: number;

  @ApiProperty()
  @Column('text')
  memo: string;
}
