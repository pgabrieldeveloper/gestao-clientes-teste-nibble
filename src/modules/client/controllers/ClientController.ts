import { Request, Response } from 'express';
import CreateClientService from '../services/CreateClientService';
import DeleteClientService from '../services/DeleteClientService';
import FindByCpfClientService from '../services/FindByCpfClientService';
import FindByEmailClientService from '../services/FindByEmailClientService';
import ListClientService from '../services/ListClientService';
import ShowClientService from '../services/ShowClientService';
import UpdateClientService from '../services/UpdateClientService';

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
  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const client = await ShowClientService.execute({ id });
    return res.status(200).json(client);
  }
  public async findEmail(req: Request, res: Response): Promise<Response> {
    const { email } = req.params;
    const client = await FindByEmailClientService.execute({ email });
    return res.status(200).json(client);
  }
  public async findCpf(req: Request, res: Response): Promise<Response> {
    const { cpf } = req.params;
    const client = await FindByCpfClientService.execute({ cpf });
    return res.status(200).json(client);
  }
  public async list(req: Request, res: Response): Promise<Response> {
    const clients = await ListClientService.execute();
    return res.json(200).json(clients);
  }
  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nome, cpf, telefone, email } = req.body;
    const client = await UpdateClientService.execute({
      id,
      nome,
      cpf,
      email,
      telefone,
    });
    return res.status(200).json(client);
  }
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await DeleteClientService.execute({ id });
    return res.status(204).json([]);
  }
}

export default new ClientController();
