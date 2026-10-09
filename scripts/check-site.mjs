import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
if (!fs.existsSync(root)) throw new Error('dist is missing. Run npm run build first.');
const htmlFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}
walk(root);
const errors = [];
const canonicalBase = 'https://thenorthenbeachesplumber.com.au';
const pages = new Map();
const incomingLinks = new Map();
const titleOwners = new Map();
const descriptionOwners = new Map();
const strip = (value) => value.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const attr = (html, tag, name) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*\\b${name}=["']([^"']*)["'][^>]*>`, 'gi'))].map((match) => match[1]);

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(root, file).replaceAll('\\', '/');
  const urlPath = rel === 'index.html' ? '/' : rel === '404.html' ? '/404/' : `/${rel.replace(/index\.html$/, '')}`;
  pages.set(urlPath, html);
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '';
  const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1] ?? '';
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/i)?.[1] ?? '';
  const expected = new URL(urlPath, canonicalBase).toString();
  const is404 = urlPath === '/404/';
  const titlePaths = titleOwners.get(title) ?? [];
  titlePaths.push(urlPath);
  titleOwners.set(title, titlePaths);
  const descriptionPaths = descriptionOwners.get(description) ?? [];
  descriptionPaths.push(urlPath);
  descriptionOwners.set(description, descriptionPaths);
  if (title.length < 30 || title.length > 60) errors.push(`${urlPath}: title length ${title.length}`);
  if (description.length < 100 || description.length > 150) errors.push(`${urlPath}: description length ${description.length}`);
  if (canonical !== expected) errors.push(`${urlPath}: canonical ${canonical} should be ${expected}`);
  for (const lang of ['en-AU', 'x-default']) if (!html.includes(`hreflang="${lang}" href="${expected}"`)) errors.push(`${urlPath}: missing self-referencing ${lang}`);
  if (!/<html lang="en-AU">/i.test(html)) errors.push(`${urlPath}: missing en-AU language`);
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (h1Count !== 1) errors.push(`${urlPath}: expected one H1, found ${h1Count}`);
  const imgs = [...html.matchAll(/<img\b([^>]*)>/gi)];
  for (const image of imgs) {
    const attrs = image[1];
    if (!/\balt="[^"]+"/i.test(attrs) && !/\balt=""/i.test(attrs)) errors.push(`${urlPath}: image without alt`);
    if (!/\bwidth="\d+"/i.test(attrs) || !/\bheight="\d+"/i.test(attrs)) errors.push(`${urlPath}: image without dimensions`);
  }
  const sources = attr(html, 'img', 'src').filter((src) => !src.startsWith('data:'));
  if (new Set(sources).size !== sources.length) errors.push(`${urlPath}: duplicate content image`);
  if (/pages\.dev|workers\.dev|localhost|127\.0\.0\.1/i.test(html)) errors.push(`${urlPath}: preview URL leaked into HTML`);
  if (!html.includes('"@type":"Plumber"') || !html.includes('"@type":"WebSite"') || !html.includes('"@type":"WebPage"')) errors.push(`${urlPath}: missing required schema node`);
  if (!html.includes(`<meta name="author" content="Antons Enterprises Pty Ltd">`)) errors.push(`${urlPath}: missing author metadata`);
  for (const property of ['og:title', 'og:description', 'og:url', 'og:image', 'og:image:alt']) if (!html.includes(`property="${property}"`)) errors.push(`${urlPath}: missing ${property}`);
  for (const name of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt']) if (!html.includes(`name="${name}"`)) errors.push(`${urlPath}: missing ${name}`);
  if (is404 && !html.includes('noindex,nofollow')) errors.push('/404/: missing noindex,nofollow');
  const visible = strip(html).toLowerCase();
  for (const us of [' color ', ' neighborhood ', ' license #', ' organized ', ' center ']) if (visible.includes(us)) errors.push(`${urlPath}: possible US spelling ${us.trim()}`);
}

for (const [title, owners] of titleOwners) if (title && owners.length > 1) errors.push(`duplicate title on ${owners.join(', ')}: ${title}`);
for (const [description, owners] of descriptionOwners) if (description && owners.length > 1) errors.push(`duplicate description on ${owners.join(', ')}`);

for (const [urlPath, html] of pages) {
  for (const href of attr(html, 'a', 'href')) {
    if (href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || /^https?:\/\//.test(href)) continue;
    const clean = href.split('#')[0].split('?')[0];
    if (!clean) continue;
    if (!clean.endsWith('/') && !clean.includes('.')) errors.push(`${urlPath}: internal link missing trailing slash ${href}`);
    if (clean.endsWith('/') && !pages.has(clean)) errors.push(`${urlPath}: broken internal link ${href}`);
    if (clean.endsWith('/') && pages.has(clean) && clean !== urlPath) {
      const sources = incomingLinks.get(clean) ?? new Set();
      sources.add(urlPath);
      incomingLinks.set(clean, sources);
    }
  }
}

for (const [urlPath, html] of pages) {
  if (urlPath === '/' || urlPath === '/404/' || html.includes('noindex,nofollow')) continue;
  const incoming = incomingLinks.get(urlPath)?.size ?? 0;
  if (incoming < 1) errors.push(`${urlPath}: orphan page with no incoming internal link`);
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const pageSitemap = fs.readFileSync(path.join(root, 'page-sitemap.xml'), 'utf8');
const postSitemap = fs.readFileSync(path.join(root, 'post-sitemap.xml'), 'utf8');
const rootSitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const pageSitemapUrls = [...pageSitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const postSitemapUrls = [...postSitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
for (const urlPath of pages.keys()) {
  if (urlPath === '/404/') continue;
  const absolute = new URL(urlPath, canonicalBase).toString();
  const count = rootSitemapUrls.filter((url) => url === absolute).length;
  if (count !== 1) errors.push(`${urlPath}: root sitemap count ${count}`);
  const isPost = urlPath.startsWith('/blog/') && urlPath !== '/blog/';
  if (isPost && !postSitemapUrls.includes(absolute)) errors.push(`${urlPath}: missing from post sitemap`);
  if (!isPost && !pageSitemapUrls.includes(absolute)) errors.push(`${urlPath}: missing from page sitemap`);
}
if (rootSitemapUrls.some((url) => url.includes('/404/'))) errors.push('root sitemap: 404 must be excluded');
const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
for (const required of ['User-agent: AhrefsSiteAudit', 'User-agent: AhrefsBot', 'Sitemap: https://thenorthenbeachesplumber.com.au/sitemap.xml']) if (!robots.includes(required)) errors.push(`robots.txt: missing ${required}`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Site check passed: ${htmlFiles.length} HTML pages, sitemap and robots verified.`);


