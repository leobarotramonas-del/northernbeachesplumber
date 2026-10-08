# Design System

## Direction

The site uses an established trade-service visual language: near-black surfaces, one electric-blue accent, condensed display type and documentary job photography. The interface is direct and practical rather than decorative. Real team, vehicle and worksite media provide the brand character.

## Foundations

- Display type: Saira Extra Condensed, weight 700.
- Body type: Barlow, weights 400, 600 and 700.
- Backgrounds: `#090B0F`, `#11151C` and `#191F29`.
- Text: `#F5F7FA` with `#BAC5D4` for supporting copy.
- Accent: `#1463DF`; dark-background links use `#78B5FF`.
- Availability status uses `#22C55E` as a tightly scoped semantic exception to the blue accent.
- Borders: `#303B4B`.
- Cards use a 14px radius; controls use an 8px radius; the persistent mobile call action is pill-shaped.
- Section separation is compact, while internal padding preserves readable rhythm.

## Layout

The homepage pairs a left-aligned value proposition with the supplied work video. Directory content uses responsive grids. Service and suburb pages share a split hero with text on the left and a relevant real photograph on the right, collapsing into a single column on smaller screens.

Body copy stays within comfortable line lengths. Desktop content is capped at 75rem, with a wider 88rem frame reserved for the header and homepage hero. Mobile layouts use full-width calls to action and a persistent call bar with enough page padding to avoid hiding footer content.

## Components

- Primary buttons use the blue accent and white text.
- Secondary buttons use a transparent dark surface with a visible light border.
- Service cards pair landscape media with category, title, practical summary and a descriptive link.
- Area cards prioritise suburb and postcode without implying a local office.
- FAQs use native disclosure elements for keyboard and screen-reader support.
- Maps show an attributed OpenStreetMap preview before an interactive Google map is explicitly loaded.
- Focus indicators use a high-contrast blue outline with offset.

## Media and Motion

Only supplied, authorised photographs and video are used. Responsive WebP variants are generated at 720px and up to 1280px wide. Below-the-fold images are lazy loaded. The hero poster is preloaded while the video source is attached after initial rendering. Playback can be paused and autoplay is disabled for reduced-motion users.

Motion is limited to short hover transforms, button feedback, navigation underlines and native smooth scrolling. Layout-affecting properties are not animated.

## Content Rules

Visible copy uses “Northern Beaches”; canonical URLs preserve the supplied `thenorthenbeachesplumber.com.au` spelling. Claims avoid invented response times, pricing, locations, review scores, equipment or experience. User-confirmed 24/7 phone availability may be shown as a compact green status. Suggested suburb coverage is explicitly marked for business confirmation.
