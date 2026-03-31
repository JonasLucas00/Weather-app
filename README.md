# 🌤️ Weather App

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

A full-stack weather application that delivers real-time weather data, UV index monitoring, and hourly forecasts for any location worldwide.

## 🔗 **[Live Demo](https://weather-app-ten-xi-79.vercel.app/)**


![app screenshot](./server/assets/Captura%20de%20tela%20de%202026-03-28%2001-47-37.png)

---

## Features

- **Current Weather** — Temperature, feels-like, humidity, and wind speed
- **UV Index** — Real-time UV index with SPF recommendations
- **Next hours Forecast** — Weather conditions for the next hours with icons
- **Next five days Forecast** — Weather conditions for the next five days
- **Location Search** — Search by city name or use your device's current location
- **Responsive Design** — Clean UI built with Tailwind CSS and glassmorphism effects

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| client/Frontend | React, Vite, Tailwind CSS, javaScript |
| server/Backend | Node.js, Express, javaScript |
| APIs | OpenWeatherMap, Open-Meteo |
| Other | Font Awesome, Google Fonts |

---

## Project Structure

```
weather-app/
├── client/          # React + JavaScript + Vite application
│   ├── src/
│   │   ├── components/
│   │   ├── utlls/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── .env.example
└── server/           # Node.js + JavaScript + Express API server
    ├── src/
    │   └── controllers/
    │   └── routes/
    └──  app.js
    └── .env.example
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- API key from [OpenWeatherMap](https://openweathermap.org/api) (free tier works)

### 1. Clone the repository

```bash
git clone https://github.com/JonasLucas00/Weather-app.git
cd weather-app
```

### 2. Set up the Backend

```bash
cd server
npm install
```

Create a `.env` file based on the example:

```bash
cp .env.example .env
```

Fill in your `.env`:

```env
WEATHER_KEY=your_api_key_here
```

Start the server:

```bash
npm run dev
```

### 3. Set up the Frontend

Open a new terminal:

```bash
cd client
npm install
```

Create a `.env` file based on the example:

```bash
cp .env.example .env
```

Fill in your `.env`:

```env
VITE_API_BASE_URL=http://localhost:3000
```

Start the dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Environment Variables

### Backend (`server/.env`)

| Variable | Description |
|----------|-------------|
| `PORT` | Port for the Express server (default: 3000) |
| `WEATHER_KEY` | Your OpenWeatherMap API key |
| `ALLOWED_ORIGIN` | Your allowed origin |

### Frontend (`client/.env`)

| Variable | Description |
|----------|-------------|
| `VITE_API_BASE_URL` | Base URL of the backend server |

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/weather/position?lat={lat}&lon={lon}` | Get current weather by user's current position |
| `GET` | `/weather/search?city={city}` | Get current weather by city name |
| `GET` | `/weather/forecast?lat={lat}&lon={lon}` | Get next hours forecast |
| `GET` | `/weather/uv?lat={lat}&lon={lon}` | Get UV index by coordinates |
| `GET` | `/weather/days?lat={lat}&lon={lon}` | Get 5-day forecast |

---

## License

This project is open source and available under the [MIT License](LICENSE).