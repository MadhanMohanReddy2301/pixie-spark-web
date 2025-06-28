
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { X, MessageCircle, Send, Loader2, User } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-open chatbot only on desktop/laptop screens (not mobile)
  useEffect(() => {
    if (!hasAutoOpened) {
      const checkScreenSize = () => {
        const isDesktop = window.innerWidth >= 1024; // lg breakpoint in Tailwind
        if (isDesktop) {
          const timer = setTimeout(() => {
            setIsOpen(true);
            setHasAutoOpened(true);
          }, 2000); // Auto-open after 2 seconds on desktop
          return () => clearTimeout(timer);
        } else {
          setHasAutoOpened(true); // Don't auto-open on mobile
        }
      };

      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }
  }, [hasAutoOpened]);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      // Add greeting message when chatbot is first opened
      const greetingMessage: ChatMessage = {
        role: 'assistant',
        content: "Hi, I'm PixieAI – your smart AI assistant. Looking to bring AI into your business? Let's make it happen!"
      };
      setMessages([greetingMessage]);
      setHasGreeted(true);
    }
  }, [isOpen, hasGreeted]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputMessage.trim()
    };

    // Add user message to chat
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Prepare chat history (exclude the greeting message for API call)
      const chatHistory = updatedMessages.filter(msg => 
        !(msg.role === 'assistant' && msg.content.includes("Hello! I'm here to assist you"))
      );

      const response = await fetch('https://pixieai-api.onrender.com/api/direct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          chat_history: chatHistory
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      // Add assistant response
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: data.response || "I'm sorry, I couldn't process your request right now."
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again later."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button - New design with logo and text */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse px-4 py-3 rounded-full"
          >
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/d083078f-9e90-4dd9-98a3-a43e84f87daf.png" 
                alt="PixieAI Logo" 
                className="w-6 h-6 object-contain"
              />
              <MessageCircle className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white hidden sm:block">
                Chat with PixieAI Assistant
              </span>
            </div>
          </Button>
        </div>
      )}

      {/* Chat Window - Smaller size */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-[500px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]">
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
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 p-1 h-7 w-7"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0 min-h-0">
              {/* Messages Area with Scroll - Takes available space */}
              <div className="flex-1 overflow-hidden">
                <ScrollArea className="h-full">
                  <div className="p-3 space-y-3">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex items-start space-x-2 ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
                      >
                        {/* Avatar */}
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
                        
                        {/* Message bubble */}
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
                    ))}
                    
                    {isLoading && (
                      <div className="flex items-start space-x-2">
                        <Avatar className="w-8 h-8">
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

              {/* Fixed Input Area at Bottom */}
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
      )}
    </>
  );
};

export default ChatBot;
