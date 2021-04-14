import { Router } from 'express';
import clientRoutes from '../../../modules/client/routes/client.routes';

const routes = Router();
routes.get('/', (req, res) => {
  return res.json({ message: 'Olá Gestão de clientes' });
});
routes.use('/client', clientRoutes);
export default routes;
