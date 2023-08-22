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

  // @ManyToOne(() => rawResponseData)
  // @JoinColumn({ name: 'number' })
  @ApiProperty()
  @Column()
  number: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  @ApiProperty()
  @Column()
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
