# The Northern Beaches Plumber

Production-ready Astro 5 static website for **The Northern Beaches Plumber**.

## Local development

Requires Node.js 20 or later.

```powershell
npm install
npm run dev
```

## Validation

```powershell
npm run build
npm run check:site
npm run check:performance
git diff --check
```

The production build is written to `dist`.

## Deployment

The intended production hostname is `https://thenorthenbeachesplumber.com.au`. Build with `npm run build` and deploy the Worker with `npx wrangler deploy`.

### Automatic Cloudflare deployment

The GitHub Actions workflow at `.github/workflows/deploy-cloudflare.yml` builds, validates and deploys the site whenever a commit is pushed to `main`. It can also be run manually from the repository's **Actions** tab.

Before the first automated deployment, create a Cloudflare API token with permission to edit Workers scripts, then add it to the GitHub repository under **Settings → Secrets and variables → Actions → New repository secret** using this exact name:

`CLOUDFLARE_API_TOKEN`

The Cloudflare account ID and Worker name are already defined in `wrangler.jsonc`; do not commit the API token to the repository.

Cloudflare Workers static assets accept only relative paths in `_redirects`, so the `www` hostname redirect must be configured at the zone level rather than shipped as an asset rule:

1. Add both `thenorthenbeachesplumber.com.au` and `www.thenorthenbeachesplumber.com.au` as custom domains.
2. In **Rules → Redirect Rules**, create a dynamic redirect matching hostname `www.thenorthenbeachesplumber.com.au`.
3. Redirect to `concat("https://thenorthenbeachesplumber.com.au", http.request.uri.path)` with status `301` and preserve the query string.

Do not enable indexing until the apex domain, HTTPS certificate and `www` redirect have been verified.


