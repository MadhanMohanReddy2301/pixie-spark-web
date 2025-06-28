
import { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '@/types/chat';

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initializeGreeting = () => {
    if (!hasGreeted) {
      const greetingMessage: ChatMessage = {
        role: 'assistant',
        content: "Hi, I'm PixieAI – your smart AI assistant. Looking to bring AI into your business? Let's make it happen!"
      };
      setMessages([greetingMessage]);
      setHasGreeted(true);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputMessage.trim()
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputMessage('');
    setIsLoading(true);

    try {
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

  return {
    messages,
    inputMessage,
    setInputMessage,
    isLoading,
    messagesEndRef,
    initializeGreeting,
    sendMessage,
    handleKeyPress
  };
};
