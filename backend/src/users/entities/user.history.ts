import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class historyData extends BaseEntity {
  @ApiProperty({
    example: '1',
    description: 'Auto-incremented primary key',
    required: true,
  })
  @PrimaryGeneratedColumn()
  number: number;
  
  @ApiProperty({
    example: 'kangin',
    description: 'id',
    required: true,
  })
  @Column()
  id: string;

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
