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

const redirect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { shortUrl }  = req.params;
    const url = await urlService.getLink(shortUrl);
    return res.status(200).redirect(`https://${url}`);
  } catch (error) {
    next(error);
  }
}

export default {
  reduceUrl,
  redirect
}