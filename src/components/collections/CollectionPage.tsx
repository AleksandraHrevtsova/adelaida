'use client';

import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';

import { CustomLink } from '@/components/ui/Link';
import { routes } from '@/constants/routes';

import type { Collection } from '@/data/images';

import ArtworkCard from './ArtworkCard';

type Props = {
  collection: Collection;
};

export default function CollectionPage({
  collection,
}: Props) {
  const t = useTranslations();

  const description = t(
    `states.${collection.key}.description`,
  );

  return (
    <main className="bg-[#e9e9e9] text-black">
      {/* BACK */}

      <CustomLink
        path={routes.home}
        className="
          fixed
          left-5
          top-5
          z-50
          flex
          items-center
          gap-3
          text-black/70
          transition-colors
          duration-300
          hover:text-black
          md:left-8
          md:top-8
          lg:left-12
          lg:top-12
        "
      >
        <ArrowLeft className="h-10 w-10 stroke-1" />

        <span
          className="
            hidden
            text-sm
            uppercase
            tracking-[0.25em]
            md:block
          "
        >
          {t('back')}
        </span>
      </CustomLink>

      {/* HERO */}

      <section
        className="
          px-5
          pb-16
          pt-32
          md:px-8
          lg:px-12
          lg:pb-24
          lg:pt-40
        "
      >
        <div className="mx-auto max-w-400">
          <h1
            className="
              max-w-6xl
              text-2xl
              uppercase
              leading-none
              tracking-wide
              md:text-7xl
              lg:text-[110px]
            "
          >
            {t(`states.${collection.key}.title`)}
          </h1>
        </div>
      </section>

      {/* GALLERY */}

      <section className="px-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-400">
          <div
            className="
              columns-1
              gap-5
              md:columns-2
              lg:columns-3
            "
          >
            {collection.artworks.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                collectionKey={collection.key}
              />
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION DESCRIPTION */}

      <section
        className="
          px-5
          py-24
          md:px-8
          lg:px-12
          lg:py-40
        "
      >
        <div className="max-w-5xl">
          <p
            className="
              text-xl
              leading-[1.9]
              md:text-2xl
              lg:text-3xl
            "
          >
            {description}
          </p>
        </div>
      </section>
    </main>
  );
}
