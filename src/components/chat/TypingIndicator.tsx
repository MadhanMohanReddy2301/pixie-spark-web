
import React from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start space-x-2">
      <Avatar className="w-6 h-6">
        <AvatarImage 
          src="/lovable-uploads/d083078f-9e90-4dd9-98a3-a43e84f87daf.png" 
          alt="PixieAI"
        />
      </Avatar>
      <div className="bg-gray-100 p-3 rounded-lg">
        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-600">PixieAI is typing</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
