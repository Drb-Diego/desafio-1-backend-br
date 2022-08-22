import { Router } from 'express';
import urlController from './controllers/urlController';

const routes = Router();

routes.post('/url/reduceUrl', urlController.reduceUrl);

export default routes;