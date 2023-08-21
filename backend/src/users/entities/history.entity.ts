import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity()
export class historyData extends BaseEntity {
  @ApiProperty({})
  @PrimaryGeneratedColumn()
  number: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user_id: string;

  @ApiProperty({})
  @Column()
  modifiedFileName: string;

  @ApiProperty({})
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  uploadDate: Date;

  @ApiProperty({ type: [String] })
  @Column('simple-array')
  pred: string[];
}
