## 2026-02-11 - Horizontal Scroll Accessibility
**Learning:** Horizontal scroll containers often hide content from keyboard users if the items within aren't focusable. Simply setting `overflow` isn't enough; users need to be able to tab into the invisible items to bring them into view.
**Action:** Always add `tabIndex={0}` and `focus-visible` styles to cards in horizontal lists, even if they aren't strictly "interactive" links/buttons, to ensure keyboard navigation works for content discovery.

## 2026-02-12 - Mobile Menu Focus Leakage
**Learning:** Off-screen mobile menus (e.g., using `transform` or `right: -100%`) are still reachable via keyboard TAB if not explicitly hidden. This creates a confusing experience where users focus on invisible elements.
**Action:** Use `visibility: hidden` and `pointer-events: none` on closed mobile menus to ensure they are removed from the tab order and interaction tree until opened. Pair this with `aria-expanded` on the toggle button.
