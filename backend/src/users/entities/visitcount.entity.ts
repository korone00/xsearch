import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { User } from './user.entity';

@Entity('visitCount')
export class VisitCount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user_id: string;

  @Column('int')
  count: number;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  uploadDate: Date;
}
