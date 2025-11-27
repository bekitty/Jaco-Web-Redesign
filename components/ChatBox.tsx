
import React, { useState } from 'react';
import { MOCK_CHAT_MESSAGES } from '../constants';
import { Send, Smile, Users, Settings } from 'lucide-react';
import { Button } from './Button';

export const ChatBox = () => {
  const [messages, setMessages] = useState(MOCK_CHAT_MESSAGES);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      user: 'You',
      text: inputValue,
      color: '#efeff1'
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="flex flex-col h-full bg-jaco-card border border-white/5 rounded-xl overflow-hidden">
      {/* Chat Header */}
      <div className="p-3 border-b border-white/5 flex items-center justify-between bg-jaco-dark/50">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
             <ArrowRightFromLineIcon className="rotate-180" size={16} />
             Stream Chat
        </div>
        <div className="flex items-center gap-1">
             <button className="p-1.5 text-jaco-muted hover:bg-white/5 rounded">
                 <Users size={16} />
             </button>
             <button className="p-1.5 text-jaco-muted hover:bg-white/5 rounded">
                 <Settings size={16} />
             </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-jaco-hover">
        <div className="text-center text-xs text-jaco-muted my-4">
             Welcome to the chat room!
        </div>
        {messages.map((msg) => (
          <div key={msg.id} className="text-sm break-words leading-relaxed animate-fade-in">
            <span className="font-bold mr-2 cursor-pointer hover:underline" style={{ color: msg.color }}>
              {msg.user}:
            </span>
            <span className="text-jaco-text">{msg.text}</span>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/5 bg-jaco-dark/30">
         <form onSubmit={handleSend} className="relative">
             <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Send a message..."
                className="w-full bg-black/20 text-white text-sm rounded-lg py-3 pl-3 pr-10 border border-transparent focus:border-jaco-primary/50 focus:bg-black/40 outline-none transition-all placeholder:text-jaco-muted/50"
             />
             <div className="absolute right-2 top-2.5 flex items-center gap-1">
                 <button type="button" className="text-jaco-muted hover:text-jaco-primary p-1">
                     <Smile size={18} />
                 </button>
             </div>
         </form>
         <div className="flex justify-between items-center mt-2">
             <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-jaco-primary bg-jaco-primary/10 px-2 py-0.5 rounded">100 Points</span>
             </div>
             <Button size="sm" onClick={handleSend} disabled={!inputValue} className="px-3 py-1">
                 Chat
             </Button>
         </div>
      </div>
    </div>
  );
};

// Icon helper since lucide-react might export slightly different names
const ArrowRightFromLineIcon = ({className, size}: {className?: string, size?: number}) => (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    >
        <path d="M3 5v14" />
        <path d="M21 12H7" />
        <path d="m15 18-6-6 6-6" />
    </svg>
)
