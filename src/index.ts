import express, { RequestHandler } from 'express';
import blogsRouter from './routes/blogs';
import log from './modules/logger';

const app = express();
app.use(express.json());
app.use(log.requestLogger);

app.get('/', (_req, res) => {
  res.send('<h1>Hello World sent from express backend');
});

app.use('/api/blogs', blogsRouter);

const unknownEndpoint: RequestHandler = (_req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};
app.use(unknownEndpoint);

const PORT = 3002;
app.listen(PORT, () => {
  console.info(`server running on port ${PORT}`);
});