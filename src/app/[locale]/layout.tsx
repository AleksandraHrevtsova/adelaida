import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adelaida-gold.vercel.app/'),
  title: {
    default: "Art Master",
    template: "%s | Art Master",
  },
  description: 'Professional art portfolio and gallery',
  openGraph: {
    title: 'Adelaida Art Mask',
    description: 'Professional art portfolio and gallery',
    url: 'https://adelaida-gold.vercel.app/',
    siteName: "Adelaida Art Mask",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Art Master",
      },
    ],

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Art Master",
    description: "Professional art portfolio",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    // <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
    //   <body suppressHydrationWarning className='min-h-full flex flex-col'>
    <NextIntlClientProvider messages={messages}>
      <div
        lang={locale}
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        {children}
      </div>
    </NextIntlClientProvider>
  );
};
