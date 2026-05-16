'use client';

import Image from 'next/image';
import { useState } from 'react';

import type { Artwork, Collection } from '@/data/collections';
import ArtworkModal from './ArtworkModal';

type Props = {
  collection: Collection;
};

export default function CollectionPage({ collection }: Props) {
  const [selectedArtwork, setSelectedArtwork] =
    useState<Artwork | null>(null);

    return (
      <main className="bg-[#e9e9e9] text-black">
        {/* HERO */}
        <section className="px-5 pt-32 pb-16 md:px-8 lg:px-12 lg:pt-40 lg:pb-24">
          <div className="max-w-400 mx-auto">
            <h1 className="max-w-6xl text-5xl uppercase leading-none tracking-wide md:text-7xl lg:text-[110px]">
              {collection.title}
            </h1>
          </div>
        </section>

        {/* GALLERY */}
        <section className="px-5 md:px-8 lg:px-12">
          <div className="max-w-400 mx-auto">
            <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
              {collection.artworks.map((artwork, index) => (
                <button
                  key={artwork.id}
                  onClick={() => setSelectedArtwork(artwork)}
                  className="group relative mb-5 block w-full overflow-hidden bg-black text-left">
                  <div
                    className={`
                      relative overflow-hidden
                      ${index % 3 === 0 ? 'aspect-4/5' : ''}
                      ${index % 3 === 1 ? 'aspect-4/6' : ''}
                      ${index % 3 === 2 ? 'aspect-5/4' : ''}
                    `}
                  >
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
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
                      <h2 className=" text-2xl uppercase tracking-wide text-white md:text-3xl">
                        {artwork.title}
                      </h2>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="px-5 py-24 md:px-8 lg:px-12 lg:py-40">
          <div className="max-w-5xl">
            <p className="text-xl leading-[1.9] md:text-2xl lg:text-3xl">
              {collection.description}
            </p>
          </div>
        </section>

        {/* MODAL */}
        <ArtworkModal
          artwork={selectedArtwork}
          onCloseAction={() => setSelectedArtwork(null)}
        />
      </main>
    );
};