# Zaxcode public website

Next.js owns the public Zaxcode website. Laravel remains the system of record and supplies published blog content as XML.

## Environment

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_SITE_URL`: canonical public origin, normally `https://zaxcode.com`.
- `NEXT_PUBLIC_DASHBOARD_URL`: Laravel/Inertia origin (`http://localhost:97` locally and `https://dashboard.zaxcode.com` in production).
- `LARAVEL_API_BASE_URL`: server-only Laravel origin, normally `https://dashboard.zaxcode.com` unless a dedicated API hostname is used.
- `REVALIDATION_SECRET`: shared secret matching Laravel's `NEXT_REVALIDATION_SECRET`.

Laravel should set `NEXT_REVALIDATION_URL` to the deployed Next.js `/api/revalidate` URL. Next.js never connects to the Laravel database.

## Local commands

Install dependencies with `npm install`, then use `npm run dev`. Run `npm test`, `npm run lint`, and `npm run build` before deployment.
