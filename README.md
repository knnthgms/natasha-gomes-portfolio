# Natasha Gomes Portfolio

Personal portfolio website for Natasha Gomes, focused on product marketing,
go-to-market strategy, lifecycle marketing, and future growth roles.

This repository is maintained by Kenneth Gomes and is intended to be published
on GitHub and hosted at [www.natashagomes.com](https://www.natashagomes.com).

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- PostCSS
- styled-jsx
- next-seo
- ESLint
- Prettier
- Netlify static hosting

## Project Structure

- `src/pages`: Next.js pages and routes
- `src/content/siteContent.ts`: editable portfolio copy, navigation, SEO copy,
  role data, project data, and contact links
- `src/theme`: component-level theme primitives and visual styles
- `src/layout`: shared metadata and document helpers
- `src/styles/global.css`: Tailwind setup and document-level base styles
- `public`: favicons, robots.txt, and sitemap.xml

## Local Development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

## Content Updates

Most copy changes should happen in:

```text
src/content/siteContent.ts
```

Lists such as navigation items, projects, experience roles, profile links, and
homepage cards are stored as arrays so they can be updated without editing page
components.

## Quality Checks

```bash
npm run check-types
npm run lint
npm run build
```

## Production Build

```bash
npm run build-prod
```

Netlify is configured with:

```toml
[build]
  publish = "out"
  command = "npm run build-prod"
```

## SEO

The site includes canonical URLs, Open Graph metadata, Person structured data,
`robots.txt`, and `sitemap.xml` for `https://www.natashagomes.com`.
