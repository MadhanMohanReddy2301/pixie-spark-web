
import { useState, useEffect } from 'react';

export const useAutoOpen = () => {
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  useEffect(() => {
    if (!hasAutoOpened) {
      const checkScreenSize = () => {
        const isDesktop = window.innerWidth >= 1024;
        if (isDesktop) {
          const timer = setTimeout(() => {
            setHasAutoOpened(true);
            return true; // Signal to open chat
          }, 2000);
          return () => clearTimeout(timer);
        } else {
          setHasAutoOpened(true);
          return false; // Don't auto-open on mobile
        }
      };

      const shouldOpen = checkScreenSize();
      if (shouldOpen) {
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
      }
    }
  }, [hasAutoOpened]);

  return { hasAutoOpened, setHasAutoOpened };
};
