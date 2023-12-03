import { Router } from 'express';
import { StudentRoutes } from '../../modules/student/student.route';
import { UserRoutes } from '../../modules/user/user.route';
import { AcademicSemesterRoutes } from '../../modules/academicSemester/academicSemester.route';

const router = Router();
const moduleRouter = [
  {
    path: '/student',
    router: StudentRoutes,
  },
  {
    path: '/users',
    router: UserRoutes,
  },
  {
    path: '/academic-semester',
    router: AcademicSemesterRoutes,
  },
];

moduleRouter.forEach((routers) => router.use(routers.path, routers.router));

export default router;
