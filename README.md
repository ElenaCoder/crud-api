# CRUD API Assignment

## Description

This project is a simple **CRUD API** implemented using an in-memory database. It provides endpoints to create, read, update, and delete user records, with robust error handling for invalid requests and IDs.

## Technical Requirements

- **Language**: JavaScript or TypeScript
- **Node.js Version**: 22.9.0 or higher
- **Allowed Libraries**:
  - `nodemon`, `dotenv`, `cross-env`, `typescript`, `ts-node`, `ts-node-dev`
  - `eslint` and its plugins, `prettier`
  - `webpack-cli`, `webpack` and its plugins
  - `uuid`, `@types/*`
  - Libraries used for testing (e.g., `jest`, `supertest`)

## Endpoints

### `GET /api/users`
- Retrieves all user records.
- **Response**: `200 OK` with an array of user records.

### `GET /api/users/{userId}`
- Retrieves a user by their `userId`.
- **Response**: 
  - `200 OK` with the user record if it exists.
  - `400 Bad Request` if `userId` is not a valid UUID.
  - `404 Not Found` if no user with the given `userId` exists.

### `POST /api/users`
- Creates a new user record.
- **Request Body**:
  ```json
  {
    "username": "string (required)",
    "age": "number (required)",
    "hobbies": ["array of strings (required)"]
  }
- **Response**:
  -`201 Created` with the newly created user record.
  -`400 Bad Request` if the request body lacks required fields.

### `PUT /api/users/{userId}`
- Updates an existing user by their `userId`.
- **Request Body**:
  ```json
  {
  "username": "string (required)",
  "age": "number (required)",
  "hobbies": ["array of strings (required)"]
  }
- **Response**:
  -`200 OK` with the updated user record.
  -`400 Bad Request` if userId is not a valid UUID or required fields are missing.
  - `404 Not Found` if no user with the given `userId` exists.

### `DELETE /api/users/{userId}`
- Deletes an existing user by their `userId`.
- **Response**:
  -`204 No Content` if the user was successfully deleted.
  - `400 Bad Request` if userId is not a valid UUID.
  - `404 Not Found` if no user with the given `userId` exists.

## Error Handling

1. Requests to non-existing endpoints should return: `404 Not Found` with a human-friendly message.
2. Server errors should be handled gracefully: `500 Internal Server Error` with a human-friendly message.

## User Data Model

Users are stored as objects with the following properties:

- **id**— A unique identifier (UUID) generated on the server side.
- **username** — User's name (string, required).
- **age** — User's age (number, required).
- **hobbies** — User's hobbies (array of strings, required).

## Environment Variables

Store the application port in a .env file: `PORT=4000`

## Running the Application

### Development Mode

Uses nodemon or ts-node-dev for hot-reloading during development.
Start the app in development mode: `npm run start:dev`

## Build

To compile the TypeScript code into JavaScript, run the following command: `npm run build`.
This will use the tsc command to transpile your TypeScript files into JavaScript and output them into the dist directory.

### Production Mode

Bundles the application using webpack and then runs the compiled file.
Start the app in production mode: `npm run start:prod`

## Testing with Jest

Run Tests: `npx jest`.

## License

This project is licensed under the MIT License.
