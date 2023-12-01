import { UsersService } from './users.server';
import sendResponse from '../../app/utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../app/utils/catchAsync';

const createStudents = catchAsync(async (req, res) => {
  const { password, studentData } = req.body;
  const result = await UsersService.CreateStudentIntoDB(password, studentData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'data get succesfuly ',
    data: result,
  });
});

export const userControlar = {
  createStudents,
};
