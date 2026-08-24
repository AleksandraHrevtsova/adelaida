import { defineRouting } from 'next-intl/routing';
import localeConfig from '@/constants/locales';

export const routing = defineRouting({
  locales: localeConfig.localesArray,
  defaultLocale: localeConfig.defaultLocale,
});