import { Router } from 'express';
import ClientController from '../controllers/ClientController';

const clientRoutes = Router();

clientRoutes.post('/', ClientController.create);

export default clientRoutes;
