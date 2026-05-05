<div align="center">
  <h1>tingchch-portfolio</h1>
  <p>Personal portfolio for <strong>Ting Chi Chen</strong> (BIM manager &amp; 3D modeling, Taiwan), built with Next.js, TypeScript, and Tailwind CSS.</p>
  <p><small>Site template derived from an open-source Next.js portfolio starter.</small></p>
</div>

## Introduction

This repository powers Ting Chi Chen’s portfolio. Configure `SITE_URL`, social links in `src/common/constant/personal.ts`, and optional services (blog, analytics, Giscus) via `.env`.

If you have any questions, suggestions, or anything else, don't hesitate to reach out to me! 🧑‍💻
<br /><br />

## Tech Stack

This website is built using these technologies:

- ◼️ Next.js 13.5.6
- ⚛️ React 18
- 🔰 TypeScript
- 💠 Tailwind CSS 3
- 🗂 Prisma Client
- 🔥 Firebase
- 🦫 Zustand
- 〰️ SWR
- ➰ Framer Motion
- 💢 React Icons
- 🛢 Jest
- 🧿 Absolute Import and Path Alias
- 📏 ESLint
- ✨ Prettier
- 🐶 Husky & Lint Staged
- 📌 Conventional Commit Lint

<br />

## Features

On this website there are several features that will continue to be updated and added in the future.

- ### 🤖 ChatGPT AI (Unavailable)

You can access this feature by opening the command palette [cmd+k], then typing whatever you want to search/ask for. (Currently not available, but you can configure it on your machine with your own OpenAI api key)

- ### 💻 JavaScript Playground

A no-fuss pure JavaScript playground with a live feedback loop.

- ### 💬 Realtime Guestbook

Realtime guestbook chat is powered by Firebase. Anyone can leave me a message in this website.

- ### 🎧 Spotify Status

Displays song information being played on spotify in real time using the Spotify API and SWR.

- ### 🕗 Wakatime Statistics

Data is retrieved using the Wakatime API and then displayed on the dashboard, built with Next.js API routes deployed as serverless functions.

- ### 📝 Blogs

The content on this blog is meticulously managed and sourced from a self-hosted headless CMS powered by WordPress, exemplifying our commitment to a streamlined and efficient content delivery system. The data fetching technique used to retrieve articles from WordPress CMS API involves using Client-Side Rendering (CSR) for the blog list and Server-Side Rendering (SSR) for the blog details.

- ### 🗳 Projects

The data projects on this blog are taken from the PostgreSQL database connected through the Prisma Client. The database for this application is hosted on Supabase DB.The data fetching method used to retrieve data projects is Incremental Static Regeneration (ISR) with 1 second revalidation and Server-Side Rendering (SSR) for the project details..
<br /><br />

## Getting Started

Copy `.env.example` to `.env`, set at least `SITE_URL` / `NEXT_PUBLIC_SITE_URL`, then install and run.

### 1. Clone this repository

```bash
git clone <your-repo-url>
cd tingchch-portfolio
```

### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 3. Config .env

This repository uses several environment variables. Please copy .env.example into .env, then fill in the values with your own. For third-party environment variables such as Spotify, Wakatime, Firebase, and others, please refer to the official documentation provided by each provider.

```
BUNDLE_ANALYZER=false
SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Blog
BLOG_API_URL=

# OpenAI
OPENAI_API_KEY=

# DEV.to
DEVTO_KEY=

# Spotify
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=

# WakaTime
WAKATIME_API_KEY=

# GitHub
GITHUB_READ_USER_TOKEN_PERSONAL=
GITHUB_READ_USER_TOKEN_WORK=

# Prisma Database
DATABASE_URL='postgres://USER:PASSWORD@HOST:5432/postgres'

# Contact Form
CONTACT_FORM_API_KEY=

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DB_URL=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
NEXT_PUBLIC_FIREBASE_CHAT_DB=

# Next-Auth SSO
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### 4. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.
<br /><br />

## License

Licensed under the [GPL-3.0 license](./LICENSE).
