# TRAVEL-APP

## HOW TO INSTALL
Open your terminal and type `git clone https://github.com/JoDiFo/travelling-app.git`

Then type `cd client` (or go to `travelling-app/client`), and run `npm install`. This will install all dependencies for client side.

After that go to `travelling-app/server` and run `npm install`.

**This is it. Now you are ready to start the app!**

## HOW TO START THE APP
Go to `travelling-app/client` and run `npm run dev`. This will start dev server for client.

After that go to `travelling-app/server` and run `npm run start:dev`. This will start dev server for server.

After that go to __http://localhost:5173__.

## API
- GET /routes -> Route[] // get all routes for all users
- GET /routes/:routeId -> Route // get a detailed info about rote
- GET /routes/booking/:userId -> Route[]
- POST /routes/booking {userId: number} -> Route[]
- POST /routes Route -> Route (admin) // create route (availivle only for admins)

- GET /favorites/:userId -> Route[] // get favorite routes for the user

- PUT /favorites {routeId, userId} -> status 200 // put route to favorites

- *DONE*: POST /auth/register {email: string, password: string} -> JWT (USER)
- *DONE*: POST /auth/login {email: string, password: string} -> JWT (USER)

- GET /guides -> Guide (ADMIN)
- POST /guides Guide

Route {
  title: string
  duration: number
  cost: number
  description: string
  category: string
  map: string
  guide:string
  region: string
  time: string[]
}

Guide {
  surname: string
  name: stirng
  patronymic: string
  phone: string
}

User {
email: string
password: string
roles: string
}
