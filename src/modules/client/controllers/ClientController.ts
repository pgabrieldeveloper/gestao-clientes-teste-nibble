import { Request, Response } from 'express';
import CreateClientService from '../services/CreateClientService';

class ClientController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, cpf, telefone, email } = req.body;
    const client = await CreateClientService.execute({
      nome,
      cpf,
      telefone,
      email,
    });
    return res.status(201).json(client);
  }
}

export default new ClientController();
