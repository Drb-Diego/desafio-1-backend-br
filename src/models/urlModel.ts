import connetion from '../database';

const reduceUrl = async (originalUrl: string, shortUrl: string, expiresIn: string) => {
  try {
    await connetion.reduceUrl.create({ data: { originalUrl, shortUrl, expiresIn } });
  } catch (error) {
    console.error(error);
    throw new Error("Insert Error");
  }
}

const getLink = async (shortUrl: string) => {
  try {
    return connetion.reduceUrl.findFirst({ where: { shortUrl } }) ;
  } catch (error) {
    throw new Error("Url does not exists");
  }
}


export default {
  reduceUrl,
  getLink
}