'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import type { Artwork } from '@/data/images';

type Props = {
  artwork: Artwork;
  collectionKey: string;
};

export default function ArtworkCard({
  artwork,
  collectionKey,
}: Props) {
  const [flipped, setFlipped] = useState(false);

  const t = useTranslations();

  const title = t(`states.${collectionKey}.${artwork.key}.title`);
  const description = t(`states.${collectionKey}.${artwork.key}.description`);
  const altText = t(`states.${collectionKey}.${artwork.key}.alt`);
  const viewDescription = t('view_description');
  const backToImage = t('back_to_image');

  const handleFlip = () => setFlipped((current) => !current);

  return (
    <article
      className="
        group relative mb-8 w-full
        break-inside-avoid
        md:mb-10
        lg:mb-14
      "
    >
      <div
        className="
          relative w-full
          perspective-[1800px]
        "
      >
        <div
          className={`
            relative w-full
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            transform-3d
            ${
              flipped
                ? 'transform-[rotateY(180deg)]'
                : 'transform-[rotateY(0deg)]'
            }
          `}
        >
          {/* FRONT */}

          <div
            className="
              relative
              w-full
              overflow-hidden
              bg-black
              [backface-hidden]
            "
          >
            <button
              type="button"
              onClick={handleFlip}
              aria-label={title}
              aria-pressed={flipped}
              className="
                relative block w-full
                cursor-pointer
                text-left
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-black
                focus-visible:ring-offset-4
              "
            >
              <div className="relative overflow-hidden bg-black">
                <Image
                  src={artwork.image}
                  alt={altText}
                  width={1200}
                  height={1800}
                  className="
                    block
                    h-auto
                    w-full
                    transition-transform
                    duration-1000
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.025]
                  "
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                />

                {/* Dark gradient */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-linear-to-t
                    from-black/75
                    via-black/0
                    to-transparent
                    opacity-70
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Title */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    flex
                    items-end
                    justify-between
                    gap-4
                    p-5
                    md:p-6
                    lg:p-7
                  "
                >
                  <h2
                    className="
                      max-w-[80%]
                      text-xl
                      uppercase
                      leading-none
                      tracking-wide
                      text-white
                      md:text-2xl
                      lg:text-3xl
                    "
                  >
                    {title}
                  </h2>

                  {/* Flip indicator */}
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/40
                      text-white
                      opacity-70
                      transition-all
                      duration-500
                      group-hover:border-white
                      group-hover:bg-white
                      group-hover:text-black
                      group-hover:opacity-100
                      md:h-12
                      md:w-12
                    "
                  >
                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-500
                        group-hover:translate-x-0.5
                      "
                    />
                  </span>
                </div>

                {/* Hover hint */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-5
                    top-5
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    md:left-6
                    md:top-6
                  "
                >
                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-white/70
                      md:text-xs
                    "
                  >
                    {viewDescription}
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* BACK */}

          <div
            className="
              absolute
              inset-0
              flex
              min-h-0
              w-full
              flex-col
              overflow-hidden
              bg-[#111]
              text-white
              transform-[rotateY(180deg)]
              backface-hidden
            "
          >
            {/* Close / back button */}
            <button
              type="button"
              onClick={handleFlip}
              aria-label={`Back to ${title}`}
              className="
                absolute
                right-5
                top-5
                z-10
                flex
                h-10
                w-10
                shrink-0
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-[#111]
                text-white/70
                transition-all
                duration-300
                hover:border-white
                hover:bg-white
                hover:text-black
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                md:right-6
                md:top-6
                md:h-12
                md:w-12
              "
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div
              className="
                flex
                min-h-0
                h-full
                flex-col
                p-6
                pt-20
                md:p-8
                md:pt-24
                lg:p-10
                lg:pt-28
              "
            >
              {/* Header — fixed */}
              <div className="shrink-0">
                {/* <p
                  className="
                    mb-4
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                    md:text-xs
                  "
                >
                  {artwork.id}
                </p> */}

                <h2
                  className="
                    max-w-[80%]
                    text-2xl
                    uppercase
                    leading-[0.95]
                    tracking-wide
                    md:text-3xl
                    lg:text-4xl
                  "
                >
                  {title}
                </h2>

                <div className="mt-6 h-px w-full bg-white/15" />
              </div>

              {/* Description — scrollable */}
              <div
                className="
                  mt-6
                  min-h-0
                  flex-1
                  overflow-y-auto
                  overscroll-contain
                  pr-3

                  scrollbar-thin
                  [scrollbar-color:rgba(255,255,255,0.25)_transparent]

                  [&::-webkit-scrollbar]:w-1
                  [&::-webkit-scrollbar-track]:bg-transparent
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-white/20
                  hover:[&::-webkit-scrollbar-thumb]:bg-white/40

                  touch-pan-y
                "
              >
                <p
                  className="
                    max-w-xl
                    pb-6
                    text-sm
                    leading-[1.8]
                    text-white/70
                    md:text-base
                    lg:text-lg
                    lg:leading-[1.7]
                  "
                >
                  {description}
                </p>
              </div>

              {/* Footer — fixed */}
              <div className="shrink-0 pt-4">
                <button
                  type="button"
                  onClick={handleFlip}
                  className="
                    flex
                    items-center
                    gap-3
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <ArrowLeft className="h-4 w-4" />

                  <span>{backToImage}</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
