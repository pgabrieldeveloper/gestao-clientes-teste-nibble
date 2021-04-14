import { EntityRepository, Repository } from 'typeorm';
import Client from '../entities/Client';

@EntityRepository(Client)
class ClientRepository extends Repository<Client> {
  public async FindByEmail(email: string): Promise<Client | undefined> {
    const client = await this.findOne({
      where: {
        email,
      },
    });
    return client;
  }

  public async FindByCpf(cpf: string): Promise<Client | undefined> {
    const client = await this.findOne({
      where: {
        cpf,
      },
    });
    return client;
  }
}

export default ClientRepository;
