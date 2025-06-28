
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
        className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-20 h-20 rounded-full p-0 animate-float"
      >
        {/* Central Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/lovable-uploads/d083078f-9e90-4dd9-98a3-a43e84f87daf.png" 
            alt="PixieAI Logo" 
            className="w-8 h-8 object-contain animate-pulse"
          />
        </div>
        
        {/* Circular Text around the logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full animate-spin-slow" style={{ animationDuration: '20s' }}>
            <defs>
              <path
                id="circle-path"
                d="M 40, 40 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
              />
            </defs>
            <text className="text-[8px] font-medium fill-white">
              <textPath href="#circle-path" startOffset="0%">
                PixieAI Assistant • Chat Now • PixieAI Assistant • Chat Now • 
              </textPath>
            </text>
          </svg>
        </div>
      </Button>
    </div>
  );
};

export default ChatToggleButton;
