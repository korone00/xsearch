import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('visitCount')
export class VisitCount {

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'visitor_id' })
  user: number;

  @ApiProperty()
  @Column('int')
  count: number;

  @ApiProperty()
  @Column({ type: 'timestamp' })
  uploadDate: Date;
}
