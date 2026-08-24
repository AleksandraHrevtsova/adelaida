'use client';

import { useRouter, usePathname } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: string) => router.replace(pathname, { locale });

  return (
    <div className="flex gap-2 text-sm sm:text-base">
      <button
        type="button"
        onClick={() => switchLocale('en')}
        className="transition-opacity duration-300 hover:opacity-70"
      >
        EN
      </button>

      <span>/</span>

      <button
        type="button"
        onClick={() => switchLocale('ua')}
        className="transition-opacity duration-300 hover:opacity-70"
      >
        UA
      </button>
    </div>
  );
}