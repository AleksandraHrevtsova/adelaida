'use client';

import { useState } from 'react';
import NavigationOverlay from './NavigationOverlay';

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='absolute top-8 left-6 sm:top-10 sm:left-10 lg:top-14 lg:left-14'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          relative z-50
          flex flex-col justify-between
          w-10 h-7
        "
        aria-label="menu"
      >
        <span
          className={`
            h-0.5 bg-[#e9e9e9] transition-all
            ${isOpen ? 'translate-y-3 rotate-45' : ''}
          `}
        />

        <span
          className={`
            h-0.5 bg-[#e9e9e9] transition-opacity
            ${isOpen ? 'opacity-0' : ''}
          `}
        />

        <span
          className={`
            h-0.5 bg-[#e9e9e9] transition-all
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