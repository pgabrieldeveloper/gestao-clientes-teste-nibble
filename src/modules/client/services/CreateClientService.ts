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
    const clientCpfExists = await clientRepository.findByCpf(cpf);
    if (clientCpfExists) {
      throw new AppError('cpf de cliente ja cadastrado');
    }
    if (clientEmailExists) {
      throw new AppError('email de cliente ja cadastrado');
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
