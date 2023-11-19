# Welcome to the Betafore Task Backend

Backend Live Link: https://betafore-task-backend.vercel.app

<!-- HOW TO RUN -->

## Run this repository on your local machine

Please follow the below instructions to run this repository on your local machine:

1. Clone this entire repository

   ```sh
   git clone https://github.com/Khairul38/betafore-task-backend
   ```

2. Go to the cloned project directory

   ```sh
   cd betafore-task-backend

   ```

3. Make environment file with the following system

   ```sh
   # Make .env file accordingly :
   NODE_ENV=development
   PORT=5000

   DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mnkod.mongodb.net/?retryWrites=true&w=majority"

   STRIPE_SECRET=""

   BCRYPT_SALT_ROUNDS=12
   JWT_SECRET='jwt-secret'
   JWT_EXPIRES_IN=1d
   JWT_REFRESH_SECRET='jwt-refresh-secret'
   JWT_REFRESH_EXPIRES_IN=365d
   ```

4. Install dependencies

   ```sh
   yarn

   # or

   npm i
   ```

5. Run server

   ```sh
   # development mode
   yarn dev
   #or
   npm run dev

   # build mode
   yarn build
   #or
   npm run build

   # production mode
   yarn start
   #or
   npm run start
   ```

## Application Routes:

### Auth

- Route: https://betafore-task-backend.vercel.app/api/v1/auth/login (POST)
- Route: https://betafore-task-backend.vercel.app/api/v1/auth/signup (POST)
- Route: https://betafore-task-backend.vercel.app/api/v1/auth/refresh-token (POST)

### User

- Route: https://betafore-task-backend.vercel.app/api/v1/users (GET)
- Route: https://betafore-task-backend.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- Route: https://betafore-task-backend.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH) Include an id that is saved in your database
- Route: https://betafore-task-backend.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database
- Route: https://betafore-task-backend.vercel.app/api/v1/my-profile (GET)
- Route: https://betafore-task-backend.vercel.app/api/v1/my-profile (PATCH)

### Payment

- Route: https://betafore-task-backend.vercel.app/api/v1/payment/create-payment-intent (POST)

## THANKS
