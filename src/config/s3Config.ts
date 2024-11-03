import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  region: 'us-east-1', 
});

export const bucketName = 'your-bucket-name';

export default s3;
