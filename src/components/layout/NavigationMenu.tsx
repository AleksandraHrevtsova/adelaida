'use client';

import NavigationOverlay from './NavigationOverlay';
import { useNavigation } from './NavigationContext';

const baseSpan = 'block h-px w-full bg-current';

export default function NavigationMenu() {
  const {
    isOpen,
    toggleMenu,
    closeMenu,
  } = useNavigation();

  return (
    <div>
      <button
        type="button"
        onClick={toggleMenu}
        className="
          relative z-50
          flex h-7 w-10 flex-col justify-between
        "
        aria-label="menu"
        aria-expanded={isOpen}
      >
        <span
          className={`
            ${baseSpan} transition-all duration-300
            ${isOpen ? 'translate-y-3 rotate-45' : ''}
          `}
        />

        <span
          className={`
            ${baseSpan} transition-opacity duration-300
            ${isOpen ? 'opacity-0' : ''}
          `}
        />

        <span
          className={`
            ${baseSpan} transition-all duration-300
            ${isOpen ? '-translate-y-3 -rotate-45' : ''}
          `}
        />
      </button>

      <NavigationOverlay
        isOpen={isOpen}
        onCloseAction={closeMenu}
      />
    </div>
  );
};