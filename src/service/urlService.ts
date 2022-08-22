import crypto from 'crypto';
import urlModel from '../models/urlModel';

const reduceUrl = async (originalUrl: string) => {
  const shortUrl = crypto.randomBytes(5).toString("hex");
  await urlModel.reduceUrl(originalUrl, shortUrl);

  return shortUrl;
}

export default {
  reduceUrl,
}

