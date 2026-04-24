# Weather Dashboard UI Template

A glassmorphism weather dashboard built with React (CDN), Tailwind CSS, and custom SVG icons.
Designed as a frontend template — drop in your own weather API data and background image.

![preview](assets/preview.png)

## Features

- Glassmorphism UI with frosted card components
- 6-day forecast with animated sparkline chart
- Multi-location sidebar cards
- Fully responsive sidebar navigation
- Zero build tools required — runs directly in browser

## Getting Started

1. Clone or download this repo
2. Add your background image to `assets/bg-storm.jpg`
3. Open `index.html` in a browser (use Live Server or any static file server)
4. Replace mock data in `src/App.jsx` with your API data

## Customization

| What | Where |
|------|-------|
| Your name | `CONFIG.userName` in `src/App.jsx` |
| Background image | `assets/bg-storm.jpg` |
| Forecast data | `DAYS` array in `src/components/MainPanel.jsx` |
| Location cards | `RightPanel.jsx` |
| Colors / glass style | CSS in `index.html` |

## Weather API Suggestions

- [OpenWeatherMap](https://openweathermap.org/api) — free tier available
- [WeatherAPI](https://www.weatherapi.com) — easy JSON format
- [Open-Meteo](https://open-meteo.com) — fully free, no key needed

## Tech Stack

- React 18 (via CDN)
- Tailwind CSS (via CDN)
- Babel Standalone (JSX compilation)
- Custom SVG icon set

## License

MIT — free to use, modify, and distribute.
