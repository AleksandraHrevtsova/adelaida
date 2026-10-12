import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/constants/site';
import { routing } from '@/i18n/routing';
import { collections } from '@/data/images';

export default function sitemap(): MetadataRoute.Sitemap {
const staticPages = [
'',
'/collections',
];

const localizedStaticPages = routing.locales.flatMap((locale) =>
staticPages.map((page) => ({
url: `${SITE_URL}/${locale}${page}`,
lastModified: new Date(),
}))
);

const localizedCollections = routing.locales.flatMap((locale) =>
Object.keys(collections).map((slug) => ({
url: `${SITE_URL}/${locale}/collections/${slug}`,
lastModified: new Date(),
}))
);

return [
...localizedStaticPages,
...localizedCollections,
];
}
