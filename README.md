# Simple To-Do App

A full-stack, simple To-Do List application built with Node.js, Express, MySQL, and Vanilla JavaScript.

## Features
- View all tasks
- Add a new task
- Edit an existing task
- Delete a task

## Tech Stack
- **Frontend:** HTML5, CSS3, Bootstrap 5, Vanilla JavaScript (Fetch API)
- **Backend:** Node.js, Express.js
- **Database:** MySQL

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Akhilcharankumarpujari/backend-1.git
   cd backend-1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Database Setup:**
   - Open your MySQL server.
   - Create a database named `todo`.
   - Create a table named `todoitems` with the following schema:
     ```sql
     CREATE DATABASE todo;
     USE todo;
     CREATE TABLE todoitems (
         ID INT AUTO_INCREMENT PRIMARY KEY,
         itemDescription VARCHAR(255) NOT NULL,
         completed BOOLEAN DEFAULT false
     );
     ```
   - Update the database credentials (`user` and `password`) inside `backend/server.js` to match your local MySQL configuration if necessary.

## Usage

1. Start the Node.js server from the `backend` folder:
   ```bash
   cd backend
   node server.js
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## License
ISC
