# Portfolio — Project Context for Claude

## Project Overview
Personal portfolio website for Vladyslav Bakumenko — a Frontend Developer based in Berlin, Germany.
Built as a bilingual (EN/DE) single-page React application.

**Live site:** https://portfolio-vlad-bakumenko-s-projects.vercel.app
**GitHub:** https://github.com/Vlad-Bakumenko/portfolio (public)

---

## Tech Stack
- **React 18** + **Vite**
- **Tailwind CSS** — all styling, no CSS modules
- **Framer Motion** — all animations
- **React Icons** — icon library
- **GitHub Actions** — CI (lint + build on every PR/push to main)
- **Vercel** — CD (auto-deploys on merge to main)

---

## Architecture Decisions

### Language / i18n
- Bilingual EN/DE toggle managed via React Context (`src/context/LanguageContext.jsx`)
- Custom hook: `useLanguage()` — exposes `{ language, setLanguage, t }`
- `t(en, de)` helper resolves the correct string based on current language
- `t` is memoized with `useCallback`
- `document.documentElement.lang` updates via `useEffect` on language change
- All bilingual content stored as `{ en: "...", de: "..." }` objects in `src/constants/index.js`

### Data
- All content lives in `src/constants/index.js` — no hardcoded strings in components
- `EXPERIENCES` and `PROJECTS` arrays have stable `id` fields used as React `key` props
- `SOCIAL_LINKS` exported from constants (LinkedIn, GitHub URLs)
- `TECH_ICONS` array in `Technologies.jsx` — data-driven rendering, no repeated JSX blocks

### Animations
- All Framer Motion variants defined at **module scope** (never inside component render)
- Named variants: `headingVariants`, `slideInFromLeft`, `slideInFromRight` — reused across components
- `iconVariants(duration)` factory function in `Technologies.jsx`

---

## Project Structure
```
src/
├── assets/           # Images (profile, about, project screenshots, logo)
├── components/
│   ├── Navbar.jsx    # Language toggle, LinkedIn/GitHub links
│   ├── Hero.jsx      # Name, role, intro paragraph, profile photo
│   ├── About.jsx     # About text + image
│   ├── Technologies.jsx  # Animated tech icons (data-driven via TECH_ICONS)
│   ├── Experience.jsx    # Work experience mapped from EXPERIENCES
│   ├── Projects.jsx      # Project cards mapped from PROJECTS
│   └── Contact.jsx       # Address + email
├── context/
│   └── LanguageContext.jsx  # createContext, LanguageProvider, useLanguage hook
├── constants/
│   └── index.js      # All content: HERO_CONTENT, ABOUT_TEXT, EXPERIENCES, PROJECTS, CONTACT, SOCIAL_LINKS
├── App.jsx           # Root — wraps everything in LanguageProvider
├── main.jsx
└── index.css         # Tailwind directives + Inter font + .selected class
```

---

## Current State & Quality
- **Grade: 9/10** — Senior level code quality
- All PRs merged to main, deployed and live
- CI passing (ESLint + Vite build)

### Known remaining minor issues
1. `About.jsx` — `alt="about"` on image, should be descriptive (e.g. the person's name)
2. `Technologies.jsx` heading uses inline Framer Motion props instead of named variants (minor inconsistency)
3. No React error boundary

---

## Git Workflow
- Branch per feature, PRs to `main`
- Branch naming convention used so far:
  - `fix/security-and-cleanup`
  - `refactor/language-context`
  - `chore/ci-cd`
  - `refactor/code-quality`
  - `refactor/technologies-section`
- Main branch is protected: CI must pass before merge

## Vercel
- Team: `team_abKhg6TVKjhhFlsvogXHnDjF`
- Project ID: `prj_jzIGgytMYl5w7mAHPkewo1CYdHHM`
- Auto-deploys on push/merge to `main`
- Preview deployments on every PR branch

---

## Owner
- **Name:** Vladyslav Bakumenko
- **Email:** bakumenkovladyslav@gmail.com
- **Location:** Berlin, Germany
- **Current role:** Frontend Developer at Nosto GmbH (2024 - Present)
