'use client';

import {
  useEffect,
  useRef,
} from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { CustomLink, SocialLink } from '@/components/ui/Link';
import { Separator } from '@/components/ui/Separator';

import { routes } from '@/constants/routes';
import links from '@/constants/socialLinks';

import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

type NavigationOverlayProps = {
  id: string;
  isOpen: boolean;
  onCloseAction: () => void;
};

export default function NavigationOverlay({
  id,
  isOpen,
  onCloseAction,
}: NavigationOverlayProps) {
  const t = useTranslations();

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const brand_art_mask = t('brand_art_mask');

  const instagram = t('instagram');
  const facebook = t('facebook');
  const linkedin = t('linkedin');

  const insta = links.socialLinks.instagram;
  const fb = links.socialLinks.facebook;
  const ln = links.socialLinks.linkedin;

  const stateCollectionsList = Object.entries(
    routes.collectionsItems
  ).map(([key, value]) => ({
    href: value,
    label: t(`navigation.${key}`),
  }));

  const pages = [
    {
      href: routes.collections,
      label: t('navigation.collections'),
    },
    {
      href: routes.process,
      label: t('navigation.process'),
    },
    {
      href: routes.patches,
      label: t('navigation.patches'),
    },
    {
      href: routes.accessories,
      label: t('navigation.accessories'),
    },
  ];

  useEffect(() => {
    menuButtonRef.current = document.querySelector<HTMLButtonElement>(
      '[aria-controls="main-navigation"]'
    );
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseAction();
      }
    };

    document.addEventListener(
      'keydown',
      handleKeyDown
    );

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown
      );

      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onCloseAction]);

  useEffect(() => {
    if (isOpen) {
      return;
    }

    menuButtonRef.current?.focus();
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={id}
          role="dialog"
          aria-modal="true"
          aria-label={t('navigation.title')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="
            fixed inset-0 z-9999
            overflow-y-auto
            bg-black text-white
          "
        >
          {/* CLOSE */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onCloseAction}
            className="
              absolute right-5 top-5
              z-10
              md:right-8 md:top-8
              lg:right-12 lg:top-12
              transition-opacity
              hover:opacity-60
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-4
              focus-visible:ring-offset-black
            "
            aria-label="Close navigation"
          >
            <X
              className="h-8 w-8 stroke-[1.5]"
              aria-hidden="true"
            />
          </button>

          {/* CONTENT */}
          <div
            className="
              flex min-h-screen flex-col justify-between
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
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 30,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.5,
                }}
              >
                <div
                  className="
                    mb-6
                    font-mono
                    text-sm
                    uppercase
                    tracking-[0.3em]
                    text-white/50
                  "
                >
                  {t('navigation.title')}
                </div>

                <nav aria-label={t('navigation.title')}>
                  <div className="flex flex-col gap-5">
                    {pages.map((item) => (
                      <CustomLink
                        key={item.href}
                        path={item.href}
                        onClick={onCloseAction}
                        className="
                          group w-fit
                          text-4xl
                          font-light
                          uppercase
                          tracking-wide
                          md:text-6xl
                          lg:text-7xl
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-white
                        "
                      >
                        <span className="relative">
                          {item.label}

                          <span
                            aria-hidden="true"
                            className="
                              absolute
                              bottom-0
                              left-0
                              h-px
                              w-0
                              bg-white
                              transition-all
                              duration-300
                              group-hover:w-full
                              group-focus-visible:w-full
                            "
                          />
                        </span>
                      </CustomLink>
                    ))}
                  </div>
                </nav>
              </motion.div>

              {/* COLLECTIONS */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 30,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="lg:pt-24"
              >
                <div
                  className="
                    mb-6
                    font-mono
                    text-sm
                    uppercase
                    tracking-[0.3em]
                    text-white/50
                  "
                >
                  {t('navigation.states')}
                </div>

                <nav
                  aria-label={t('navigation.states')}
                >
                  <div className="flex flex-col gap-4">
                    {stateCollectionsList.map((item) => (
                      <CustomLink
                        key={item.href}
                        path={item.href}
                        onClick={onCloseAction}
                        className="
                          group w-fit
                          text-2xl
                          uppercase
                          tracking-wide
                          md:text-3xl
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-white
                        "
                      >
                        <span className="relative">
                          {item.label}

                          <span
                            aria-hidden="true"
                            className="
                              absolute
                              bottom-0
                              left-0
                              h-px
                              w-0
                              bg-white
                              transition-all
                              duration-300
                              group-hover:w-full
                              group-focus-visible:w-full
                            "
                          />
                        </span>
                      </CustomLink>
                    ))}
                  </div>
                </nav>
              </motion.div>
            </div>

            {/* BOTTOM */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
              }}
              className="
                mt-16
                flex
                flex-col
                gap-4
                border-t
                border-white/20
                pt-6
                font-mono
                text-sm
                tracking-[0.2em]
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <LanguageSwitcher />

              <div className="uppercase">
                {brand_art_mask}
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <SocialLink
                  label={instagram}
                  path={insta}
                />

                <Separator />

                <SocialLink
                  label={facebook}
                  path={fb}
                />

                <Separator />

                <SocialLink
                  label={linkedin}
                  path={ln}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}