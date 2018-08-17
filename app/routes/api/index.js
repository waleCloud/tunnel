
import { Router } from 'express';

import hello from './hello'; // API specific file import goes here
import users from './users'; // API specific file import goes here
import posts from './posts';

// import auth from './'; // API specific file import goes here
// import todos from './'; // API specific file import goes here

const router = Router();

router.use('/', hello);
router.use('/', users);
router.use('/', posts);

// router.use('/', posts);
// router.use('/', todos);

export default router;
