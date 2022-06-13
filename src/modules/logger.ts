import { RequestHandler } from "express";
import dayjs from 'dayjs';

const requestLogger: RequestHandler = (req, res, next) => {
  // used to calculate response time
  const startTime = Date.now();

  const method = req.method;
  const url = req.url;
  const reqInfo = `\n[req ${dayjs().format('YYYY-MM-DD HH:MM')}] ${method} ${url}`;
  console.log(reqInfo);

  req.on('end', () => {
    const responseTime = Date.now() - startTime;
    console.log(`[res ${dayjs().format('YYYY-MM-DD HH:MM')}] ${res.statusCode} ${responseTime}ms \n`);
  });

  next();
};

export default {
  requestLogger
};