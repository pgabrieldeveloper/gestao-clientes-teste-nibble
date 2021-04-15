import { Router } from 'express';
import ClientController from '../controllers/ClientController';

const clientRoutes = Router();

clientRoutes.post('/', ClientController.create);
clientRoutes.get('/', ClientController.list);
clientRoutes.get('/:id', ClientController.show);
clientRoutes.put('/:id', ClientController.update);
clientRoutes.get('/email/:email', ClientController.findEmail);
clientRoutes.get('/cpf/:cpf', ClientController.findCpf);
clientRoutes.delete('/:id', ClientController.delete);

export default clientRoutes;
