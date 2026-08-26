'use client';

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

type NavigationContextValue = {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const NavigationContext =
  createContext<NavigationContextValue | null>(null);

export function NavigationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <NavigationContext.Provider
      value={{
        isOpen,
        toggleMenu,
        closeMenu,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error('useNavigation must be used inside NavigationProvider');
  }

  return context;
}