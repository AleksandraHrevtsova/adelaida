'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';

import localeConfig from '@/constants/locales';
import { Separator } from '@/components/ui/Separator';

export default function LanguageSwitcher() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLocale = (locale: string) => {
    if (locale === currentLocale) {
      return;
    }

    router.replace(pathname, { locale });
  };

  const isEnglish = currentLocale === localeConfig.locales.en;
  const isUkrainian = currentLocale === localeConfig.locales.uk;

  return (
    <div
      className="flex gap-2 text-sm text-current sm:text-base"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() =>
          switchLocale(localeConfig.locales.en)
        }
        aria-current={isEnglish ? 'page' : undefined}
        aria-label="Switch language to English"
        className="
          transition-opacity
          duration-300
          hover:opacity-70
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-current
          focus-visible:ring-offset-2
        "
      >
        {t('en')}
      </button>

      <Separator />

      <button
        type="button"
        onClick={() =>
          switchLocale(localeConfig.locales.uk)
        }
        aria-current={isUkrainian ? 'page' : undefined}
        aria-label="Switch language to Ukrainian"
        className="
          transition-opacity
          duration-300
          hover:opacity-70
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-current
          focus-visible:ring-offset-2
        "
      >
        {t('uk')}
      </button>
    </div>
  );
}