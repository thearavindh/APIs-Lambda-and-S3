import { APIGatewayProxyHandler } from 'aws-lambda';
import { uploadJSON } from '../utils/s3Utils';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Request body is missing' }),
      };
    }

    const jsonData = JSON.parse(event.body);
    const key = `data-${Date.now()}.json`;
    const result = await uploadJSON(key, jsonData);

    return {
      statusCode: 200,
      body: JSON.stringify({ e_tag: result.ETag, url: result.Location }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to store data' }),
    };
  }
};
