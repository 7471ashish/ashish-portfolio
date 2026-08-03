# Ashish Bansal — Portfolio (React + Tailwind)

React + Vite + Tailwind conversion of the original static HTML/CSS/JS
portfolio site.

## Folder structure

```
portfolio-project/
├── index.html              # Vite entry HTML (fonts loaded here)
├── package.json
├── vite.config.js
├── tailwind.config.js      # custom colors + heat gradient live here
├── postcss.config.js
├── src/
│   ├── main.jsx             # React root
│   ├── App.jsx               # assembles all sections
│   ├── index.css             # Tailwind directives + global rules
│   ├── data/
│   │   └── siteData.js       # all page content (projects, skills, etc.)
│   ├── hooks/
│   │   └── useReveal.js      # scroll-reveal IntersectionObserver hook
│   └── components/
│       ├── Header.jsx
│       ├── MobileMenu.jsx
│       ├── Hero.jsx
│       ├── HeatCanvas.jsx    # cursor-reactive canvas glow
│       ├── About.jsx
│       ├── Projects.jsx      # holds the filter state
│       ├── ProjectCard.jsx   # tilt/glow-on-hover card
│       ├── Achievements.jsx
│       ├── Education.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
```

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Editing content

All page copy — projects, skills, achievements, education, contact
details — lives in `src/data/siteData.js`. Change it there instead of
digging through JSX.
