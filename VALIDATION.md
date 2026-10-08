# Validation Report

Validated on 8 October 2026.

## Automated Checks

- `npm run build`: passed with 0 errors, 0 warnings and 0 hints.
- `npm run check:site`: passed for 29 generated HTML pages, internal links, homepage reachability, robots and sitemaps.
- `npm run check:performance`: passed for responsive-image budgets, deferred video loading, poster priority and explicit media dimensions.
- No published blog posts are included; the draft template remains excluded from routes and sitemaps.
- Production output contains only optimized WebP photographs and the supplied MP4 video.

## Visual Review

- Homepage reviewed at 1440 × 1000 and 390 × 844.
- A service page was reviewed at mobile width.
- A suburb page was reviewed at desktop width.
- Split heroes, navigation, media cropping, cards, calls to action and the persistent mobile call bar render without horizontal overflow or overlapping primary content.
- Deferred images were confirmed to load when their sections enter the viewport.

## Content and Publishing Notes

- Phone links use `tel:+61493824176`.
- The canonical host is `https://thenorthenbeachesplumber.com.au` and `www` redirects preserve paths.
- The operator and licence are shown without adding “By Antons” to the site brand.
- Suburb coverage, business details and review-source suitability should be confirmed by the business before production publishing.
- Live HTTP/HTTPS, certificate, redirect and public-access behaviour require verification after deployment. The site has not been published.
