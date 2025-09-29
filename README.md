# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Weather React App 🌤️

A responsive React web application that displays **current weather** and a **5-day forecast** for any city using the **OpenWeatherMap API**. Built to be visually appealing with smooth animations, real-time city clocks, and modern UI styling.  

---

## Features

- Search for any city worldwide and view current weather.
- 5-day forecast display with temperature, weather condition, and icons.
- Real-time city time displayed in **24-hour format**.
- Loading and error handling for invalid city names.
- Responsive and animated UI with gradient backgrounds.
- Modern fonts and styling using Google Fonts.

---

## Tech Stack

- **Frontend:** React, JSX, CSS (SCSS optional)
- **API:** OpenWeatherMap API
- **State Management:** React `useState` and `useEffect`
- **HTTP Requests:** Axios
- **Animations:** CSS animations for gradient background and loading effects
- **Fonts:** [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) for title

---

## Future Improvements

- Add **geolocation** to automatically show weather for the user’s location.
- Add **unit switching** (Celsius ↔ Fahrenheit).
- Implement **hourly forecast** view.
- Add **dark/light mode toggle**.

---

## Installation

```bash
# Clone the repository
git clone <repo-url>

# Navigate to project folder
cd weather-react-app

# Install dependencies
npm install

# Start development server
npm run dev