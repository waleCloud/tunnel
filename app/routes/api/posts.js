import { Router } from 'express';

import PostController from '../../controllers/posts';
import verifyToken from  '../../middlewares/verifyToken';

const router = Router();
console.log(verifyToken);

router.post('/post/new', verifyToken, PostController.create);
router.get('/posts',PostController.getPosts);
router.get('/post/:id', PostController.getPost);

export default router;
