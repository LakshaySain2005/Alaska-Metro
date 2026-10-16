<div align="center">
  <h1>Alaska Metro Connections</h1>
  <p><strong>A platform designed to connect daily metro commuters who share the same routes.</strong></p>
</div>

---

## About The Project

Alaska is a web application built to make daily commutes less lonely and more connected. Millions of people travel on the metro every day, often crossing paths with the same individuals without ever speaking. 

This platform allows users to input their daily starting station, destination, and travel time. The system then intelligently matches them with other commuters who share overlapping route segments at the same time of day. 

Users can view these overlapping routes on an interactive map, send connection requests, establish trust through a review system, and coordinate meetups using real-time private chat.

---

## Key Features

- **Smart Route Matching:** Instantly finds users who share the same path, even if they only overlap for a few stations.
- **Interactive Maps:** Visually renders full metro routes and highlights the exact stations where you overlap with other commuters.
- **Real-Time Chat:** A built-in private messaging system allowing matched users to coordinate their commute instantly.
- **Trust and Safety:** Features a community review and rating system so users can connect with confidence. You can also block or decline requests.
- **Responsive Design:** A beautiful, modern interface that works seamlessly on both desktop and mobile devices.

---

## Technology Stack

Alaska is built using a modern, scalable full-stack ecosystem:

- **Frontend:** React, Zustand (State Management), Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Real-Time Communication:** Socket.IO
- **Deployment:** Vercel

---

## How It Works

1. **Set Up Your Route:** Enter your daily origin and destination stations, along with the time you usually travel.
2. **Discover Matches:** The application calculates and displays a list of people traveling on the same lines at the same time.
3. **Review Profiles:** Check out a user's ratings and past reviews to ensure they are a good fit for travel.
4. **Connect and Chat:** Send a connection request. Once accepted, a real-time private chat room opens up so you can coordinate where to meet.

---

## Getting Started

If you want to run this project locally, follow these steps:

### Prerequisites

- Node.js installed
- A running PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nikhilkumar404/ALASKA_METRO.git
   cd ALASKA_METRO
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   # Add your database URL to the .env file
   npx prisma migrate dev
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.
