import { APIGatewayProxyHandler } from 'aws-lambda';
import { getAllJSONData } from '../utils/s3Utils';

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const data = await getAllJSONData();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to retrieve data' }),
    };
  }
};
