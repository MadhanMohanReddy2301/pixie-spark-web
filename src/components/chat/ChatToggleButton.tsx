
import React from 'react';
import { Button } from '@/components/ui/button';

interface ChatToggleButtonProps {
  onClick: () => void;
}

const ChatToggleButton: React.FC<ChatToggleButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onClick}
        className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse px-4 py-3 rounded-full"
      >
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/d083078f-9e90-4dd9-98a3-a43e84f87daf.png" 
            alt="PixieAI Logo" 
            className="w-6 h-6 object-contain animate-float"
          />
          <span className="text-sm font-medium text-white hidden sm:block animate-pulse">
            PixieAI Assistant
          </span>
        </div>
      </Button>
    </div>
  );
};

export default ChatToggleButton;
