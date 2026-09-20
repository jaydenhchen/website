# Jayden Chen — Nexus Field

A scroll-driven 3D field: seven morphing states, liquid WebGL type, shockwaves, and an optional sonic drone. Static build for GitHub Pages.

## Interact

- **Scroll** — the sculpture moves sphere → torus → knot → helix → crystal → Möbius → galaxy
- **Hover the name** — displacement, chromatic split, scanline glitch
- **Hover headlines** — letters shear toward the pointer
- **Click** — shockwave through the mesh
- **Drag** — orbit the field
- **Sonic** — generative drone tuned to scroll (click to enable)

## Local

```bash
npm install
npm run dev
```

Production build writes to `docs/`:

```bash
npm run build
npm run preview
```

## GitHub Pages

`vite.config.js` uses `base: './'`. Deploy from `main` / `docs`, or use `.github/workflows/pages.yml`.
