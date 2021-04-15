import { Router } from 'express';
import addressRoutes from '../../../modules/address/routes/address.routes';
import clientRoutes from '../../../modules/client/routes/client.routes';

const routes = Router();
routes.get('/', (req, res) => {
  return res.json({ message: 'Olá Gestão de clientes' });
});
routes.use('/client', clientRoutes);
routes.use('/address', addressRoutes);
export default routes;
