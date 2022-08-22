import app from './app';

const { PORT } = process.env || 3000;

app.listen(PORT, () => console.log(`Server up\nhttp://localhost:${PORT}`));