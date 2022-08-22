import { NextFunction, Request, Response } from "express"
import urlService from "../service/urlService";

const { PORT } = process.env || 3000;

const reduceUrl = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { originalUrl } = req.body;

    const shortUrl = await urlService.reduceUrl(originalUrl);

    return res.status(200).json({newUrl: `http://localhost:${PORT}/url/${shortUrl}` });
  } catch (error) {    
    next(error);
  }
}

export default {
  reduceUrl,
}