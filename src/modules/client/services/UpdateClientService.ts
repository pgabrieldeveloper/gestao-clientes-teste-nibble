import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClientRepository from '../typeorm/repository/ClientRepository';
import Client from '../typeorm/entities/Client';

interface IClient {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
}

class UpdateClientService {
  public async execute({
    id,
    nome,
    cpf,
    telefone,
    email,
  }: IClient): Promise<Client> {
    const clientRepository = getCustomRepository(ClientRepository);
    const client = await clientRepository.findOne(id);
    const clientEmailExists = await clientRepository.findByEmail(email);
    const clientCpfExists = await clientRepository.findByCpf(cpf);

    if (!client) {
      throw new AppError('cliente não encontrado', 404);
    }
    if (clientEmailExists && email !== client.email) {
      throw new AppError('Email ja cadastrado');
    }
    if (clientCpfExists && cpf !== client.cpf) {
      throw new AppError('Email ja cadastrado');
    }
    client.nome = nome;
    client.cpf = cpf;
    client.telefone = telefone;
    client.email = email;
    return client;
  }
}

export default new UpdateClientService();
