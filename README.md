# Exodia '24 website

Official website for Exodia '24, the all Kerala technical gala. A single page React site that opens with an animated loading screen and then presents the fest content with scroll animations, parallax effects, and smooth scrolling.

## Tech stack

- React 18 + Vite 5
- Tailwind CSS v3 plus tailwind-scrollbar
- Recoil for state management
- Animation and scroll effects: AOS, Atropos, rolly.js, rallax.js
- Widgets: react-countup counters, react-typed text, owl carousel, react-timer-hook countdown
- UI kits: Material Tailwind, Headless UI, Heroicons
- react-helmet-async for document head updates

Currently two official Vite React plugins are available:

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc/README.md) uses [SWC](https://swc.rs/) for Fast Refresh (this repo uses this one)
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

## Getting started

Requires Node.js. Both package-lock.json and yarn.lock are committed, so npm or yarn both work. npm is shown below.

```bash
npm install
npm run dev       # Dev server at http://localhost:5173
```

### Scripts

| Command | Purpose |
| ------- | ------- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over js and jsx files, zero warnings allowed |

## Project structure

```
├── index.html        # Vite entry point
├── recoil.jsx        # Recoil state setup
├── sitemap.xml
├── public/           # Static assets copied as-is
└── src/
    ├── assets/       # Images
    ├── Componets/    # Shared components, including the Loading screen
    ├── pages/        # Page sections
    ├── Data.json     # Content data
    └── App.jsx       # Loading gate plus main layout
```

The intro loading screen runs for about 5.6 seconds; the timeout lives in `src/App.jsx`.

## License

MIT. See [LICENSE](LICENSE).
