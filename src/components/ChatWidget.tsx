
import { AnimatePresence, motion } from 'framer-motion';
import Fuse from 'fuse.js';
import { Bot, MessageSquare, Send, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { agentKnowledge } from '../data/agent-knowledge';

interface Props {
    mode?: 'widget' | 'page';
}

export default function ChatWidget({ mode = 'widget' }: Props) {
    const isPageMode = mode === 'page';
    const [isOpen, setIsOpen] = useState(isPageMode);

    // Ensure it stays open in page mode
    useEffect(() => {
        if (isPageMode) setIsOpen(true);
    }, [isPageMode]);

    const [messages, setMessages] = useState<{ type: 'user' | 'agent'; text: string; actions?: any[] }[]>([
        { type: 'agent', text: "¡Hola! Soy GaborGPT 🤖. Pregúntame sobre mi experiencia, stack tecnológico o tarifas." }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const fuse = React.useMemo(() => new Fuse(agentKnowledge, {
        keys: ['keywords'],
        threshold: 0.4, // Sensitivity (0.0 = perfect match, 1.0 = match anything)
    }), []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userText = inputValue;
        setMessages(prev => [...prev, { type: 'user', text: userText }]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI "thinking" delay
        setTimeout(() => {
            const results = fuse.search(userText);
            let responseText = "Lo siento, no tengo información específica sobre eso. ¿Podrías intentar preguntar de otra forma? (Prueba 'experiencia', 'contacto', o 'stack')";
            let actions: any[] | undefined = undefined;

            if (results.length > 0) {
                const bestMatch = results[0].item;
                responseText = bestMatch.response;
                actions = bestMatch.actions;
            }

            setMessages(prev => [...prev, { type: 'agent', text: responseText, actions }]);
            setIsTyping(false);
        }, 1000 + Math.random() * 500); // Random delay 1s - 1.5s
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className={isPageMode ? "w-full h-full flex items-center justify-center p-4" : "fixed bottom-6 right-6 z-50 flex flex-col items-end"}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className={`
                            ${isPageMode ? "w-full max-w-4xl h-[80vh] border border-gray-700/50 bg-gray-900/50 backdrop-blur-xl" : "mb-4 w-80 sm:w-96 bg-gray-900/90 backdrop-blur-md border border-gray-700/50"} 
                            rounded-2xl shadow-2xl overflow-hidden flex flex-col
                        `}
                        style={{ maxHeight: isPageMode ? 'none' : '600px', height: isPageMode ? '100%' : '500px' }}
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-700/50 flex justify-between items-center backdrop-blur-md">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <Bot className="w-5 h-5 text-blue-400" />
                                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse border border-gray-900"></span>
                                </div>
                                <div>
                                    <h3 className="text-white font-medium text-sm">GaborGPT</h3>
                                    <p className="text-xs text-gray-400">Online &bull; AI Assistant</p>
                                </div>
                            </div>
                            <button
                                onClick={() => !isPageMode && setIsOpen(false)}
                                className={`text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 ${isPageMode ? 'hidden' : ''}`}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.type === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-gray-800/80 text-gray-200 border border-gray-700/50 rounded-bl-none'
                                        }`}>
                                        {msg.text}
                                        {msg.actions && (
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {msg.actions.map((action, i) => (
                                                    <a
                                                        key={i}
                                                        href={action.url}
                                                        className="inline-flex items-center text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded transition-colors"
                                                        target={action.url.startsWith('http') ? "_blank" : "_self"}
                                                        rel="noreferrer"
                                                    >
                                                        {action.label} ↗
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-800/80 rounded-2xl rounded-bl-none px-4 py-3 border border-gray-700/50 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-gray-900/50 border-t border-gray-700/50">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Escribe un mensaje..."
                                    className="w-full bg-gray-800/50 text-white placeholder-gray-500 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-700/50 text-sm"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim()}
                                    className="absolute right-1.5 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-[10px] text-gray-600">AI Simulated by Fuse.js &bull; No API Latency</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button (Only in widget mode) */}
            {!isPageMode && (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`p-4 rounded-full shadow-lg transition-all duration-300 relative group ${isOpen ? 'bg-gray-800 text-white' : 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
                        }`}
                >
                    <span className="absolute inset-0 rounded-full bg-white/20 animate-ping group-hover:animate-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                    {isOpen ? <X size={24} /> : <MessageSquare size={24} className="fill-current" />}

                    {/* Notification Badge if closed */}
                    {!isOpen && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-gray-900"></span>
                    )}
                </motion.button>
            )}
        </div>
    );
}
