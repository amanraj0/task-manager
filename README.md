# Task Manager with Role-Based Access Control (RBAC)

A Node.js task manager app featuring JWT authentication and Role-Based Access Control. Users can create, update, and manage tasks securely based on their assigned roles: Admin or User.

## Features

- User registration and login with JWT authentication
- Role-Based Access Control with roles: Admin, Manager, User
- Password hashing with custom salt + hash in Mongoose pre-save middleware
- Admins can delete any task
- Managers and Admins can update any task
- Users can only view and manage their own tasks
- Secure API endpoints with role authorization middleware

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Custom password hashing with salt + hash (in Mongoose middleware)

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB running (locally or hosted)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/amanraj0/task-manager.git
   cd task-manager
2. Install dependencies

   ```bash
   npm install
3. Create a .env file and add your environment variables:

   ```ini
   PORT=5000
   MONGO_DB_URL=your_mongodb_connection_string
   JWT_TOKEN_SECRET=your_jwt_secret
   JWT_TOKEN_EXPIRY_IN_SEC=your_expiry_time_in_sec

4. Start the app

   ```bash
   npm start
   
The server will run on http://localhost:5000

## Password Hashing
   Passwords are hashed with a custom implementation in the Mongoose user schema's pre-save middleware:

   A random salt is generated per user

   Passwords are hashed with the salt before saving

   Salt and hashed password are stored separately in the database

   This enhances security by ensuring passwords are not stored in plain text and each user has a unique salt.

## API Endpoints
   POST /auth/register - Register a new user

   POST /auth/login - User login, returns JWT token

   GET /tasks - Get tasks (users get their own, admins get all)

   POST /tasks - Create a new task

   DELETE /tasks/:id - Delete a task (admin only)

## Role-Based Access Control (RBAC)
  
  Admin: Full access, can delete any task

  User: Can only access and manage their own tasks


  ## Feel free to contribute or open issues!
