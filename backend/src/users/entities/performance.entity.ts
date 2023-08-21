import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('performanceMetrics')
export class PerformanceMetrics {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('int')
  elapsed_time: number;

  @Column('int')
  memory_usage: number;

  @Column('text')
  memo: string;
}
