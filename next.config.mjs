/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // AVIF first (much smaller for photographic work), WebP fallback.
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 828, 1080, 1200, 1600, 1920, 2200],
    imageSizes: [120, 160, 240, 320, 420],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  // The old static site at the repo root is kept for reference only.
  poweredByHeader: false,
  devIndicators: false,
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
};

export default nextConfig;
