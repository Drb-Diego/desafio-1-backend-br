import crypto from 'crypto';
import urlModel from '../models/urlModel';

const reduceUrl = async (originalUrl: string) => {
  const shortUrl = crypto.randomBytes(5).toString("hex");
  const date = new Date().toLocaleDateString().split("/");
  const expiresIn = `${date[0]}/${date[1]}/${Number(date[2]) + 1}`;

  await urlModel.reduceUrl(originalUrl, shortUrl, expiresIn);

  return shortUrl;
}

const getLink = async (shortUrl: string) => {
  const urlFinded = await urlModel.getLink(shortUrl);

  if (urlFinded) {
    const now = new Date().toLocaleDateString();
    const expiresIn = urlFinded.expiresIn;
  
    const nowYear = Number(now.split("/")[2]);
    const expiresYear =  Number(expiresIn.split("/")[2]);
    
    if (now === expiresIn || nowYear > expiresYear) throw new Error("This short url was expired");
  
    return urlFinded?.originalUrl;
  }

  throw new Error("This short url does not cadastred");
  
}

export default {
  reduceUrl,
  getLink
}

