export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';
import { PROJECTS, SITE } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ['', '/work', '/about', '/cv', '/contact'].map((path) => ({
    url: `${SITE.siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const projects = PROJECTS.map((p) => ({
    url: `${SITE.siteUrl}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...pages, ...projects];
}
