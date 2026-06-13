# ShareOn Learning

An AI-first enterprise learning platform built for ambitious creators and professionals. Features a premium black + cool blue design inspired by the aesthetics of OpenAI, Linear, Vercel, and Stripe.

---

## Overview

ShareOn Learning is a fully responsive, single-page React application that serves as the learning hub for the ShareOn platform. It provides course discovery, role-based learning paths, progress tracking, AI-assisted guidance, and certification management — all wrapped in a sleek dark UI.

---

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** Wouter

---

## Features

- **Sticky Navbar** — backdrop blur, center navigation, search, notifications, and Upgrade CTA
- **Hero Section** — animated headline with blue gradient highlights and a floating dashboard mockup
- **Featured Courses** — course cards with progress bars, instructor info, and duration badges
- **Learning Paths** — role-based path selector (Founder, Coach, Consultant, Agency Manager, Educator, Creator)
- **Progress Dashboard** — animated stat counters with circular progress indicators
- **Resource Center** — searchable, filterable resource grid
- **AI Learning Assistant** — mock chat interface with suggested prompts
- **Certifications** — achievement cards with shimmer animations and LinkedIn sharing
- **Final CTA** — high-impact closing section
- **Floating Chatbot** — fixed bottom-right AI assistant button

---

## Project Structure

```
artifacts/shareon-learning/
├── src/
│   ├── components/
│   │   └── learning/
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── FeaturedCourses.tsx
│   │       ├── LearningPaths.tsx
│   │       ├── ProgressDashboard.tsx
│   │       ├── ResourceCenter.tsx
│   │       ├── AIAssistant.tsx
│   │       ├── Certifications.tsx
│   │       ├── CTASection.tsx
│   │       ├── Footer.tsx
│   │       └── FloatingChatbot.tsx
│   ├── pages/
│   │   └── LearningPage.tsx
│   ├── App.tsx
│   └── index.css
├── public/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Install dependencies

```bash
pnpm install
```

### Run in development

```bash
pnpm dev
```

### Build for production

```bash
pnpm build
```

### Type check

```bash
pnpm typecheck
```

---

## Color System

| Token | Value | Usage |
|---|---|---|
| Primary Background | `#0A0A0A` | Page background |
| Secondary Background | `#111827` | Section backgrounds |
| Card Background | `#161B22` | All cards |
| Elevated Surface | `#1E293B` | Modals, dropdowns |
| Primary Accent | `#3B82F6` | Buttons, active states |
| Secondary Accent | `#60A5FA` | Highlights |
| Bright Accent | `#38BDF8` | Glow effects |
| Primary Text | `#FFFFFF` | Headings |
| Secondary Text | `#CBD5E1` | Body copy |
| Muted Text | `#94A3B8` | Labels, metadata |

---

## Design Principles

- Dark mode by default
- Subtle animations (200–400ms, no flashy effects)
- Card hover: lift + blue border glow
- Blue accents for all interactive elements
- Mobile-first responsive layout

---
##Deploy link

https://enterprise-learning-1--harshku338.replit.app/

---

## License

© ShareOn. All rights reserved.
