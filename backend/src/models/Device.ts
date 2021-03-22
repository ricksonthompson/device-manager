/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { MaxLength } from 'class-validator';

import Category from './Category';

@Entity('devices')
class Device {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  // Define a forma de relacionamento de appointment para user
  @JoinColumn({ name: 'category_id' })
  // Define a coluna que vai ser relacionada
  category: Category;

  @Column()
  @MaxLength(16)
  color: string;

  @Column()
  partNumber: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Device;
