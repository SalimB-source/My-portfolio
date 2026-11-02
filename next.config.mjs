/**
 * Two deploy targets, one codebase.
 *
 * - Default (`npm run build`): a normal Next.js server build, for Vercel or any
 *   Node host. Image optimisation and the security headers are available.
 * - GitHub Pages (`GITHUB_PAGES=true npm run build`): a fully static export,
 *   served from a sub-path (`/My-portfolio`). Image optimisation is off and
 *   `headers()` is dropped, because Pages only serves static files.
 *
 * The base path is injected into client code through `NEXT_PUBLIC_BASE_PATH`
 * (read by `lib/asset.ts`), so every image path is prefixed exactly once.
 */
const isPages = process.env.GITHUB_PAGES === 'true';
const basePath = isPages ? process.env.BASE_PATH || '/My-portfolio' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,

  // Static export bits, only for GitHub Pages.
  ...(isPages
    ? {
        output: 'export',
        trailingSlash: true,
        basePath,
        assetPrefix: basePath,
      }
    : {}),

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    // Pages cannot run the optimiser: serve the pre-sized files as they are.
    unoptimized: isPages,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 828, 1080, 1200, 1600, 1920, 2200],
    imageSizes: [120, 160, 240, 320, 420],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  // Custom headers need a server; static exports do not support them.
  ...(isPages
    ? {}
    : {
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: [
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
