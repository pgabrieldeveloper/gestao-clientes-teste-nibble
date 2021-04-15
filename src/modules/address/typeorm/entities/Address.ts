import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('address')
class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cep: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  bairro: string;

  @Column()
  rua: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  tipo: string;

  @Column()
  endereco_primario: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Address;
