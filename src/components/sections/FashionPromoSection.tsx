'use client';

import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function FashionPromoSection() {
  const t = useTranslations('fashion');

  return (
    <section className="relative z-10 w-full bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
          {/* LEFT CARD */}
          <div className="relative z-10">
            <div className="relative overflow-hidden">
              <Image
                src="/images/look-1.jpg"
                alt="Fashion look"
                width={700}
                height={520}
                className="h-80 w-full object-cover md:h-105"
              />
            </div>

            <div className="mt-6">
              <h2 className="text-3xl font-light tracking-tight text-black md:text-5xl">
                {t('accessoriesTitle')}
              </h2>

              <button className="group mt-6 inline-flex items-center gap-2 text-base text-black">
                <span className="relative">
                  {t('accessoriesButton')}
                  <span className="absolute -bottom-1 left-0 h-1 w-full bg-[#0c0c0c]" />
                </span>

              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative z-10 flex flex-col justify-start lg:pt-2">
            {/* TEXT BLOCK */}
            <div className="flex justify-end">
              <div className="max-w-md text-right">

                <h3 className="text-3xl font-light tracking-tight text-black md:text-5xl">
                  {t('patchesTitle')}
                </h3>

                <p className="mt-6 text-base leading-7 text-neutral-700 md:text-lg">
                  {t('patchesDescription')}
                </p>

                <button className="group mt-6 inline-flex items-center gap-2 text-base text-black">
                  <span className="relative">
                    {t('patchesButton')}
                    <span className="absolute -bottom-1 left-0 h-1 w-full bg-[#0c0c0c]" />
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-8 overflow-hidden">
              <Image
                src="/images/look-2.jpg"
                alt="Organic dress"
                width={700}
                height={700}
                className="h-80 w-full object-cover md:h-125"
              />
            </div>
          </div>

          {/* VERTICAL TEXT */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <span className="select-none text-[120px] font-semibold tracking-[0.35em] text-[#ebe5e1] writing-mode-vertical">
              FASHION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}