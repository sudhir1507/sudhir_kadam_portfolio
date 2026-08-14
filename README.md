# Sudhir Kadam Portfolio

React + Vite portfolio. `main` is the default branch. Work happens on `myportfolio`, then that branch is merged into `main`.

CI builds on `myportfolio`. CD deploys GitHub Pages only after a merge to `main`.

Enable Pages: **Settings → Pages → Source → GitHub Actions**.

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

## GitHub Actions secrets

Add these repository secrets so the contact form works in production:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Enable **Settings → Pages → Source: GitHub Actions**.
