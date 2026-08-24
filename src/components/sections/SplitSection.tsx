'use client';

import { useTranslations } from 'next-intl';

import ResponsiveImage from '@/components/ui/ResponsiveImage';
import { images } from '@/data/images';

import { CustomLink } from '@/components/ui/Link';
import { routes } from '@/constants/routes';

export default function SplitSection() {
  const t = useTranslations();

  const title = t('process.title');
  const ideas = t('process.ideas');
  const insperation = t('process.insperation');
  const actions = t('process.actions');
  const influence = t('process.influence');

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="grid h-full grid-cols-2 ">
        <div className="relative h-full">
          <ResponsiveImage
            src={images.process.craft.src}
            alt={images.process.craft.alt}
            fill
            priority
            sizes="50vw"
          />
        </div>

        <div className="relative h-full">
          <ResponsiveImage
            src={images.process.painting.src}            
            alt={images.process.painting.alt} 
            fill
            sizes="50vw"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="mb-6 text-5xl md:text-7xl font-light tracking-wide">
            {title}
          </h1>

          <p className="mb-10 text-2xl md:text-4xl">{t('process.process')}</p>

          <div className="mb-10 space-y-2 text-2xl md:text-5xl font-light uppercase">
            <p>{ideas}</p>
            <p>{insperation}</p>
            <p>{actions}</p>
            <p>{influence}</p>
          </div>

          <CustomLink
            path={routes.process}
            label={t('more')}
            className="border-b border-white text-2xl md:text-4xl"
          />
        </div>
      </div>
    </section>
  );
}