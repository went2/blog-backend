import express, { RequestHandler } from 'express';
import blogsRouter from './routes/blogs';
import log from './middlewares/logger.middleware';
import { connect } from 'mongoose';
import chalk from 'chalk';
import 'dotenv/config';

const app = express();
app.use(express.json());

// integrate middleware
app.use(log.requestLogger);

// connect to MongoDB
const db = process.env.MONGO_DB as string;
connect(db)
  .then(() => {
    console.log(chalk.green('Connected to MongDB.'));
  })
  .catch(err => console.log(chalk.red('Unable to connect to MongDB', err)));

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