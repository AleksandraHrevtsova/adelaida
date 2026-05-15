'use client';
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function StickySplitHero() {
  const t = useTranslations('process');

  return (
    <section className="sticky top-0 h-screen overflow-hidden">
      <div className="grid h-full grid-cols-2 ">
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/dbiudjxuw/image/upload/f_auto,q_auto/create_mask_process_craft_cojqed"
            alt="craft"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
        </div>

        <div className="relative">
          <Image
            src="https://res.cloudinary.com/dbiudjxuw/image/upload/f_auto,q_auto/create_mask_process_paiting_tt7xuq"
            alt="painting"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="mb-6 text-5xl md:text-7xl font-light tracking-wide">
            {t('title')}
          </h1>

          <p className="mb-10 text-2xl md:text-4xl">{t('process')}</p>

          <div className="space-y-2 text-2xl md:text-5xl font-light uppercase">
            <p>{t('ideas')}</p>
            <p>{t('insperation')}</p>
            <p>{t('actions')}</p>
            <p>{t('influence')}</p>
          </div>

          <button className="mt-10 border-b border-white text-2xl md:text-4xl">
            {t('more')}
          </button>
        </div>
      </div>
    </section>
  );
}