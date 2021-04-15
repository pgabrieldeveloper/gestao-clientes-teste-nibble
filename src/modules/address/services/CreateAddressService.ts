import { getCustomRepository } from 'typeorm';
import Address from '../typeorm/entities/Address';
import AddressRepository from '../typeorm/repository/AddressRepository';

interface IAddress {
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

class CreateAddressService {
  public async execute({
    cep,
    bairro,
    cidade,
    complemento,
    endereco_primario,
    estado,
    numero,
    rua,
    tipo,
  }: IAddress): Promise<Address> {
    const addressRepository = getCustomRepository(AddressRepository);
    const address = addressRepository.create({
      bairro,
      cep,
      cidade,
      complemento,
      estado,
      numero,
      rua,
      tipo,
      endereco_primario,
    });
    await addressRepository.save(address);

    return address;
  }
}

export default new CreateAddressService();
