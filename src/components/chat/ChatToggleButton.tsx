
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

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
      
      {/* Simple circular chat button */}
      <Button
        onClick={onClick}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
};

export default ChatToggleButton;
