'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Artwork } from '@/data/collections';

type Props = {
  artwork: Artwork | null;
  onCloseAction: () => void;
};

export default function ArtworkModal({
  artwork,
  onCloseAction,
}: Props) {
  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-9999 bg-black"
        >
          <button
            onClick={onCloseAction}
            className="absolute right-5 top-5 z-50 text-white transition-opacity hover:opacity-60"
          >
            <X className="h-8 w-8 stroke-[1.5]" />
          </button>

          <div className="grid h-full lg:grid-cols-[1.2fr_0.8fr]">
            {/* IMAGE */}
            <div className="relative h-[60vh] lg:h-full">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center px-6 py-10 text-white md:px-10 lg:px-16">
              <h2
                className="mb-8 text-4xl uppercase tracking-wide md:text-6xl">
                {artwork.title}
              </h2>
              <p className="mb-6 text-xl leading-relaxed text-white/80 md:text-2xl">
                {artwork.subtitle}
              </p>
              <p
                className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
                {artwork.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};