import { Router } from 'express';
import ControllerAddress from '../controller/ControllerAddress';

const addressRoutes = Router();

addressRoutes.put('/:id', ControllerAddress.update);
addressRoutes.delete('/:id', ControllerAddress.delete);

export default addressRoutes;
