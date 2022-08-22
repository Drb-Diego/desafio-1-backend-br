import connetion from '../database';

const reduceUrl = async (originalUrl: string, shortUrl: string) => {
  try {
    const date = new Date().toLocaleDateString().split("/");
    const expiresIn = `${date[0]}/${date[1]}/${Number(date[2]) + 1}`;
    await connetion.reduceUrl.create({ data: { originalUrl, shortUrl, expiresIn } });
  } catch (error) {
    console.error(error);
    throw new Error("Insert Error");
  }
}


export default {
  reduceUrl,
}