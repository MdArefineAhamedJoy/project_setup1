import express from 'express';
import { createControlar } from './student.controlar';

const router = express.Router();

// router.post("/create-student" , createControlar.createStudents)

router.get('/student', createControlar.getAllStudentsCnt);

router.get('/:id', createControlar.getStudentByIdCnt);

export const StudentRouter = router;
