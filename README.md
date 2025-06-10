# Player Mood Board

A mobile-friendly web app that lets soccer players submit their mood after training (😃 😐 😞), and shows the coach a live dashboard of team sentiment.

---

## Project Structure

- `/frontend` – React app (mobile-first UI for players and coach)
- `/backend` – PHP + SQLite API (handles mood submissions and summary)

---

## Demo

**[View Live Demo](https://player-mood-board.vercel.app)**  
_(Frontend only – using `localStorage` to simulate backend)_

---

## Setup Instructions

- See [`/frontend/README.md`](./frontend/README.md) for how to run the React app
- See [`/backend/README.md`](./backend/README.md) for how to run the PHP API

---

## Tech Stack

- **Frontend**: React 19, Vite, Plain CSS
- **Backend**: Plain PHP, SQLite
- **API**: REST (`POST /mood`, `GET /moods?date=YYYY-MM-DD`)

---

## Features

- Players submit mood in 1 tap
- Coach sees live mood summary
- Optional offline demo via `localStorage` (no backend needed)
- Clean, modular code structure

---

## Note

The demo on Vercel is deployed without a backend due to their serverless limitations, it uses local storage to store and retrieve data. For full functionality, run the backend locally or extend the frontend to connect to a live API.

---
