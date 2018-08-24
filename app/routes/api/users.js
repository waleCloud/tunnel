import { Router } from 'express';

import UserController from '../../controllers/users';

const router = Router();

router.post('/user/new', UserController.create);
router.post('/user/login', UserController.login);
router.get('/user/:id', UserController.getUser);

export default router;
