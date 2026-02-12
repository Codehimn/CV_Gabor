# Bolt's Journal ⚡

<!-- Only critical learnings go here. Not a log. -->

## 2025-02-11 - [Lucide Wildcard Imports]
**Learning:** Wildcard imports for 'lucide-react' (`import * as Icons`) prevent tree-shaking and can bloat the bundle size significantly (e.g., from ~5KB to ~870KB for a single component).
**Action:** Always use specific named imports and a mapping constant if dynamic icon rendering is needed.

## 2026-02-11 - [Scroll Loop DOM Queries]
**Learning:** Querying `.parallax-layer` with `querySelectorAll` inside every scroll animation frame in `Layout.astro` creates avoidable main-thread work.
**Action:** Cache frequently accessed node lists during setup (and refresh on route swaps), then reuse them inside the scroll loop.

## 2025-05-14 - [Layout Thrashing in Mouse Events]
**Learning:** Calling `getBoundingClientRect()` inside a `mousemove` handler (like in magnetic effects) triggers forced synchronous layouts (layout thrashing), which can cause stuttering.
**Action:** Cache the element's bounding rectangle on `mouseenter` and only update it if necessary (e.g., on scroll or resize).

## 2025-05-14 - [Event Listener Overhead]
**Learning:** Binding individual `mouseenter`/`mouseleave` listeners to every interactive element (links, buttons) for custom cursor effects increases memory usage and requires manual cleanup/re-binding on page transitions.
**Action:** Use event delegation with a single listener on `document` and `event.target.closest()` to handle hover states efficiently across the entire application.
