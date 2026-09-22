'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { ArrowLeft } from 'lucide-react';

import { CustomLink } from '@/components/ui/Link';
import { routes } from '@/constants/routes';

import type { Collection, Artwork } from '@/data/images';

import ArtworkModal from './ArtworkModal';
import Image from 'next/image';

type Props = {
  collection: Collection;
};

export default function CollectionPage({ collection }: Props) {
  const [selectedCollection] = useState<Collection | null>(collection);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const t = useTranslations();
  const description = t(`states.${collection.key}.description`);

  return (
    <main className="bg-[#e9e9e9] text-black">
      <CustomLink
        path={routes.home}
        className="
          fixed left-5 top-5 z-50
          flex items-center gap-3
          text-black/70
          md:left-8 md:top-8
          lg:left-12 lg:top-12
        "
      >
        <ArrowLeft className="h-10 w-10 stroke-1" />
        <span className=" hidden text-sm uppercase tracking-[0.25em] md:block">
          {t('back')}
        </span>
      </CustomLink>
      {/* HERO */}
      <section className="px-5 pt-32 pb-16 md:px-8 lg:px-12 lg:pt-40 lg:pb-24">
        <div className="max-w-400 mx-auto">
          <h1 className="max-w-6xl text-5xl uppercase leading-none tracking-wide md:text-7xl lg:text-[110px]">
            {t(`states.${collection.key}.title`)}
          </h1>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-5 md:px-8 lg:px-12">
        <div className="max-w-400 mx-auto">
          <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
            {collection.artworks.map((artwork) => {
              const title = t(`states.${collection.key}.${artwork.key}.title`);
              const altText = t(`states.${collection.key}.${artwork.key}.alt`);
              
              return (
                <button
                  key={artwork.id}
                  onClick={() => setSelectedArtwork(artwork)}
                  className="group relative mb-5 block w-full overflow-hidden bg-black text-left">
                    <div className="relative overflow-hidden bg-black">
                      <Image
                        src={artwork.image}
                        alt={altText}
                        width={1200}
                        height={1800}
                        className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* OVERLAY */}
                      <div
                        className="
                          absolute inset-x-0 bottom-0
                          flex items-end
                          bg-linear-to-t from-black/80 to-transparent
                          p-6
                          opacity-0 transition-opacity duration-300
                          group-hover:opacity-100
                        "
                      >
                        <h2 className="text-2xl uppercase tracking-wide text-white md:text-3xl">
                          {title}
                        </h2>
                      </div>
                    </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="px-5 py-24 md:px-8 lg:px-12 lg:py-40">
        <div className="max-w-5xl">
          <p className="text-xl leading-[1.9] md:text-2xl lg:text-3xl">
            {description}
          </p>
        </div>
      </section>

      {/* MODAL */}
      <ArtworkModal
        collection={selectedCollection}
        artwork={selectedArtwork}
        onCloseAction={() => setSelectedArtwork(null)}
      />
    </main>
  );
};