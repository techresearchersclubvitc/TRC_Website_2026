# TRC Website 2026

Official website for TRC (The Research Club) built with React, Vite, and Tailwind CSS.

## Features

- Modern React 18 with Vite for fast development
- Tailwind CSS for styling
- 3D animations and interactive components
- Responsive design
- Multiple pages: Home, Events, Team, Recruitments, Contact

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the required dependencies.

### `npm run dev`

Runs the app in development mode with Vite.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Preview the production build locally before deploying.

### `npm run lint`

Runs ESLint to check for code quality issues.

## Project Structure

```
TRC_Website_2026/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/              # Images, icons, and static assets
│   ├── components/          # Reusable React components
│   │   ├── AtomLogo3D.jsx
│   │   ├── DNAThread.jsx
│   │   ├── EventCard.jsx
│   │   ├── EventCard.css
│   │   ├── EventsSection.jsx
│   │   ├── EventsSection.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   └── OrbitsBackground.jsx
│   ├── data/                # Static data and content
│   │   └── content.js
│   ├── pages/               # Page components
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Events.jsx
│   │   ├── Events.css
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Recruitments.jsx
│   │   ├── Recruitments.css
│   │   ├── Team.jsx
│   │   └── Team.css
│   ├── styles/              # Global styles
│   │   └── theme.css
│   ├── App.jsx              # Main App component
│   ├── App.css
│   ├── AppLogo.jsx
│   ├── main.jsx             # Application entry point
│   ├── index.js
│   ├── index.css
│   └── OrbitsBackground.jsx
├── COLORS.md                # Color scheme documentation
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
└── README.md

```

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Three.js (for 3D components)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Vite settings
4. Click "Deploy"

### Deploy via CLI

```bash
npm install -g vercel
vercel login
vercel
```

## Authors

- **Aditya** - Development and Design
- **Anvi Bansal** 

---

Made with ❤️ by The Research Club
