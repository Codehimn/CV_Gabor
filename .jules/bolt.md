# Bolt's Journal ⚡

<!-- Only critical learnings go here. Not a log. -->

## 2026-02-11 - [Lucide-react Wildcard Import Bottleneck]
**Learning:** Using `import * as LucideIcons from "lucide-react"` combined with dynamic access like `(LucideIcons as any)[name]` prevents effective tree-shaking in Vite/Astro, causing the entire icon library (~900KB) to be included in the component chunk.
**Action:** Replace wildcard imports with specific named imports and a mapping object (`ICON_MAP`) to explicitly list supported icons while maintaining dynamic lookup capability.
