# Job Sheet Management System

## Project Description:

The **Job Sheet Management System** is a full-stack web application designed to manage job sheets. Users can create, view, edit, and delete job sheets, as well as search and print job sheets. The project is built using the MERN stack (MongoDB, Express, React, and Node.js) to provide a responsive and scalable solution for managing job information.

## Features:

- Create new job sheets
- View existing job sheets
- Edit job sheet details
- Delete job sheets
- Search through job sheets
- Print job sheet details from the view page

## Tech Stack:

### Frontend:
- **React**: For building the user interface
- **Tailwind CSS**: For styling
- **Axios**: For making API requests to the backend

### Backend:
- **Node.js**: For running the backend server
- **Express.js**: For building RESTful API
- **MongoDB**: As the database to store job sheet data
- **Mongoose**: For interacting with MongoDB from Node.js
- **JWT**: For authentication (optional, if required)

### Tools:
- **Postman**: For testing API endpoints
- **Git**: Version control
- **VSCode**: Development environment

## Installation:

To run this project locally, follow these steps:

### Backend Setup:
1. Backend:
   cd job-sheet-management/backend

Install backend dependencies:
npm install

Create a .env file and add the following environment variables:
MONGO_URI=your-mongodb-uri
PORT=5000

Start the backend server:
npm run server

2. ### Frontend Setup:
Navigate to the frontend directory:
cd ../frontend

Install frontend dependencies:
npm install

Start the React app:
npm start

The frontend will run on http://localhost:3000 and the backend API will run on http://localhost:5001.

API Endpoints:
Job Sheet Endpoints
GET /api/jobsheets - Retrieve all job sheets
POST /api/jobsheets - Create a new job sheet
PUT /api/jobsheets/:id - Update an existing job sheet
DELETE /api/jobsheets/:id - Delete a job sheet

Usage:
Go to the homepage where you can see all the job sheets listed.
Click on "Create New Job Sheet" to add a new job.
View job sheet details by clicking on a job name.
Edit or delete a job sheet from the job's view page.
Use the search bar to filter through job sheets based on their name.
Use the "Print" button to print job sheet details.# Job Sheet Management System

 If you have any query related to this project or if i need to any change so please suggest me and contact me 
 ashvanisingh427@gmail.com


 Thank you !!!!!!!