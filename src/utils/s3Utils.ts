import s3, { bucketName } from '../config/s3Config';

export const uploadJSON = async (key: string, data: object) => {
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: JSON.stringify(data),
    ContentType: 'application/json',
  };
  const result = await s3.upload(params).promise();
  return result;
};

export const getAllJSONData = async () => {
  const params = { Bucket: bucketName };
  const objects = await s3.listObjectsV2(params).promise();
  const data = await Promise.all(
    objects.Contents?.map(async (file) => {
      const fileData = await s3.getObject({ Bucket: bucketName, Key: file.Key! }).promise();
      return JSON.parse(fileData.Body!.toString('utf-8'));
    }) || []
  );
  return data;
};
