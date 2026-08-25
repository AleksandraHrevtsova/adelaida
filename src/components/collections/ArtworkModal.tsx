'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Collection, Artwork } from '@/data/images';
import { useTranslations } from 'next-intl';

type Props = {
  collection: Collection | null;
  artwork: Artwork | null;
  onCloseAction: () => void;
};

export default function ArtworkModal({
  collection,
  artwork,
  onCloseAction,
}: Props) {
  const t = useTranslations();

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-9999 overflow-y-auto bg-black"
        >
          {/* Close */}
          <button
            onClick={onCloseAction}
            className="
              fixed
              right-5
              top-5
              z-50
              text-white
              transition-opacity
              hover:opacity-60
            "
          >
            <X className="h-8 w-8 stroke-[1.5]" />
          </button>

          <div
            className="
              flex
              min-h-full
              flex-col

              lg:grid
              lg:h-screen
              lg:min-h-0
              lg:grid-cols-[1.2fr_0.8fr]
            "
          >
            {/* IMAGE */}
            <div
              className="
                relative
                h-[60vh]
                min-h-100
                shrink-0

                lg:h-full
                lg:min-h-0
              "
            >
              <Image
                src={artwork.image}
                alt={t(
                  `states.${collection?.key}.${artwork?.key}.alt`,
                )}
                fill
                sizes="
                  (max-width: 1023px) 100vw,
                  60vw
                "
                className="object-cover"
                loading="eager"
                priority
              />
            </div>

            {/* CONTENT */}
            <div
              className="
                flex
                flex-col
                px-6
                py-16
                text-white

                md:px-10

                lg:justify-center
                lg:overflow-y-auto
                lg:px-16
                lg:py-10
              "
            >
              <h2 className="mb-8 text-4xl uppercase tracking-wide md:text-6xl">
                {t(
                  `states.${collection?.key}.${artwork?.key}.title`,
                )}
              </h2>

              <p className="mb-6 text-xl leading-relaxed text-white/80 md:text-2xl">
                {t(
                  `states.${collection?.key}.${artwork?.key}.subtitle`,
                )}
              </p>

              <p className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
                {t(
                  `states.${collection?.key}.${artwork?.key}.description`,
                )}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}