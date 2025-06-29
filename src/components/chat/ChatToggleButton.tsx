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
        className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-20 h-20 p-0 animate-gradient-float"
        style={{
          borderRadius: '50% 50% 50% 10%',
          transform: 'rotate(-45deg)',
        }}
      >
        {/* Inner content container - counter-rotate to keep content upright */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotate(45deg)' }}>
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
                  d="M 40, 40 m -20, 0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0"
                />
              </defs>
              <text className="text-[7px] font-bold fill-orange-300 tracking-wide">
                <textPath href="#circle-path" startOffset="0%">
                  ASK PIXIEAI • ASK PIXIEAI • ASK PIXIEAI • 
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </Button>
    </div>
  );
};

export default ChatToggleButton;
