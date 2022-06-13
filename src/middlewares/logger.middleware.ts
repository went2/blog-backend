import { RequestHandler } from "express";
import dayjs from 'dayjs';
import chalk from "chalk";

const log = console.log;

const requestLogger: RequestHandler = (req, res, next) => {
  // used to calculate response time
  const startTime = Date.now();

  const method = req.method;
  const url = req.url;
  const formatedStartDate = dayjs().format('YYYY-MM-DD HH:MM:ss');
  const reqInfo = `\n[req ${chalk.blue(formatedStartDate)}] ${method} ${url}`;
  log(reqInfo);

  req.on('end', () => {
    const responseTime = Date.now() - startTime;
    const formatedResponseDate = dayjs().format('YYYY-MM-DD HH:MM:ss');
    log(`[res ${chalk.blue(formatedResponseDate)}] ${res.statusCode} ${chalk.red(responseTime + 'ms')} \n`);
  });

  next();
};

export default {
  requestLogger
};