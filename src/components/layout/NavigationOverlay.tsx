'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

type NavigationOverlayProps = {
  isOpen: boolean;
  onCloseAction: () => void;
};

export default function NavigationOverlay({
  isOpen,
  onCloseAction,
}: NavigationOverlayProps) {
  const locale = useLocale();
  const t = useTranslations('navigation');

  const collections = [
    {
      href: '/' + locale + '/collections/fire',
      label: t('fire'),
    },
    {
      href: '/' + locale + '/collections/water',
      label: t('water'),
    },
    {
      href: '/' + locale + '/collections/air',
      label: t('air'),
    },
    {
      href: '/' + locale + '/collections/earth',
      label: t('earth'),
    },
  ];

  const pages = [
    {
      href: '/#states',
      label: t('states'),
    },
    {
      href: '/process',
      label: t('process'),
    },
    {
      href: '/patches',
      label: t('patches'),
    },
    {
      href: '/accessories',
      label: t('accessories'),
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="
            fixed inset-0 z-9999
            bg-black text-white
          "
        >
          {/* CLOSE */}
          <button
            onClick={onCloseAction}
            className="
              absolute right-5 top-5
              md:right-8 md:top-8
              lg:right-12 lg:top-12
              transition-opacity hover:opacity-60
            "
            aria-label="Close navigation"
          >
            <X className="h-8 w-8 stroke-[1.5]" />
          </button>

          {/* CONTENT */}
          <div
            className="
              flex h-full flex-col justify-between
              px-5 py-24
              md:px-8
              lg:px-12 lg:py-12
            "
          >
            {/* TOP */}
            <div
              className="
                grid gap-16
                lg:grid-cols-2
              "
            >
              {/* MAIN NAV */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-white/50">
                  {t('title')}
                </div>

                <nav className="flex flex-col gap-5">
                  {pages.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onCloseAction}
                      className="
                        group w-fit
                        text-4xl md:text-6xl lg:text-7xl
                        font-light uppercase
                        tracking-wide
                        transition-opacity
                        hover:opacity-60
                      "
                    >
                      <span className="relative">
                        {item.label}

                        <span
                          className="
                            absolute bottom-0 left-0
                            h-px w-0 bg-white
                            transition-all duration-300
                            group-hover:w-full
                          "
                        />
                      </span>
                    </Link>
                  ))}
                </nav>
              </motion.div>

              {/* COLLECTIONS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="lg:pt-24"
              >
                <div className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-white/50">
                  {t('collections')}
                </div>

                <div className="flex flex-col gap-4">
                  {collections.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onCloseAction}
                      className="
                        group w-fit
                        text-2xl md:text-3xl
                        uppercase tracking-wide
                        transition-opacity
                        hover:opacity-60
                      "
                    >
                      <span className="relative">
                        {item.label}

                        <span
                          className="
                            absolute bottom-0 left-0
                            h-px w-0 bg-white
                            transition-all duration-300
                            group-hover:w-full
                          "
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* BOTTOM */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="
                mt-16
                flex flex-col gap-4
                border-t border-white/20
                pt-6
                font-mono text-sm uppercase
                tracking-[0.2em]
                md:flex-row md:items-center md:justify-between
              "
            >
              <div>ADELAIDA ART MASK</div>

              <div className="flex items-center gap-4">
                <Link
                  href="https://www.instagram.com/adelaida_art_mask"
                  target="_blank"
                  className="hover:opacity-60"
                >
                  Instagram
                </Link>

                <span>/</span>

                <Link
                  href="https://www.facebook.com/adelaidaartmask"
                  target="_blank"
                  className="hover:opacity-60"
                >
                  Facebook
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}