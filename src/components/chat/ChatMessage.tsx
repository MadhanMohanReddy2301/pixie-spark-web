
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import { ChatMessage as ChatMessageType } from '@/types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div
      className={`flex items-start space-x-2 ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
    >
      <Avatar className="w-8 h-8 flex-shrink-0">
        {message.role === 'assistant' ? (
          <AvatarImage 
            src="/lovable-uploads/d083078f-9e90-4dd9-98a3-a43e84f87daf.png" 
            alt="PixieAI"
          />
        ) : (
          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <User className="w-4 h-4" />
          </AvatarFallback>
        )}
      </Avatar>
      
      <div
        className={`max-w-[75%] p-3 rounded-lg ${
          message.role === 'user'
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
