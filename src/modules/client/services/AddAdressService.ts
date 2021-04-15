import CreateAddressService from '../../../modules/address/services/CreateAddressService';
import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClientRepository from '../typeorm/repository/ClientRepository';
interface IAddres {
  id: string;
  cep: string;
  cidade: string;
  estado: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string;
  tipo: string;
  endereco_primario: boolean;
}
class AddAdressService {
  public async execute({
    bairro,
    cep,
    cidade,
    complemento,
    endereco_primario,
    estado,
    numero,
    rua,
    tipo,
    id,
  }: IAddres): Promise<void> {
    const clientRepository = getCustomRepository(ClientRepository);
    const client = await clientRepository.findOne(id);

    if (!client) {
      throw new AppError('Cliente não encontrado ', 404);
    }
    await CreateAddressService.execute({
      bairro,
      cep,
      cidade,
      client,
      complemento,
      endereco_primario,
      estado,
      numero,
      rua,
      tipo,
    });
  }
}

export default new AddAdressService();
