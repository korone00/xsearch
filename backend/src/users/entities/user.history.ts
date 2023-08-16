import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class File extends BaseEntity {
  @ApiProperty({
    example: '1',
    description: 'Auto-incremented primary key',
    required: true,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'original-filename.jpg',
    description: 'Original file name',
    required: true,
  })
  @Column()
  originalFileName: string;

  @ApiProperty({
    example: 'modified-filename.jpg',
    description: 'Modified file name',
    required: true,
  })
  @Column()
  modifiedFileName: string;

  @ApiProperty({
    example: '2023-08-17',
    description: 'Date when the file was uploaded',
    required: true,
  })
  @Column({ type: 'date' })
  uploadDate: Date;

  @ApiProperty({
    example: 'extra data',
    description: 'Extra column',
    required: false,
  })
  @Column()
  extraColumn: string;
}
