import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda';
export async function handler(
  event: APIGatewayEvent,
  context: APIGatewayEventRequestContext
) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello world ${Math.floor(Math.random() * 10)}`
    })
  };
}
