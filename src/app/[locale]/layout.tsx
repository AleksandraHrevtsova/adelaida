import type { Metadata } from 'next';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';

import FloatingNavigation from '@/components/layout/FloatingNavigation';

const siteTitle =
  'Adelaida Art Mask — Multidisciplinary Artist';

const siteDescription =
  'Professional art portfolio and gallery';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'uk')) {
    notFound();
  }

  const openGraphLocale =
    locale === 'uk'
      ? 'uk_UA'
      : 'en_US';

  return {
    title: {
      default: siteTitle,
      template: '%s | Adelaida Art Mask',
    },

    description: siteDescription,

    openGraph: {
      title: siteTitle,
      description: siteDescription,
      siteName: 'Adelaida Art Mask',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      locale: openGraphLocale,
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: ['/og-image.jpg'],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'uk')) {
    notFound();
  }

  const messages = await getMessages({
    locale,
  });

  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
    >
      <div className="min-h-screen antialiased">
        <FloatingNavigation />
        {children}
      </div>
    </NextIntlClientProvider>
  );
}