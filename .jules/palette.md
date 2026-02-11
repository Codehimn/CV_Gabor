## 2026-02-11 - Horizontal Scroll Accessibility
**Learning:** Horizontal scroll containers often hide content from keyboard users if the items within aren't focusable. Simply setting `overflow` isn't enough; users need to be able to tab into the invisible items to bring them into view.
**Action:** Always add `tabIndex={0}` and `focus-visible` styles to cards in horizontal lists, even if they aren't strictly "interactive" links/buttons, to ensure keyboard navigation works for content discovery.
