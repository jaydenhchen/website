# Jayden Chen — Nexus Field

Scroll-driven 3D morphing sculpture, WebGL liquid type, and magnetic headlines. Static build, runs on GitHub Pages.

## Local

```bash
npm install
npm run dev
```

Production build writes to `docs/` (GitHub Pages folder):

```bash
npm run build
npm run preview
```

## GitHub Pages

This repo is configured two ways; either works.

### GitHub Actions (recommended)

1. Push `main`.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` builds and deploys `docs/`.

### Branch folder

1. Run `npm run build`.
2. Commit the generated `docs/` folder (includes `.nojekyll`).
3. Repo **Settings → Pages → Source: Deploy from a branch → `main` / `docs`**.

`vite.config.js` sets `base: './'` so assets resolve on both `username.github.io` and `username.github.io/repo-name/`.
