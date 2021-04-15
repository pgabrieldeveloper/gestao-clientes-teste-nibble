import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClientRepository from '../typeorm/repository/ClientRepository';
import Client from '../typeorm/entities/Client';
import CreateAddressService from '../../../modules/address/services/CreateAddressService';
import nodemailer from 'nodemailer';

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
    //Senha exposta para fim de teste em um cenario real isso não seria cabivel !!!
    const user = 'testenodemailer001@gmail.com';
    const pass = 'teste123321';
    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: { user, pass },
    });
    // caso utlize o win desative o anti-virus para
    transport
      .sendMail({
        from: user,
        to: user,
        replyTo: user,
        subject: 'Cliente Cadastrado',
        text: 'Um novo cliente foi Cadastrado Com sucesso !!',
      })
      // caso utilize o win desative o ant virus  ou desmarque a opção de verificar SSL
      /*
        para evitar erros como esse :
        Error: self signed certificate in certificate chain
        at TLSSocket.onConnectSecure (_tls_wrap.js:1497:34)
        at TLSSocket.emit (events.js:315:20)
        at TLSSocket._finishInit (_tls_wrap.js:932:8)
        at TLSWrap.ssl.onhandshakedone (_tls_wrap.js:706:12) {
        code: 'ESOCKET',
        command: 'CONN'
}

      */
      .then(res => console.log(res))
      .catch(error => console.log(error));
    return client;
  }
}

export default new CreateClientService();
