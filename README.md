# JUBAIR P · Flutter Developer — Portfolio (React)

A modern, animated, responsive portfolio built with HTML/CSS/JS and animation libraries via CDNs (GSAP, ScrollTrigger, AOS, and Lenis). The site now renders content with **React 18** (loaded via CDN) using an inline JSX script (transpiled by Babel in the browser) inside `index.html`.

## Features
- Smooth scrolling and scroll-triggered animations
- Modern dark, glassy UI with responsive layout
- Magnetic buttons and hover glow effects
- Sections for About, Experience, Projects, Skills, Certifications, Education, and Contact
 - React component structure rendered into `#root`

## Structure
- `index.html` — main page
- `assets/css/styles.css` — styles
- `assets/js/main.js` — scripts and animations

React is injected via CDN tags and an inline `<script type="text/babel">` at the bottom of `index.html`. The top-level `App` component renders all sections.

## Run locally
Use any static web server.

### Option 1: Python (recommended)
```bash
# Windows (if Python launcher is installed)
py -m http.server 5173
# Or
python -m http.server 5173
```
Open http://127.0.0.1:5173 in your browser.

### Option 2: Node http-server
```bash
npx http-server -p 5173
```

## Edit content
Edit React components inside `index.html` (search for `// React App` or `<script type="text/babel">`). Components include `Hero`, `About`, `Experience`, `Projects`, `Skills`, `Certifications`, `Education`, and `Contact`. Update the JSX content as needed.

If you prefer, we can move the inline React code into `assets/js/app.jsx` and keep using Babel in-browser, or set up a proper React build (Vite/Next.js) for better DX and performance.

## License
MIT
