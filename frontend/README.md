
## `/frontend/README.md`

# Frontend – Player Mood Board

This is the React frontend for the Player Mood Board app. It allows players to submit their mood and lets coaches monitor team sentiment.

## Folder Structure
```
/frontend
├── /src
│ ├── /assets # Static assets (e.g. logo)
│ ├── /components # Reusable UI components
│ ├── /lib # API logic
│ ├── /pages # Player + Coach views
│ └── App.tsx # Root app
├── /public # HTML shell
└── vite.config.ts # Vite config
```

## Getting Started

### 1. Requirements

- Node.js 18+
- NPM or Yarn

### 2. Install Dependencies

```bash
cd frontend
npm install
```
### 3. Start Development Server
```
npm run dev
```
### 4. (Optional) Setup Environment Variables
Set `VITE_API_USE_LOCAL_STORAGE` to `true` to use local storage for mood data instead of the API.
```
VITE_API_USE_LOCAL_STORAGE=true
```

## API Connection
The frontend connects to the PHP backend running at:
```
http://localhost:8000
```
Make sure the backend is running before testing functionality.

## Features
- 😃 😐 😞 emoji buttons (player view)
- Real-time mood summary (coach view)
- Mobile-first UI
- Simple CSS (no framework)
- Dark mode support
- Responsive design
- Lightweight and fast
- Lightweight animations
- No external dependencies (except React)
- TypeScript for type safety
- Vite for fast builds
- Local Storage for offline / serverless support

## Pages
/ - Player mood submission

/coach - Mood summary dashboard

## Production
Build with:
```
npm run build
```

Deploy dist/ folder to any static host (e.g. Netlify, Vercel, etc.)