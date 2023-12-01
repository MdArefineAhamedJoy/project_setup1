import { Request, Response } from 'express';
import httpStatus from 'http-status';

const notFound = (req: Request, res: Response) => {
  return res.status(httpStatus.NOT_FOUND).json({
    scusses: false,
    message: 'api not found',
    error : ""
  });
};

export default notFound