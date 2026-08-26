const locales = {
  en: 'en',
  ua: 'ua',
};

const localesArray = Object.values(locales);

const defaultLocale = locales.ua; 

const localeConfig = {
  locales,
  localesArray,
  defaultLocale,
}

export default localeConfig;
