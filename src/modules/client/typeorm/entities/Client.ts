import Address from '../../../address/typeorm/entities/Address';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('client')
class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;
  @Column()
  cpf: string;
  @Column()
  telefone: string;
  @Column()
  email: string;

  @OneToMany(type => Address, address => address.client, { eager: true })
  adress: Address[];

  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}

export default Client;
