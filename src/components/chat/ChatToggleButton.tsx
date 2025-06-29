
import React from 'react';
import { Button } from '@/components/ui/button';

interface ChatToggleButtonProps {
  onClick: () => void;
}

const ChatToggleButton: React.FC<ChatToggleButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
      {/* Preview text displayed permanently */}
      <div className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg">
        Ask PixieAI!
        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-r-0 border-t-4 border-b-4 border-transparent border-l-gray-800"></div>
      </div>
      
      {/* Chat button with your uploaded image */}
      <Button
        onClick={onClick}
        className="group relative bg-transparent hover:bg-gray-50/10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 w-16 h-16 p-0 animate-gradient-float border-0"
        style={{
          borderRadius: '50%',
        }}
      >
        <img 
          src="/lovable-uploads/e6e470e4-d2da-45a1-9a3a-c9220a6e78b4.png" 
          alt="PixieAI Chat" 
          className="w-full h-full object-contain"
        />
      </Button>
    </div>
  );
};

export default ChatToggleButton;
