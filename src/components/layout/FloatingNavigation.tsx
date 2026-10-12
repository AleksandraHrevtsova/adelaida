'use client';

import { useEffect, useState } from 'react';

import NavigationMenu from '@/components/layout/NavigationMenu';

export default function FloatingNavigation() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav-theme]')
    );

    if (!sections.length) {
      return;
    }

    const visibilityMap = new Map<
      HTMLElement,
      IntersectionObserverEntry
    >();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          visibilityMap.set(element, entry);
        });

        const visibleSections = Array.from(visibilityMap.entries())
          .filter(([, entry]) => entry.isIntersecting)
          .sort(
            ([, a], [, b]) =>
              b.intersectionRatio - a.intersectionRatio
          );

        const activeSection = visibleSections[0]?.[0];

        if (!activeSection) {
          return;
        }

        const theme =
          activeSection.getAttribute('data-nav-theme');

        setIsDark(theme === 'dark');
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      visibilityMap.clear();
    };
  }, []);

  return (
    <div
      className={`
        fixed right-10 top-5 z-100
        flex items-center gap-4
        transition-colors duration-500
        sm:left-8 sm:top-8
        lg:left-12 lg:top-12
        ${isDark ? 'text-white' : 'text-black'}
      `}
    >
      <NavigationMenu />
    </div>
  );
}