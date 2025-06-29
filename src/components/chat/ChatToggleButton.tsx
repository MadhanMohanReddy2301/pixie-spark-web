
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
        className="group relative bg-white hover:bg-gray-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 w-16 h-16 p-0 animate-gradient-float border-2 border-gray-200"
        style={{
          borderRadius: '50% 50% 50% 10%',
        }}
      >
        {/* Chat bubble tail */}
        <div 
          className="absolute -bottom-1 -left-1 w-4 h-4 bg-white border-l-2 border-b-2 border-gray-200"
          style={{
            borderRadius: '0 0 0 50%',
            transform: 'rotate(-45deg)',
          }}
        />
        
        {/* Inner content container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Central Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/lovable-uploads/d083078f-9e90-4dd9-98a3-a43e84f87daf.png" 
              alt="PixieAI Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>
        
        {/* Floating text label */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Ask PixieAI!
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </Button>
    </div>
  );
};

export default ChatToggleButton;
