# Sudhir Kadam Portfolio

React + Vite portfolio. Live deploy is GitHub Pages from the `myportfolio` branch.

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
