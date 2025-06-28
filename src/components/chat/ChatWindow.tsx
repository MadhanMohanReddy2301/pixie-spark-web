
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { X, Send, Loader2 } from 'lucide-react';
import { useChat } from '@/hooks/useChat';
import ChatMessage from './ChatMessage';

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const {
    messages,
    inputMessage,
    setInputMessage,
    isLoading,
    messagesEndRef,
    initializeGreeting,
    sendMessage,
    handleKeyPress
  } = useChat();

  useEffect(() => {
    initializeGreeting();
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] sm:w-80 sm:h-[450px] md:w-96 md:h-[500px]">
      <Card className="h-full flex flex-col shadow-2xl border-0 bg-white">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg p-3 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/d083078f-9e90-4dd9-98a3-a43e84f87daf.png" 
                alt="PixieAI Logo" 
                className="w-6 h-6 object-contain"
              />
              <CardTitle className="text-base font-semibold">PixieAI Assistant</CardTitle>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1 h-7 w-7"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0 min-h-0">
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="p-3 space-y-3">
                {messages.map((message, index) => (
                  <ChatMessage key={index} message={message} />
                ))}
                
                {isLoading && (
                  <div className="flex items-start space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage 
                        src="/lovable-uploads/d083078f-9e90-4dd9-98a3-a43e84f87daf.png" 
                        alt="PixieAI"
                      />
                    </Avatar>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <Loader2 className="w-4 h-4 animate-spin text-gray-600" />
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </div>

          <div className="border-t p-3 flex-shrink-0 bg-white">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 text-sm"
              />
              <Button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex-shrink-0 px-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatWindow;
