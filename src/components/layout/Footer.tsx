'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import { images } from '@/data/images';
import links from '@/constants/socialLinks';

export default function Footer() {
  const t = useTranslations();

  const brand = t('brand');

  const instagram = t('instagram_short');
  const facebook = t('facebook_short');

  const copyright = t('footer.copyright');

  const insta = links.socialLinks.instagram;
  const fb = links.socialLinks.facebook;

  const akcentra = links.socialLinks.akcentra_linkedin;

  return (
    <footer className='bg-[#e9e9e9]'>
      {/* TOP */}
      <div className='bg-black text-white'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10 lg:p-14'>

          {/* LEFT */}
          <div className='flex flex-col justify-center'>
            <h2 className='max-w-155 font-mono uppercase tracking-[0.2em] leading-[1.4]
              text-sm md:text-base lg:text-lg'>
              {t('footer.title')}
            </h2>
            <button
              className='
                mt-8
                mb-8
                w-fit
                bg-[#e9e9e9]
                text-black
                px-8 py-5
                uppercase
                font-serif
                text-xl
                transition-opacity
                hover:opacity-80
              '
            >
              {t('subscribe')}
            </button>
            <p className='max-w-155 font-mono uppercase tracking-[0.2em] leading-[1.4]
              text-sm md:text-base lg:text-lg'>
              {t('footer.description')}
            </p>
          </div>

          {/* IMAGE */}
          <div className='relative min-h-75 lg:min-h-130'>
            <ResponsiveImage
              src={images.footer.src}
              alt={images.footer.alt}
              fill
              sizes='(max-width: 1024px) 100vw, 50vw'
              className='object-cover'
            />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="py-10 font-mono uppercase text-black text-lg px-5 md:px-8 lg:px-12 pb-6">
        <div className="flex flex-col gap-6">
          {/* ROW 1 */}
          <div className="flex items-center justify-between flex-wrap gap-6">
            {/* BRAND + SOCIALS */}
            <div className="flex items-center gap-6 flex-wrap">
              <span className="font-bold">{brand}</span>
              <div className="flex items-center gap-4">
                <Link href={insta} target="_blank">
                  {instagram}
                </Link>
                <span>/</span>
                <Link href={fb} target="_blank">
                  {facebook}
                </Link>
              </div>
            </div>
          </div>
          {/* ROW 2 */}
          <div className="flex justify-end text-xs md:text-sm lg:text-md">
            <Link
              href={akcentra}
              target="_blank"
              className="underline whitespace-nowrap"
            >
              {copyright}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}