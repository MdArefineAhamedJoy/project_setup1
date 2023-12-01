import express from 'express';
import { userControlar } from './users.controlar';

const router = express.Router();
// /api/v1/users/create-student
router.post('/create-student', userControlar.createStudents);

export const userRouter = router;
