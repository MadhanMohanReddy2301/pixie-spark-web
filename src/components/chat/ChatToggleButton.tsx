
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
        className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-16 h-16 p-0 animate-gradient-float rounded-2xl"
        style={{
          borderRadius: '16px 16px 16px 4px',
        }}
      >
        {/* Central Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/lovable-uploads/d083078f-9e90-4dd9-98a3-a43e84f87daf.png" 
            alt="PixieAI Logo" 
            className="w-6 h-6 object-contain"
          />
        </div>
        
        {/* Circular Text around the logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full animate-spin-slow" style={{ animationDuration: '25s' }}>
            <defs>
              <path
                id="circle-path"
                d="M 32, 32 m -18, 0 a 18,18 0 1,1 36,0 a 18,18 0 1,1 -36,0"
              />
            </defs>
            <text className="text-[6px] font-medium fill-white">
              <textPath href="#circle-path" startOffset="0%">
                ASK PIXIEAI • ASK PIXIEAI • ASK PIXIEAI • 
              </textPath>
            </text>
          </svg>
        </div>
      </Button>
    </div>
  );
};

export default ChatToggleButton;
