# Phoebe & Ethan — Wedding Website

React + Tailwind starter for `phoebeandethan.com`

## Scripts

```bash
npm install
npm run dev     # start local dev server
npm run build   # build production assets
npm run preview # preview build locally
```

## Customise

- Replace text in `src/components/*`
- Swap `public/hero-illustration.svg` with your final artwork
- Update the WithJoy link in `src/components/RSVP.jsx` once it’s ready

## Deployment (GitHub Pages)

This project includes a GitHub Actions workflow that builds and deploys to the `gh-pages` branch on every push to `main`.

1. Create a new GitHub repository and push this project.
2. Ensure your repository has GitHub Pages set to source from the `gh-pages` branch.
3. The workflow uses the CNAME file to point to `phoebeandethan.com`.

DNS: create the following records with your domain registrar:
- `A` records pointing to: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Optional `AAAA` records for IPv6: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`

Then add a `CNAME` record for `www` → `phoebeandethan.github.io` if you plan to use the `www` subdomain. Otherwise the included CNAME file will set the apex to `phoebeandethan.com`.

## Notes

- If your repo is private, GitHub Pages will only publish if you have a paid plan. Public repos are free.
- If you prefer Netlify or Vercel, you can deploy without any changes.
