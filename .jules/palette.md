## 2026-02-11 - Horizontal Scroll Accessibility
**Learning:** Horizontal scroll containers often hide content from keyboard users if the items within aren't focusable. Simply setting `overflow` isn't enough; users need to be able to tab into the invisible items to bring them into view.
**Action:** Always add `tabIndex={0}` and `focus-visible` styles to cards in horizontal lists, even if they aren't strictly "interactive" links/buttons, to ensure keyboard navigation works for content discovery.

## 2026-02-13 - Mobile Menu Focus Leakage Prevention
**Learning:** Off-screen mobile menus (using `right: -100%`) still allow keyboard focus on their child elements. Using `visibility: hidden` and `pointer-events: none` on the container when closed is an effective way to prevent this without breaking transitions.
**Action:** Always pair off-screen positioning with `visibility: hidden` for closed mobile menus.

## 2026-02-14 - Localized Accessibility Labels
**Learning:** In highly customized i18n systems (like this Astro/TypeScript implementation), standard `aria-label` attributes are often hardcoded and forgotten during translation. Extending the i18n system with `data-i18n-aria` ensures icon-only buttons and logos remain accessible in all languages.
**Action:** When implementing custom i18n logic, proactively include support for ARIA attributes and other non-text attributes (like `title` or `alt`) to prevent accessibility regressions during language switches.

## 2026-02-15 - Adaptive Platform Shortcuts
**Learning:** Hardcoding "⌘K" for search hints is exclusionary to Windows/Linux users who expect "Ctrl+K". Small touches like detecting the platform and updating the hint dynamically makes the UI feel native and polished for everyone.
**Action:** Use a simple `navigator.userAgent` check in client-side scripts to toggle between Mac (⌘) and non-Mac (Ctrl) symbols in shortcut hints.

## 2026-02-15 - Cross-Framework Communication Bridge
**Learning:** When using Astro with React islands, triggering shared UI (like a global Command Menu) from a static component (like a Navbar) requires a decoupled bridge. `CustomEvent` dispatched on the global object is a lightweight and performant way to handle this without complex state management.
**Action:** Use `window.dispatchEvent(new CustomEvent('...'))` to trigger actions in reactive components from static HTML/Astro components.
