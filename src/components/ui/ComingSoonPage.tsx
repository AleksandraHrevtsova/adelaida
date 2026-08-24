'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function ComingSoonPage() {
  const t = useTranslations('comingSoon');

  return (
    <main className="relative flex min-h-screen flex-col bg-white text-black">
      {/* TOP */}
      <div className="flex items-center justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-black/50">
          Adelaida Art Mask
        </span>

        <span className="font-mono text-xs uppercase tracking-[0.3em] text-black/50">
          {t('label')}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col justify-center px-6 pb-20 sm:px-10 lg:px-16">
        <div className="max-w-6xl">
          <p className="mb-8 font-mono text-sm uppercase tracking-[0.3em] text-black/50">
            {t('eyebrow')}
          </p>

          <h1 className="max-w-5xl text-[clamp(4rem,12vw,10rem)] font-medium leading-[0.82] tracking-[-0.06em]">
            {t('title')}
          </h1>

          <div className="mt-12 max-w-xl">
            <p className="text-lg leading-8 text-black/60 sm:text-xl">
              {t('description')}
            </p>

            <Link
              href="/"
              className="
                group mt-10 inline-flex w-fit items-center gap-4
                border-b border-black/30 pb-2
                text-sm uppercase tracking-[0.15em]
                transition-all duration-300
                hover:border-black
              "
            >
              <span>{t('backHome')}</span>

              <span
                className="
                  transition-transform duration-300
                  group-hover:-translate-x-1
                "
              >
                ←
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-between border-t border-black/10 px-6 py-6 font-mono text-xs uppercase tracking-[0.2em] text-black/40 sm:px-10 lg:px-16">
        <span>© Adelaida</span>
        <span>{t('status')}</span>
      </div>
    </main>
  );
}