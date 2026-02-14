# Bolt's Journal ⚡

<!-- Only critical learnings go here. Not a log. -->

## 2025-02-11 - [Lucide Wildcard Imports]
**Learning:** Wildcard imports for 'lucide-react' (`import * as Icons`) prevent tree-shaking and can bloat the bundle size significantly (e.g., from ~5KB to ~870KB for a single component).
**Action:** Always use specific named imports and a mapping constant if dynamic icon rendering is needed.

## 2026-02-11 - [Scroll Loop DOM Queries]
**Learning:** Querying `.parallax-layer` with `querySelectorAll` inside every scroll animation frame in `Layout.astro` creates avoidable main-thread work.
**Action:** Cache frequently accessed node lists during setup (and refresh on route swaps), then reuse them inside the scroll loop.

## 2025-02-13 - [Layout Thrashing in High-Frequency Events]
**Learning:** Calling `getBoundingClientRect()` inside `mousemove` or `scroll` listeners causes "Layout Thrashing" as the browser is forced to recalculate positions on every frame.
**Action:** Use a `WeakMap` to cache element bounds on `mouseenter` or `mouseover` and reuse them during `mousemove`. Additionally, use event delegation for hover states to reduce listener count and memory overhead.

## 2026-02-11 - [Redundant Object Instantiation in i18n/Rendering Loops]
**Learning:** Re-calculating the current year or tenure using `new Date()` inside loops (like i18n translation loops or list mapping) creates unnecessary object garbage collection pressure and CPU work.
**Action:** Lift static or semi-static values (like `new Date()`) outside of loops or map functions and pass them as constants.
