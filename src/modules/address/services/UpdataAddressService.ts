import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Address from '../typeorm/entities/Address';
import AddressRepository from '../typeorm/repository/AddressRepository';
import DeleteAdressSercice from '../typeorm/repository/AddressRepository';

interface IAddress {
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

class UpdataAddressService {
  public async execute({
    id,
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

    const address = await addressRepository.findOne(id);
    if (!address) {
      throw new AppError('Endereço não encontrado', 404);
    }
    address.bairro = bairro;
    address.cep = cep;
    address.cidade = cidade;
    address.complemento = complemento;
    address.endereco_primario = endereco_primario;
    address.estado = estado;
    address.numero = numero;
    address.rua = rua;
    address.tipo = tipo;

    await addressRepository.save(address);

    return address;
  }
}

export default new UpdataAddressService();
