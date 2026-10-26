
# Student API

A beginner-friendly REST API built using Node.js and Express.js.

## Features

- Check API status using the home route.
- Get student details using a GET request.
- Send student data using a POST request.
- Accept JSON request bodies.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman (for API testing)

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check whether the API is running |
| GET | `/student` | Get student details |
| POST | `/student` | Receive student data |

## Example Response

### GET /student

```json
{
  "name": "Anuj Sharma",
  "course": "B.Tech CSE",
  "college": "GN Group of Institutions"
}
```

### POST /student

Send this JSON in the request body:

```json
{
  "name": "Rahul",
  "course": "B.Tech CSE"
}
```

The API returns a success message and the received student data. Currently, data is not stored in a database.

## How to Run Locally

1. Clone this repository.
2. Open the project folder in your terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server using:

   ```bash
   node server.js
   ```

5. Open `http://localhost:8080` in your browser.

## Author

Anuj Sharma

GitHub: https://github.com/Anujsharma829
