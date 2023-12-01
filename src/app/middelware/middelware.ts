/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

const globalErrorHandelar = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statuseCod = 500;
  const massage = err.message || 'somthing want wrong';
  return res.status(statuseCod).json({
    suceess: false,
    massage,
    error: err,
  });
  next();
};

export default globalErrorHandelar;
