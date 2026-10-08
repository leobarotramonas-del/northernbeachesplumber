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

The intended production hostname is `https://thenorthenbeachesplumber.com.au`.

This repository follows the same Git-connected Cloudflare deployment process as the Ryde project:

1. Edit and validate files locally.
2. Commit the changes with Git.
3. Push the commit with `git push origin main`.
4. Cloudflare detects the new commit on `main`.
5. Cloudflare builds and deploys the website automatically.

A local commit does not deploy the website. Deployment begins only after the commit is pushed to `origin/main`. Do not run `wrangler deploy` locally and do not add a separate GitHub Actions deployment workflow, because Cloudflare owns the build and deployment process.

Automatic production deployments can be managed in **Cloudflare → Workers & Pages → Northern Beaches project → Settings → Builds → Branch control**. The production branch should be `main`.

Cloudflare Workers static assets accept only relative paths in `_redirects`, so the `www` hostname redirect must be configured at the zone level rather than shipped as an asset rule:

1. Add both `thenorthenbeachesplumber.com.au` and `www.thenorthenbeachesplumber.com.au` as custom domains.
2. In **Rules → Redirect Rules**, create a dynamic redirect matching hostname `www.thenorthenbeachesplumber.com.au`.
3. Redirect to `concat("https://thenorthenbeachesplumber.com.au", http.request.uri.path)` with status `301` and preserve the query string.

Do not enable indexing until the apex domain, HTTPS certificate and `www` redirect have been verified.


