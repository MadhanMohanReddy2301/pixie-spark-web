
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
        className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-24 h-20 p-0 animate-gradient-float"
        style={{
          borderRadius: '20px 20px 20px 4px',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 25% 75%, 0% 100%, 0% 0%)'
        }}
      >
        {/* Central Logo */}
        <div className="absolute inset-0 flex items-center justify-center pt-2">
          <img 
            src="/lovable-uploads/d083078f-9e90-4dd9-98a3-a43e84f87daf.png" 
            alt="PixieAI Logo" 
            className="w-8 h-8 object-contain"
          />
        </div>
        
        {/* Circular Text around the logo */}
        <div className="absolute inset-0 flex items-center justify-center pt-2">
          <svg className="w-full h-full animate-spin-slow" style={{ animationDuration: '25s' }}>
            <defs>
              <path
                id="circle-path"
                d="M 48, 40 m -22, 0 a 22,22 0 1,1 44,0 a 22,22 0 1,1 -44,0"
              />
            </defs>
            <text className="text-[7px] font-medium fill-white">
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
