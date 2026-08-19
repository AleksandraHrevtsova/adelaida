'use client';

import { useState } from 'react';
import NavigationOverlay from './NavigationOverlay';
const baseSpan = 'block h-px w-full bg-[#e9e9e9]';

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        fixed left-6 top-8 z-200
        sm:left-10 sm:top-10
        lg:left-14 lg:top-14
      "
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          relative z-50
          flex h-7 w-10 flex-col justify-between
        "
        aria-label="menu"
      >
        <span
          className={`
            ${baseSpan} transition-all
            ${isOpen ? 'translate-y-3 rotate-45' : ''}
          `}
        />

        <span
          className={`
            ${baseSpan} transition-opacity
            ${isOpen ? 'opacity-0' : ''}
          `}
        />

        <span
          className={`
            ${baseSpan} transition-all
            ${isOpen ? '-translate-y-3 -rotate-45' : ''}
          `}
        />
      </button>

      <NavigationOverlay
        isOpen={isOpen}
        onCloseAction={() => setIsOpen(false)}
      />
    </div>
  );
}