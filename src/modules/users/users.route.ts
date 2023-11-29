import express from 'express';
import { userControlar } from './users.controlar';

const router = express.Router();

router.post('/create-student', userControlar.createStudents);

export const userRouter = router;
