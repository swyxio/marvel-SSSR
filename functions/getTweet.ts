import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda';
import fetch from 'isomorphic-fetch';
import cheerio from 'cheerio';
export async function handler(
  event: APIGatewayEvent,
  context: APIGatewayEventRequestContext
) {
  const message = await fetch(
    'https://twitter.com/statuses/1096094647716335617'
  )
    .then(async res => {
      const text = await res.text();

      const $ = cheerio.load(text);
      // document.querySelectorAll('.permalink-tweet-container .tweet-text')
      const tweetText = $('.permalink-tweet-container .tweet-text').text();
      return tweetText;
    })
    .catch(err => {
      console.error('error2 occured with ', err);
      throw new Error(err);
    });
  return {
    statusCode: 200,
    body: JSON.stringify({
      message
    })
  };
}
