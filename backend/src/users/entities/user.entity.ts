import {BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    email: string;
}