import { Router } from 'express';
import UserController from './controllers/UserController';
function getUsername(): string {
    return "matheuscsceil";
}
const username = getUsername();

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

export default routes;