/** Set `SITE_URL` and `NEXT_PUBLIC_SITE_URL` in `.env` to your deployed origin (no trailing slash). */
export const getCanonicalSiteUrl = (): string =>
  (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'http://localhost:3000'
  ).replace(/\/$/, '');
