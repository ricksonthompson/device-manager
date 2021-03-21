import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Category from './Category';

/**
 * Um para um(OneToOne)
 * Um para muitos(OneToMany)
 * Muitos para Muitos(ManyToMany)
 */

@Entity('appointments')
class Device {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  // eslint-disable-next-line camelcase
  provider_id: string;

  @ManyToOne(() => Category)
  // Define a forma de relacionamento de appointment para user
  @JoinColumn({ name: 'category_id' })
  // Define a coluna que vai ser relacionada
  provider: Category;

  @CreateDateColumn()
  // eslint-disable-next-line camelcase
  created_at: Date;

  @UpdateDateColumn()
  // eslint-disable-next-line camelcase
  updated_at: Date;
}

export default Device;
