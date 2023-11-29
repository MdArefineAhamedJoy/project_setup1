import { Request, Response } from 'express';
import { UsersService } from './users.server';

const createStudents = async (req: Request, res: Response) => {
  try {
    const { password, studentData } = req.body;
    const result = await UsersService.CreateStudentIntoDB(
      password,
      studentData,
    );
    res.status(200).json({
      success: true,
      message: 'create databased succes full',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const userControlar = {
  createStudents,
};
