const locales = {
  en: 'en',
  uk: 'uk',
};

const localesArray = Object.values(locales);

const defaultLocale = locales.uk; 

const localeConfig = {
  locales,
  localesArray,
  defaultLocale,
}

export default localeConfig;
