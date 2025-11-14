# Backend Setup for Portfolio

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the backend directory with the following content:
   ```
   PORT=5000
   NODE_ENV=development
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

2. For `EMAIL_PASS`, if using Gmail, you need to create an App Password:
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Go to Security > App passwords
   - Generate a new app password for "Mail"
   - Use this 16-character password in the EMAIL_PASS field

## Running the Server

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## API Endpoints

- `GET /` - Health check
- `POST /api/contact` - Send contact form message

## Contact Form Integration

The contact form in the frontend will send data to the backend API endpoint `/api/contact` with the following fields:
- name (required)
- email (required)
- subject (optional)
- message (required)
- mobile (optional)

## Error Handling

- 400: Bad request (missing required fields or invalid email)
- 404: Route not found
- 500: Internal server error