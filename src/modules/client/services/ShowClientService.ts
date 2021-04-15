import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClientRepository from '../typeorm/repository/ClientRepository';
import Client from '../typeorm/entities/Client';

interface IClient {
  id: string;
}

class ShowClientService {
  public async execute({ id }: IClient): Promise<Client> {
    const clientRepository = getCustomRepository(ClientRepository);
    const client = await clientRepository.findOne(id);
    if (!client) {
      throw new AppError('cliente não encontrado', 404);
    }
    return client;
  }
}

export default new ShowClientService();
