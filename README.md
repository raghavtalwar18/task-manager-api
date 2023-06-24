# Task Manager API

This is a RESTful API for a simple Task Manager application built with Node.js and Express.js.

## Features

The API supports the following operations:

- Create a new task
- Retrieve all tasks
- Retrieve a single task by its ID
- Update an existing task by its ID
- Delete a task by its ID

## Setup

To set up the Task Manager API on your local machine, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project folder in your terminal.
3. Run `npm install` to install all necessary dependencies.
4. Run `node server.js` to start the server.

## Usage

Once the server is running, you can perform operations on the API. Here are the routes for each operation:

- `POST /tasks`: Create a new task. This route expects a JSON body with the following structure:
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "completed": false
  }
