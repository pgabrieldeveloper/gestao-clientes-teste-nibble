import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}

export default Client;
