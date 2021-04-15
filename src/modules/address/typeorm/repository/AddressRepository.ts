import { DefaultDeserializer } from 'node:v8';
import { EntityRepository, Repository } from 'typeorm';
import Address from '../entities/Address';

@EntityRepository(Address)
class AddressRepository extends Repository<Address> {}

export default AddressRepository;