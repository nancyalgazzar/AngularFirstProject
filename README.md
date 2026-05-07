# Task Manager App

Time is a crucial asset that needs proper management.  
This application was built to help users organize and manage their daily tasks efficiently while improving productivity through a simple and user-friendly interface.

The project is a modern task management web application built with **Angular** and powered by **JSON Server** as a mock backend API.  
Users can create tasks with descriptions, deadlines, priorities, and categories, update tasks when needed, and mark them as completed once finished.  
The application also includes authentication features such as Sign Up and Log In for a complete user experience.



## Demo Video


<video src="./demo.mp4" controls width="700"></video>

## Features

### Authentication
- Sign Up
- Log In

### Task Management
- Add new tasks
- Update existing tasks
- Delete tasks
- Mark tasks as completed

### Task Details
Each task includes:
- Title
- Description
- Deadline
- Priority
- Category

### Priority Levels
- Low
- Medium
- High

### Categories
- Study
- Work
- Personal


## Tech Stack

### Frontend
- Angular
- TypeScript
- HTML
- CSS / Bootstrap

### Backend
- JSON Server


## Run the project

1. Start the JSON server:

```bash
npm run server
```

2. Start the Angular app in your browser:

```bash
npm run app
```

After running `npm run app`, the browser should open automatically at `http://localhost:4200/`.

## Available scripts

- `npm run server` — starts `json-server` using `db.json`
- `npm run app` — starts the Angular application and opens it in the default browser
- `npm run build` — builds the production bundle
- `npm run watch` — builds in development mode and watches for file changes
- `npm run test` — runs unit tests with Vitest

## Notes

- Make sure dependencies are installed first with `npm install`
- Keep both `server` and `app` running in separate terminals for the full experience
