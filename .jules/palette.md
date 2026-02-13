## 2026-02-11 - Horizontal Scroll Accessibility
**Learning:** Horizontal scroll containers often hide content from keyboard users if the items within aren't focusable. Simply setting `overflow` isn't enough; users need to be able to tab into the invisible items to bring them into view.
**Action:** Always add `tabIndex={0}` and `focus-visible` styles to cards in horizontal lists, even if they aren't strictly "interactive" links/buttons, to ensure keyboard navigation works for content discovery.

## 2026-02-13 - Mobile Menu Focus Leakage Prevention
**Learning:** Off-screen mobile menus (using `right: -100%`) still allow keyboard focus on their child elements. Using `visibility: hidden` and `pointer-events: none` on the container when closed is an effective way to prevent this without breaking transitions.
**Action:** Always pair off-screen positioning with `visibility: hidden` for closed mobile menus.
