# Sudhir Kadam Portfolio

React + Vite portfolio. `main` is the default branch. Work happens on `myportfolio`, then that branch is merged into `main`.

- **CI** builds on every push to `myportfolio`
- **CD** builds and deploys to GitHub Pages after a merge to `main`

## GitHub Pages (required)

Free GitHub Pages only works on a **public** repository.

1. **Settings → General → Danger Zone → Change repository visibility → Public**
2. After the first successful deploy, **Settings → Pages → Branch** = `gh-pages` / `/ (root)`
3. Site URL: https://sudhir1507.github.io/sudhir_kadam_portfolio/

Production EmailJS keys live in `.env.production` (these are public client IDs used by the browser SDK). Local overrides stay in `.env`, which is gitignored.

## Local setup

```bash
npm install
cp .env.example .env
```

Fill EmailJS values in `.env`, then:

```bash
npm run dev
```

For local preview keep `VITE_BASE=/` and `VITE_SITE_URL=http://localhost:5173`.
