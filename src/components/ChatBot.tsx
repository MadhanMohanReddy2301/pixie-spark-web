
import React, { useState, useEffect } from 'react';
import { useAutoOpen } from '@/hooks/useAutoOpen';
import ChatToggleButton from './chat/ChatToggleButton';
import ChatWindow from './chat/ChatWindow';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hasAutoOpened, setHasAutoOpened } = useAutoOpen();

  // Auto-open chatbot only on desktop/laptop screens (not mobile)
  useEffect(() => {
    if (!hasAutoOpened) {
      const checkScreenSize = () => {
        const isDesktop = window.innerWidth >= 1024;
        if (isDesktop) {
          const timer = setTimeout(() => {
            setIsOpen(true);
            setHasAutoOpened(true);
          }, 2000);
          return () => clearTimeout(timer);
        } else {
          setHasAutoOpened(true);
        }
      };

      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }
  }, [hasAutoOpened, setHasAutoOpened]);

  return (
    <>
      {!isOpen && <ChatToggleButton onClick={() => setIsOpen(true)} />}
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatBot;
