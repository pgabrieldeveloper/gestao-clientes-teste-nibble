import { getCustomRepository } from 'typeorm';
import ClientRepository from '../typeorm/repository/ClientRepository';
import Client from '../typeorm/entities/Client';

class ListClientService {
  public async execute(): Promise<Client[]> {
    const clientRepository = getCustomRepository(ClientRepository);
    const clients = await clientRepository.find();
    return clients;
  }
}

export default new ListClientService();
