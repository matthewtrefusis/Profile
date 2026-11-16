# Matthew Trefusis Portfolio

The personal portfolio website for [Matthew Trefusis](https://matthewtrefusis.com/),
a software engineer and Computer Science student at the University of Reading.
It showcases experience, selected projects, technical skills, and ways to get in
touch.

## Built with

- React
- Vite
- Tailwind CSS
- Lucide React
- Cloudflare Workers and static assets

## Getting started

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will start a local development server with hot module replacement.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Build and preview the production site locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and deploy to Cloudflare |

## Project structure

```text
public/              Static images and icons
src/
  components/        Reusable UI components
  layout/            Site-wide layout components
  sections/          Portfolio page sections
  App.jsx            Application root
  index.css          Global styles
  main.jsx           Client entry point
index.html           Document metadata and application mount point
wrangler.jsonc       Cloudflare deployment configuration
```

## Deployment

The site is configured for Cloudflare Workers through
[`wrangler.jsonc`](./wrangler.jsonc). Authenticate Wrangler with the
appropriate Cloudflare account, then run:

```bash
npm run deploy
```

The production build is generated in `dist/client` and served as the
application's static asset directory.
