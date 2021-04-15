import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClientRepository from '../typeorm/repository/ClientRepository';
import Client from '../typeorm/entities/Client';

interface IClient {
  cpf: string;
}

class FindByCpfClientService {
  public async execute({ cpf }: IClient): Promise<Client> {
    const clientRepository = getCustomRepository(ClientRepository);
    const client = await clientRepository.findByEmail(cpf);
    if (!client) {
      throw new AppError('cliente não encontrado', 404);
    }
    return client;
  }
}

export default new FindByCpfClientService();
