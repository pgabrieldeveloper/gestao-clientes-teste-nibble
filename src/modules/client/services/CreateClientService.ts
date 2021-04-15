import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClientRepository from '../typeorm/repository/ClientRepository';
import Client from '../typeorm/entities/Client';
import CreateAddressService from '../../../modules/address/services/CreateAddressService';

interface IClient {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  cidade: string;
  estado: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string;
  tipo: string;
  endereco_primario: boolean;
  cep: string;
}

class CreateClientService {
  public async execute({
    nome,
    cpf,
    telefone,
    email,
    bairro,
    cidade,
    complemento,
    endereco_primario,
    estado,
    numero,
    rua,
    tipo,
    cep,
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
    const address = await CreateAddressService.execute({
      bairro,
      cep,
      cidade,
      complemento,
      endereco_primario,
      estado,
      numero,
      rua,
      tipo,
      client,
    });
    return client;
  }
}

export default new CreateClientService();
