// import serverless from 'serverless-http';

// import http from 'http';;
// const server = new http.Server((req, res) => page.render(req, res));

// exports.handler = serverless(server);
import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import morgan from 'morgan';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Attach logger
app.use(morgan(customLogger));
// app.use(express.static(path.resolve(__dirname, "./Browser"));

const functionName = 'pages';
const routerBasePath =
  process.env.NODE_ENV === 'dev'
    ? `/${functionName}`
    : `/.netlify/functions/${functionName}/`;

const page = require('./index');
app.get(routerBasePath, (req, res) => {
  console.log({ routerBasePath });
  return page.render(req, res);
});
const pota = require('./potato');
app.get(routerBasePath + 'potato', (req, res) => {
  console.log({ routerBasePath });
  return pota.render(req, res);
});

exports.handler = serverless(app);

export default function customLogger(tokens: any, req: any, res: any) {
  const log = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'),
    '-',
    tokens['response-time'](req, res),
    'ms'
  ].join(' ');

  if (process.env.NODE_ENV !== 'dev') {
    // Log only in AWS context to get back function logs
    console.log(log);
  }
  return log;
}
