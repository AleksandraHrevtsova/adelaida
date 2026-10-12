import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { SITE_URL } from '@/constants/site';
import './globals.css';

import { NavigationProvider } from '@/components/layout/NavigationContext';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Adelaida Art Mask — Multidisciplinary Artist',
    template: '%s | Adelaida Art Mask',
  },

  description: 'Professional art portfolio and gallery',

  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    siteName: 'Adelaida Art Mask',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adelaida Art Mask — Multidisciplinary Artist',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col"
      >
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </body>
    </html>
  );
}