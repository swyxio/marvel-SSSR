// // import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda';
// import fetch from 'isomorphic-fetch';
// import cheerio from 'cheerio';
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

// const page = require('./index');
// app.get(routerBasePath, (req, res) => {
//   console.log({ routerBasePath });
//   return page.render(req, res);
// });
const pota = require('./viewTweet');
app.get(routerBasePath + 'viewTweet', async (req, res) => {
  // const message = await fetch(
  //   'https://twitter.com/swyx/status/1096268437393821696'
  // )
  //   .then(async res => {
  //     const text = await res.text();

  //     const $ = cheerio.load(text);
  //     // document.querySelectorAll('.permalink-tweet-container .tweet-text')
  //     const tweetText = $('.permalink-tweet-container .tweet-text').text();
  //     return tweetText;
  //   })
  //   .catch(err => {
  //     console.error('error occured with ', err);
  //     throw new Error(err);
  //   });
  // console.log({ routerBasePath });
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
