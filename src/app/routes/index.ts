import { Router } from 'express';
import { userRouter } from '../../modules/users/users.route';
import { StudentRouter } from '../../modules/student.router';

const router = Router();
const moduleRouter = [
  {
    path: '/student',
    router: StudentRouter,
  },
  {
    path: '/users',
    router: userRouter,
  },
];

moduleRouter.forEach((routers) => router.use(routers.path, routers.router));

export default router;
