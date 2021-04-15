import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import AddressRepository from '../typeorm/repository/AddressRepository';

interface IAddress {
  id: string;
}

class DeleteAdressSercice {
  public async execute({ id }: IAddress): Promise<void> {
    const addressRepository = getCustomRepository(AddressRepository);

    const address = await addressRepository.findOne(id);
    if (!address) {
      throw new AppError('Endereço não encontrado', 404);
    }
    await addressRepository.remove(address);
  }
}

export default new DeleteAdressSercice();
