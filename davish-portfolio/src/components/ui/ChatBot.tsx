import { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { profile } from '../../data/profile';

type Message = {
  id: string;
  role: 'user' | 'ai';
  content: string;
};

function Typewriter({ text, onType }: { text: string; onType: () => void }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i += 3;
      onType();
      if (i > text.length) {
        setDisplayed(text);
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [text, onType]);

  return <>{displayed}</>;
}

export function ChatBot({ className }: { className?: string }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'ai', content: `Ask me anything about ${profile.name}.` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [typingId, setTypingId] = useState<string | null>('1');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const history = newMessages.map(m => ({
        role: m.role === 'ai' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        let errorMsg = data.error || "Failed to fetch response";
        if (data.details) {
          try {
            const parsedDetails = JSON.parse(data.details);
            if (parsedDetails.error && parsedDetails.error.message) {
              errorMsg += `: ${parsedDetails.error.message}`;
            }
          } catch (e) {
            errorMsg += `: ${data.details}`;
          }
        }
        throw new Error(errorMsg);
      }
      
      const newAiMsgId = Date.now().toString();
      setMessages(prev => [...prev, {
        id: newAiMsgId,
        role: 'ai',
        content: data.reply
      }]);
      setTypingId(newAiMsgId);
    } catch (error: any) {
      const errorMsgId = Date.now().toString();
      setMessages(prev => [...prev, {
        id: errorMsgId,
        role: 'ai',
        content: `[ERROR] Connection failed: ${error.message}`
      }]);
      setTypingId(errorMsgId);
    } finally {
      setIsLoading(false);
    }
  };

  if (isDismissed) return null;

  return (
    <div className={cn("p-space-sm md:p-space-md bg-surface-container-lowest/85 backdrop-blur-2xl rounded-xl shadow-2xl relative overflow-hidden group border border-surface-container-high flex flex-col h-[500px]", 
      "lg:w-full w-auto max-w-sm lg:max-w-none mx-auto lg:mx-0",
      className)}>
      
      <button 
        onClick={() => setIsDismissed(true)}
        className="absolute top-2 right-2 lg:hidden w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-primary z-10"
      >
        <span className="material-symbols-outlined text-[16px]">close</span>
      </button>

      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 z-10"></div>
      
      <div className="flex shrink-0 items-center justify-between pb-space-sm mb-space-xs bg-surface-container-low px-space-sm py-space-xs rounded z-10">
        <div className="flex items-center gap-space-xs">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label-code text-label-code text-primary font-bold lg:text-[13px]">AI ASSISTANT</span>
        </div>
        <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant hidden lg:inline">STATUS: ONLINE</span>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto pr-2 flex flex-col gap-space-md mb-space-sm [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-primary/40 hover:[&::-webkit-scrollbar-thumb]:bg-primary/60 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent"
        data-lenis-prevent="true"
      >
        {messages.map((msg) => (
          <div key={msg.id} className={cn("flex flex-col gap-1 max-w-[90%]", msg.role === 'user' ? "self-end items-end" : "self-start items-start")}>
            <span className="font-label-mono-xs text-[9px] text-on-surface-variant/60 uppercase">
              {msg.role === 'user' ? 'GUEST' : 'SYS_AI'}
            </span>
            <div className={cn("p-space-sm rounded-lg font-label-code text-[12px] leading-relaxed whitespace-pre-wrap", 
              msg.role === 'user' 
                ? "bg-surface-container-highest text-on-surface rounded-tr-none border border-surface-container" 
                : "bg-primary/10 text-primary border border-primary/20 rounded-tl-none")}>
              {msg.id === typingId ? (
                <Typewriter text={msg.content} onType={scrollToBottom} />
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="self-start flex flex-col gap-1 max-w-[90%]">
             <span className="font-label-mono-xs text-[9px] text-on-surface-variant/60 uppercase">SYS_AI</span>
             <div className="p-space-sm rounded-lg font-label-code text-[12px] bg-primary/10 text-primary border border-primary/20 rounded-tl-none flex gap-1.5 items-center h-[34px]">
               <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0ms' }}></span>
               <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }}></span>
               <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '300ms' }}></span>
             </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="relative mt-auto shrink-0 z-10">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me a question..." 
          className="w-full bg-surface-container-high border border-surface-container-highest text-on-surface font-label-code text-[12px] rounded-lg pl-space-sm pr-10 py-space-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-on-surface-variant/40"
          disabled={isLoading}
        />
        <button 
          type="submit"
          disabled={!input.trim() || isLoading}
          className="absolute right-1 top-1 bottom-1 w-8 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors disabled:opacity-50 disabled:hover:text-on-surface-variant"
        >
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </form>
    </div>
  );
}
