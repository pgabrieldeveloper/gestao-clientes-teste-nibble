import { Request, Response } from 'express';
import DeleteAdressSercice from '../services/DeleteAdressSercice';
import UpdataAddressService from '../services/UpdataAddressService';

class ControllerAddress {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
      bairro,
      cep,
      cidade,
      complemento,
      endereco_primario,
      estado,
      numero,
      rua,
      tipo,
    } = req.body;
    const address = await UpdataAddressService.execute({
      id,
      bairro,
      cep,
      cidade,
      complemento,
      endereco_primario,
      estado,
      numero,
      rua,
      tipo,
    });
    return res.status(200).json(address);
  }
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await DeleteAdressSercice.execute({ id });
    return res.status(204).json([]);
  }
}

export default new ControllerAddress();
