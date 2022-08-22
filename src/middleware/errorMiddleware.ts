import { NextFunction, Request, Response } from 'express';

export default (error: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: error.message });
};
