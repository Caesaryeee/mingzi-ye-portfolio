# Portfolio Visual System

Last updated: 2026-06-30

## North Star

This portfolio should feel like an editorial video poster for a Boston-based video producer, shooter, editor, and content creator. It should read as young, kinetic, colorful, and professionally credible for U.S. job applications.

The site should not drift into SaaS, dashboard UI, generic architecture portfolio, glassmorphism, or black-and-white minimalism. The visual signature is a moving cutboard: bold compressed type, paper texture, colored production labels, rounded video media, timecodes, scan lines, project numbers, and playful MG-style transitions.

## Reference DNA

- Off-white paper background with subtle grain and grid texture.
- Charcoal ink instead of pure black.
- Blue, yellow, red, and green as controlled production accents.
- Large condensed display type for names, section titles, and project numbers.
- Clean sans-serif body copy and monospace timecodes, tags, counts, and technical labels.
- Pill tags and rounded media corners; avoid hard rectangular blocks unless they represent a deliberate film-strip or timeline element.
- One clear visual hero per section. Supporting labels, dotted grids, curved guide lines, and tape marks should reinforce the production-world language, not compete with the main content.

## Tokens

Current code source: `src/index.css`.

- Paper: `--paper #f4efe2`, `--paper-soft #fff9ea`, `--paper-warm #eadfc8`.
- Ink: `--ink #1b1a17`, `--ink-soft #2b2924`, `--muted #615d52`.
- Accents: `--blue #1756d6`, `--yellow #e4bd2b`, `--red #d94a37`, `--green #387a51`.
- Radius: small labels use `--radius-sm`; media and project strips use `--radius-md` or `--radius-lg`; buttons and tags use `--radius-pill`.
- Type: `Bebas Neue` for display, `Inter` for body, `IBM Plex Mono` for technical labels.

Do not add another dominant accent color without replacing one of the four existing accents. Do not make a full section monochrome unless it is being used as a deliberate contrast beat.

## Hero Rules

- Desktop hero should behave like an editorial poster stage: strong left-side title, one dominant right-side media card, and a limited set of supporting media cards.
- Keep the right collage inside a stable stage. Supporting cards may overlap, but they should not crowd the page edge or obscure the dominant card.
- Use one dominant image/video and no more than three prominent supporting overlays in the first viewport.
- Timecodes, guide lines, dotted grids, tape marks, and control widgets should read as production interface details.
- Hero copy and media must not fight for equal dominance. The title and dominant media card are the anchors; everything else is secondary.

## Work Browser Rules

- There is one work section only. Do not reintroduce a separate archive section.
- `Featured` shows one strongest representative from each category.
- Single-category views show all pieces in that category with the same visual language.
- Project numbers should be lively and colorful. Avoid long runs of black number panels in `Featured`.
- Category switching should feel like MG animation: quick title movement, colored sweep line, staggered project entry, and small count feedback.
- On mobile, every category must be visibly discoverable without relying on a hidden horizontal scroll rail.
- Respect `prefers-reduced-motion`; reduced motion users should get stable content changes without decorative movement.

## Documentation Practice

External practice references:

- Zeroheight describes design system documentation as a single source of truth for components, tokens, and guidance: https://zeroheight.com/documentation/
- W3C Design Tokens Community Group describes design tokens as a standards-based way to share stylistic design-system decisions across tools: https://www.w3.org/community/design-tokens/
- Storybook documents UI components, pages, testing, and docs together in an isolated frontend workshop: https://storybook.js.org/docs

For this site, the lightweight version is this Markdown file plus screenshots in `qa/`. Each visual change should update the change log below with the intent, affected areas, and verification evidence.

## Change Log

### 2026-06-30 - Hero stage and colorful work numbering

- Intent: fix desktop hero clutter and restore the lively color rhythm from the reference image.
- Areas: desktop hero collage, work browser accents, project number panels, category transition polish.
- Rules added: hero must have one dominant media anchor; `Featured` project numbers must use controlled blue/yellow/green/red rhythm instead of repeated black panels.
- Verification evidence: `qa/visual-system-2026-06-30/desktop-hero.png`, `desktop-work.png`, `desktop-full.png`, `mobile-hero.png`, `mobile-full.png`.
- QA status: local category click QA passed for all 8 filters; `npm run build` passed; first-screen MP4 requests remained controlled at 4 desktop and 3 mobile.

### 2026-06-30 - Mobile category discoverability

- Intent: prevent mobile visitors from thinking only the first three work categories exist.
- Areas: mobile work browser category selector.
- Rule added: mobile category controls should use a visible multi-row layout instead of a hidden horizontal scroll rail.
- Verification evidence: `qa/mobile-category-2026-06-30/mobile-work.png`, `mobile-full.png`.
- QA status: 390px mobile check passed with 8 visible category buttons before the first project card, no horizontal overflow, no console errors, and no CJK DOM text.

### 2026-06-30 - PChouse architecture sample expansion

- Intent: add all top-level PChouse interior samples to the Architecture category and fix the incorrect Suzhou preview source.
- Areas: Architecture work browser entries, PChouse web clips, JPG posters, source filename mapping.
- Asset record: `docs/pchouse-architecture-assets.md`.
- Rule reinforced: portfolio media assets need a traceable source file, English asset name, selected start time, and QA evidence.
- QA status: Architecture category passed at 9 cards on desktop and mobile; all 8 generated PChouse clips and posters exist; each generated web clip is 5.5 seconds.
