import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda';
import fetch from 'isomorphic-fetch';
import cheerio from 'cheerio';
export async function handler(
  event: APIGatewayEvent,
  context: APIGatewayEventRequestContext
) {
  const message = await fetch(
    'https://twitter.com/swyx/status/1096268437393821696'
  )
    .then(async res => {
      const text = await res.text();

      const $ = cheerio.load(text);
      // document.querySelectorAll('.permalink-tweet-container .tweet-text')
      const tweetText = $('.permalink-tweet-container .tweet-text').text();
      return tweetText;
    })
    .catch(err => {
      console.error('error occured with ', err);
      throw new Error(err);
    });
  return {
    statusCode: 200,
    body: JSON.stringify({
      message
    })
  };
}
