import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionsController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentsController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionsController.store);

routes.use(authMiddleware);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.get('/users', UserController.index);
routes.get('/providers', ProviderController.index);
routes.post('/appointments', AppointmentsController.store);
routes.get('/appointments', AppointmentsController.index);

routes.get('/schedule', ScheduleController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
