# Maochi Games Website

Official website for Maochi Games, built with [Next.js](https://nextjs.org/) and [React](https://react.dev/).

## Requirements

Before you install and run this project, make sure you have the following:

- **[Node.js](https://nodejs.org/)** 18.17 or later (Next.js 14 requirement)
- **npm** (included with Node.js)

You can check your versions with:

```bash
node -v
npm -v
```

## Installation

Clone this repository, then install the project dependencies:

```bash
npm install
```

## How To Run

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

The page will update as you edit files. The development server will keep running until you stop it (Ctrl+C).

## Project Structure

```
app/                    Pages and routes (Next.js App Router)
components/             Shared UI and site layout
hooks/                  Reusable React hooks
lib/                    Shared utilities
public/                 Images, logos, and other static files
styles/                 Extra global styles
```

### Where to find things

| What you need | Location |
| --- | --- |
| Home page | `app/page.tsx` |
| Games page | `app/games/page.tsx` |
| Projects page | `app/projects/page.tsx` |
| Contact page | `app/contact/page.tsx` |
| Contact form API | `app/contact/api/contactroute.ts` |
| Privacy policy | `app/privacy-policy/page.tsx` |
| Terms of use | `app/terms-of-use/page.tsx` |
| Root layout, fonts, and site metadata | `app/layout.tsx` |
| Header, navigation, and footer | `components/baselayout/SiteChrome.tsx` |
| Theme provider | `components/theme-provider.tsx` |
| Reusable UI primitives (buttons, inputs, dialogs) | `components/ui/` |
| Global CSS | `app/globals.css` |
| Logos, favicon, and background images | `public/` |
| Shared helper functions | `lib/utils.ts` |
| Next.js configuration | `next.config.mjs` |
