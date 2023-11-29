import { Request, Response } from 'express';
import { createService } from './student.service';

const getAllStudentsCnt = async (req: Request, res: Response) => {
  try {
    const result = await createService.getAllStudentDb();
    res.status(200).json({
      suceess: true,
      massage: 'get all students',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getStudentByIdCnt = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await createService.getStudentById(id);
    res.status(200).json({
      suceess: true,
      massage: 'get sing student by id',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const createControlar = {
  getAllStudentsCnt,
  getStudentByIdCnt,
};
