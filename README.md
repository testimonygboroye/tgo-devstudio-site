# TGO DevStudio — Public Site

The public marketing/portfolio site for TGO DevStudio, the technology sub-brand of TGO.

**Live site:** https://testimonygboroye.github.io/tgo-devstudio-site/

## Stack

- **Astro 6** (pinned — Astro 7+ uses Rolldown, which lacks 32-bit ARM builds and breaks on this device's Termux environment)
- **Tailwind CSS v3** (pinned — Tailwind v4 depends on Lightning CSS, which also lacks 32-bit ARM builds)
- Content collections (Markdown) for portfolio case studies
- Deployed via GitHub Actions → GitHub Pages

## Project structure

src/
├── components/     # Nav, Footer, ProjectCard
├── content/
│   └── projects/   # Markdown case studies (content collection)
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── portfolio.astro
│   ├── portfolio/[slug].astro
│   └── contact.astro
└── styles/
    └── global.css  # brand color tokens (CSS variables)

## Environment variables

Create a `.env` file locally (gitignored):

PUBLIC_API_URL=http://localhost:3000

In production, this is set inside `.github/workflows/deploy.yml` (pointing at the deployed Render backend).

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Local dev server at `localhost:4321/tgo-devstudio-site` |
| `npm run build` | Production build to `./dist/` |

## Related repo

Backend API: https://github.com/testimonygboroye/tgo-devstudio-backend
