# LeadDesk Mini

LeadDesk Mini is a simple full stack web application built for the Digital Heroes Training Task. It allows users to submit project inquiries through a public form and lets the admin view and manage all submitted leads. :contentReference[oaicite:0]{index=0}

## Live Demo

Home Page

https://mini-leaddesk.netlify.app

Admin Page

https://mini-leaddesk.netlify.app/admin

## Features

* Public lead form
* Client side validation
* Server side validation
* Store leads in MongoDB
* Admin dashboard
* Search leads by name or email
* Update lead status
* Responsive layout

## Tech Stack

Frontend

* React
* Vite
* Axios

Backend

* Node.js
* Express.js

Database

* MongoDB Atlas

Deployment

* Netlify
* Render

## Project Structure

```
LeadDesk Mini
│
├── frontend
│
└── backend
```

## Installation

Clone the repository

```bash
git clone https://github.com/Ugly-stuff/LeadDesk-Mini.git
```

Go to the project folder

```bash
cd LeadDesk-Mini
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Backend

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Frontend

```
VITE_API_URL=your_backend_url/api
```

## API Endpoints

Create Lead

```
POST /api/leads
```

Get All Leads

```
GET /api/leads
```

Update Lead Status

```
PATCH /api/leads/:id
```

## Built For

This project was created as part of the Digital Heroes Training Task.

Digital Heroes

https://digitalheroesco.com :contentReference[oaicite:1]{index=1}
