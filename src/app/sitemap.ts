import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/constants/site';
import { routing } from '@/i18n/routing';
import { collections } from '@/data/images';

export default function sitemap(): MetadataRoute.Sitemap {
const homePages: MetadataRoute.Sitemap = routing.locales.map(
(locale) => ({
url: `${SITE_URL}/${locale}`,
})
);

const collectionPages: MetadataRoute.Sitemap = routing.locales.flatMap(
(locale) =>
Object.keys(collections).map((slug) => ({
url: `${SITE_URL}/${locale}/collections/${slug}`,
}))
);

return [
...homePages,
...collectionPages,
];
}
