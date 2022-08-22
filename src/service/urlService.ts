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

  const now = new Date().toLocaleDateString();
  const expiresIn = urlFinded?.expiresIn;

  if (now === expiresIn) throw new Error("This short url was expired");

  return urlFinded?.originalUrl;
  
}

export default {
  reduceUrl,
  getLink
}

