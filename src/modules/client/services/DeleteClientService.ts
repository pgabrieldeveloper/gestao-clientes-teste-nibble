import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClientRepository from '../typeorm/repository/ClientRepository';

interface IClient {
  id: string;
}

class DeleteClientService {
  public async execute({ id }: IClient): Promise<void> {
    const clientRepository = getCustomRepository(ClientRepository);
    const client = await clientRepository.findOne(id);
    if (!client) {
      throw new AppError('cliente não encontrado', 404);
    }
    await clientRepository.remove(client);
  }
}

export default new DeleteClientService();
