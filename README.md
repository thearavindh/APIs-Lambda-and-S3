# Task 1: AWS Lambda and S3 API Service

This project implements a simple API service using AWS Lambda and S3, which allows users to store and retrieve JSON data.

## Solution Overview

The service has two main API endpoints:
1. **POST /store-json** - Accepts JSON data from the user, stores it as a file in an S3 bucket, and returns the file's eTag and URL.
2. **GET /retrieve-json** - Retrieves all JSON files stored in the S3 bucket, compiles the contents, and returns the combined data.

### Key AWS Components

- **AWS S3**: Used to store JSON files.
- **AWS API Gateway**: Provides REST endpoints for the POST and GET requests.
- **AWS Lambda**: Executes the logic for storing and retrieving JSON data.

## Project Structure

1. **Create AWS Resources**:
   - Set up an S3 bucket (ensure it has public access for file retrieval).
   - Create an API Gateway and configure it to trigger the Lambda functions.

2. **Implement Lambda Functions**:
   - Use `storeJson.ts` for the POST request handling (storing JSON).
   - Use `retrieveJson.ts` for the GET request handling (retrieving JSON).

3. **Testing**:
   - Test the endpoints via a tool like Postman.
   - Send JSON payloads to the POST endpoint and verify storage in S3.
   - Use the GET endpoint to retrieve all stored JSON data.

## Usage

### POST /store-json
- **Payload**: JSON data
- **Response**:
  ```json
  {
    "e_tag": "a1b2c3d4",
    "url": "https://your-bucket.s3.amazonaws.com/filename.json"
  }

### GET /retrieve-json

[
  {"name": "John", "age": 30},
  {"name": "Jane", "age": 25}
]



