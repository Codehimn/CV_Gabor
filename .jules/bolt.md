# Bolt's Journal ⚡

<!-- Only critical learnings go here. Not a log. -->

## 2025-02-11 - [Lucide Wildcard Imports]
**Learning:** Wildcard imports for 'lucide-react' (`import * as Icons`) prevent tree-shaking and can bloat the bundle size significantly (e.g., from ~5KB to ~870KB for a single component).
**Action:** Always use specific named imports and a mapping constant if dynamic icon rendering is needed.
