# ShareOn Learning

An AI-powered enterprise learning platform for ambitious creators, founders, coaches, and professionals building their personal brand.

---

## Overview

ShareOn Learning is a sleek, dark-themed SaaS learning experience designed for modern creators who take personal branding seriously. It combines AI-powered lessons, practical tutorials, and creator-focused strategies in a premium, futuristic interface.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Routing | Wouter |
| UI Components | Radix UI + shadcn/ui |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Data Fetching | TanStack React Query |

---

## Design System

The page uses a **Black + Cool Blue** theme built for a futuristic, intelligent SaaS feel.

| Token | Value | Usage |
|---|---|---|
| Primary Background | `#0A0A0A` | Main page background |
| Secondary Background | `#111827` | Section backgrounds |
| Card Background | `#161B22` | All card surfaces |
| Elevated Surface | `#1E293B` | Dropdowns, modals |
| Primary Accent | `#3B82F6` | Buttons, highlights, icons |
| Secondary Accent | `#60A5FA` | Borders, secondary elements |
| Bright Accent | `#38BDF8` | Active states |
| Primary Text | `#FFFFFF` | Headings |
| Secondary Text | `#CBD5E1` | Body copy |
| Muted Text | `#94A3B8` | Labels, metadata |

---

## Page Sections

1. **Navbar** — Sticky with backdrop blur, search, notifications, avatar, and Upgrade button
2. **Hero** — Full-width dark gradient with blue glow orbs, headline with blue highlights, dual CTAs, and floating dashboard mockups
3. **Progress Dashboard** — Animated stat counters (lessons, streak, certificates, badges) with SVG circular progress indicators
4. **Featured Courses** — Course cards with thumbnails, progress bars, instructors, and hover glow effects
5. **Learning Paths** — Role selector cards (Founder, Coach, Consultant, Agency Manager, Educator, Creator) with interactive state
6. **Resource Center** — Dark search input, filterable chip tabs, and resource cards
7. **Certifications** — Prestigious certification cards with shine animations and LinkedIn sharing
8. **AI Learning Assistant** — Floating chat widget with suggested prompts (bottom-right)
9. **Final CTA** — Blue gradient section with trust statement
10. **Footer** — Navigation links and social icons

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── DashboardStats.tsx
│   │   ├── FeaturedCourses.tsx
│   │   ├── LearningPaths.tsx
│   │   ├── ResourceCenter.tsx
│   │   ├── Certifications.tsx
│   │   └── FinalCTA.tsx
│   └── ui/
│       ├── AIAssistant.tsx
│       └── ... (shadcn/ui components)
├── pages/
│   └── Home.tsx
├── hooks/
├── lib/
├── App.tsx
├── main.tsx
└── index.css
```

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm --filter @workspace/shareon-learning run dev

# Type check
pnpm --filter @workspace/shareon-learning run typecheck

# Build for production
pnpm --filter @workspace/shareon-learning run build
```

---

## Key Features

- **Dark mode by default** — `dark` class applied to `<html>` on mount
- **Scroll animations** — Framer Motion `whileInView` reveals on all sections
- **Animated counters** — Stats count up from 0 on component mount
- **Interactive AI chat** — Floating assistant toggles open with suggested prompts
- **Hover effects** — Card lift + blue border glow on all interactive surfaces (300ms transition)
- **Fully responsive** — Mobile, tablet, and desktop layouts

---

## Environment

No environment variables required. This is a fully client-side static application.

---

## License

Private — ShareOn Learning platform.
