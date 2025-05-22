# MyContacts Backend API (Express.js)

This is a RESTful API built using **Node.js**, **Express.js**, and **MongoDB** that allows users to:

- ✅ Register and log in (authentication with JWT)
- 📇 Perform full CRUD operations on contacts (Create, Read, Update, Delete)

All endpoints were tested using **Thunder Client** in VS Code.

## 🔧 Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB & Mongoose
- Authentication: JWT (JSON Web Token)
- Testing: Thunder Client (VS Code REST client)
- Environment Config: dotenv

## 🧪 Features

- 🧍 User registration & login with encrypted passwords
- 🔐 JWT-based Authentication & Authorization
- 📇 Contacts: 
  - `GET /api/contacts` – Get all contacts
  - `POST /api/contacts` – Create a contact
  - `GET /api/contacts/:id` – Get a single contact
  - `PUT /api/contacts/:id` – Update a contact
  - `DELETE /api/contacts/:id` – Delete a contact

## 🧪 How to Test

Use **Thunder Client** (or Postman) with these endpoints:

- Register: `POST /api/users/register`
- Login: `POST /api/users/login`
- Add Contact: `POST /api/contacts`
- View Contacts: `GET /api/contacts`
- Update Contact: `PUT /api/contacts/:id`
- Delete Contact: `DELETE /api/contacts/:id`

Authentication token must be included in the headers:



## 🚀 How to Run

```bash
git clone https://github.com/manjunath265/ExpressJS.git
cd mycontacts-backend
npm install
npm run dev

