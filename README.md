### RDI2Go Courier Service - Fullstack Demo

RDI2Go is a fullstack courier service platform built with **React** (frontend) and **Express.js** (backend).  
This project is a courier platform where users can sign up, calculate shipping costs, and access role-based features. It was created as part of an internship application to demonstrate basic backend and fullstack skills. Future updates will focus on implementing advanced backend practices and optimizations.

---

## Features

### User Features
- Signup/Login with **JWT authentication** stored in HTTP-only cookies.
- **Dashboard** showing:
  - Profile information
  - Unique customer ID and U.S. shipping address
  - Shipping cost calculator (dynamic price-per-pound)
  - Role-based access (for admins)
  - Copy address functionality
- Responsive frontend using React and plain CSS.
- Toast notifications for user actions using **React Hot Toast**.

### Admin Features
- View a table of registered users with **name, email, and role switching**.
- Change user roles dynamically (**user → admin**).
- Admin-only dashboard access.

### Planned Backend Improvements
Future updates will include:
- Full **Role-Based Access Control (RBAC)**.
- **Audit logs** to track role changes.
- Input **validation and sanitization**.
- Advanced **error handling middleware**.
- Database **optimization** (indexes, query efficiency).
- **API caching** for frequently accessed data (pricing, user info).
- **Rate limiting** and throttling for security.
- Unit and integration testing for backend APIs.
- Modularized **routing and controllers** for maintainability.

---


### Future Enhancements

- Implement a full admin panel with advanced analytics
- Improve UI/UX for dashboard and shipping calculator
- Add payment integration for shipping cost payments
- Include audit logs and implement additional security best practices

---

## Tech Stack

- **Frontend:** React, React Router, React Hot Toast, Plain CSS  
- **Backend:** Node.js, Express.js, JWT, Cookie-parser  
- **Database:** MongoDB  
- **Tools:** Postman for API testing  

---

### How to Run Locally

1. **Create a `.env` file** in the root of the server folder and add the following keys:
- MONGO_URI=<your-mongo-db-uri>
- NODE_ENV=development
- JWT_SECRET=<your-jwt-secret>


2. **Install dependencies** for both client and server:

```bash
# SERVER
cd server
npm install 

# CLIENT
cd ../client
npm install

