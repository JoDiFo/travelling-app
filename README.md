# TRAVEL-APP
### API
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
