import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClientRepository from '../typeorm/repository/ClientRepository';
import Client from '../typeorm/entities/Client';

interface IClient {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
}

class CreateClientService {
  public async execute({
    nome,
    cpf,
    telefone,
    email,
  }: IClient): Promise<Client> {
    const clientRepository = getCustomRepository(ClientRepository);
    const clientEmailExists = await clientRepository.findByEmail(email);
    const clientCpfExists = await clientRepository.findByCpf(email);
    if (!clientCpfExists || !clientEmailExists) {
      throw new AppError('Error, Email ou Cpf  já cadastratos ');
    }
    const client = clientRepository.create({
      nome,
      cpf,
      telefone,
      email,
    });
    await clientRepository.save(client);
    return client;
  }
}

export default new CreateClientService();
