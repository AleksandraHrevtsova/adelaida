'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import localeConfig from '@/constants/locales';
import { Separator } from '@/components/ui/Separator';
import { useTranslations } from 'next-intl';

export default function LanguageSwitcher() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="flex gap-2 text-sm text-current sm:text-base">
      <button
        type="button"
        onClick={() => switchLocale(localeConfig.locales.en)}
        className="transition-opacity duration-300 hover:opacity-70"
      >
        {t('en')}
      </button>
      <Separator />
      <button
        type="button"
        onClick={() => switchLocale(localeConfig.locales.ua)}
        className="transition-opacity duration-300 hover:opacity-70"
      >
        {t('ua')}
      </button>
    </div>
  );
}