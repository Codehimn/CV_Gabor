# Agent / AI Assistant Notes

> This file contains important context for any AI assistant working on this project.

## Key Facts

- **Gabor currently lives in Medellín, Colombia** (NOT Berlin anymore).
- He has **11+ years of professional experience** (since 2010 at MADISA, then Yaxa, Conectsen, Zattoo, and Freelance).
- Work permit in EU: Yes.

## Asset Locations

- **Profile image**: `/public/images/profile/Gabor-Flandorffer-Profile.jpg`
- **Company logos**: `/public/images/logos/` — `zattoo.svg`, `yaxa.svg`, `conectsen.svg`, `freelancer.svg`, `madisa.svg`
- **All public assets** live under `/public/images/`

## Architecture

- The website supports **i18n (EN/ES)** via `src/i18n.ts` — all translatable text lives there.
- Components are in `src/components/` (Astro + React/TSX).
- The AI chatbot knowledge base is in `src/data/agent-knowledge.ts`.
- Skills data is defined directly in `src/components/Skills.astro` (not in i18n).
- Education/certifications data comes from `i18n.ts` → `Education.astro`.

## Contact Info

- **Email**: gabor285@gmail.com
- **Phone/WhatsApp**: +49 1789752993
- **Website**: gabor.flandorffer.com
