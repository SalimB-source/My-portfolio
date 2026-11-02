/**
 * Resolves a file in `public/` against the deployment base path.
 *
 * `next/image` prefixes its own `/_next/image` URLs, but plain string paths
 * (`/images/…`) are emitted untouched. On GitHub Pages the site lives under
 * `/My-portfolio`, so those paths need the prefix; on Vercel it is empty.
 *
 * Content files stay written as `/images/...` — this is the single place that
 * knows about deployment.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  if (!path.startsWith('/')) return path;
  if (!BASE_PATH) return path;
  if (path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
