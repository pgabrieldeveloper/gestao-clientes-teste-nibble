import { EntityRepository, Repository } from 'typeorm';
import Client from '../entities/Client';

@EntityRepository(Client)
class ClientRepository extends Repository<Client> {
  public async findByEmail(email: string): Promise<Client | undefined> {
    const client = await this.findOne({
      where: {
        email,
      },
    });
    return client;
  }

  public async findByCpf(cpf: string): Promise<Client | undefined> {
    const client = await this.findOne({
      where: {
        cpf,
      },
    });
    return client;
  }
}

export default ClientRepository;
