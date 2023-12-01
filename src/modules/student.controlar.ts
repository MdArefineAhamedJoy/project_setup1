import { createService } from './student.service';
import sendResponse from '../app/utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../app/utils/catchAsync';

const getAllStudentsCnt = catchAsync(async (req, res) => {
  const result = await createService.getAllStudentDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get all students',
    data: result,
  });
});

const getStudentByIdCnt = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await createService.getStudentById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get sing student by id',
    data: result,
  });
});

export const createControlar = {
  getAllStudentsCnt,
  getStudentByIdCnt,
};
