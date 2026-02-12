
import { AnimatePresence, motion } from 'framer-motion';
import Fuse from 'fuse.js';
import { ChevronDown, Code2, Cpu, Layers, MessageSquare, Plus, Send, Sparkles, User, X, Zap } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { agentKnowledge } from '../data/agent-knowledge';

interface Props {
    mode?: 'widget' | 'page';
}

interface Message {
    type: 'user' | 'agent';
    text: string;
    actions?: ChatAction[];
}

interface ChatAction {
    label: string;
    url?: string;
    query?: string;
}

const SUGGESTION_CHIPS = [
    { icon: <Cpu size={18} />, label: '¿Cuál es tu experiencia?', query: 'experiencia' },
    { icon: <Layers size={18} />, label: '¿Qué stack usas?', query: 'stack tecnologias' },
    { icon: <Code2 size={18} />, label: '¿Qué servicios ofreces?', query: 'servicios' },
    { icon: <Zap size={18} />, label: '¿Cómo te contacto?', query: 'contacto' },
];

const SIDEBAR_ITEMS = [
    { title: 'Experiencia profesional', preview: 'Más de 11 años...', query: 'experiencia' },
    { title: 'Stack tecnológico', preview: 'React, Python, Node...', query: 'stack' },
    { title: 'Servicios y tarifas', preview: 'Desarrollo, automatización...', query: 'servicios' },
];

const FALLBACK_SUGGESTIONS: ChatAction[] = [
    { label: '¿Cuál es tu experiencia?', query: 'experiencia' },
    { label: '¿Qué stack usas?', query: 'stack tecnologias' },
    { label: '¿Qué servicios ofreces?', query: 'servicios' },
    { label: '¿Cómo te contacto?', query: 'contacto' },
];

export default function ChatWidget({ mode = 'widget' }: Props) {
    const isPageMode = mode === 'page';
    const [isOpen, setIsOpen] = useState(isPageMode);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (isPageMode) setIsOpen(true);

        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (mobile) setSidebarOpen(false);
            else setSidebarOpen(true);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [isPageMode]);

    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const fuse = React.useMemo(() => new Fuse(agentKnowledge, {
        keys: ['keywords'],
        threshold: 0.4,
    }), []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const processQuery = (query: string) => {
        const results = fuse.search(query);
        let responseText = "Lo siento, no tengo información específica sobre eso. Intenta preguntar sobre mi experiencia, stack, servicios o contacto. 🤔";
        let actions: ChatAction[] | undefined = FALLBACK_SUGGESTIONS;

        if (results.length > 0) {
            const bestMatch = results[0].item;
            responseText = bestMatch.response;
            actions = bestMatch.actions?.map((action) => ({ label: action.label, url: action.url }));
        }
        return { responseText, actions };
    };

    const handleSendMessage = async (overrideText?: string) => {
        const text = overrideText || inputValue.trim();
        if (!text) return;

        setMessages(prev => [...prev, { type: 'user', text }]);
        setInputValue('');
        setIsTyping(true);

        // Reset textarea height
        if (inputRef.current) {
            inputRef.current.style.height = 'auto';
        }

        setTimeout(() => {
            const { responseText, actions } = processQuery(text);
            setMessages(prev => [...prev, { type: 'agent', text: responseText, actions }]);
            setIsTyping(false);
        }, 800 + Math.random() * 700);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleTextareaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
        // Auto-resize
        e.target.style.height = 'auto';
        e.target.style.height = Math.min(e.target.scrollHeight, 200) + 'px';
    };

    const hasMessages = messages.length > 0;

    // ========================
    // WIDGET MODE (floating)
    // ========================
    if (!isPageMode) {
        return (
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            style={{ height: isMobile ? '70vh' : '500px', maxHeight: '600px' }}
                            className="mb-4 w-[calc(100vw-3rem)] sm:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                        >
                            <div style={widgetContainerStyle}>
                                {/* Header */}
                                <div style={widgetHeaderStyle}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={avatarStyle}>
                                            <img src="/images/profile/Gabor-Flandorffer-Profile.jpg" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="Gabor Profile" />
                                        </div>
                                        <div>
                                            <div style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>GaborGPT</div>
                                            <div style={{ color: '#6b7280', fontSize: '11px' }}>Online • AI Assistant</div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        style={closeButtonStyle}
                                        type="button"
                                        aria-label="Cerrar chat"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>

                                {/* Messages */}
                                <div style={widgetMessagesStyle}>
                                    {!hasMessages && (
                                        <div style={{ textAlign: 'center', padding: '24px 16px' }}>
                                            <div style={logoCircleStyle}>
                                                <Sparkles size={24} color="#a78bfa" />
                                            </div>
                                            <p style={{ color: '#9ca3af', fontSize: '13px', marginTop: '12px' }}>
                                                ¿En qué puedo ayudarte hoy?
                                            </p>
                                        </div>
                                    )}
                                    {messages.map((msg, idx) => (
                                        <MessageBubble
                                            key={idx}
                                            msg={msg}
                                            isPageMode={false}
                                            onQuerySelect={(query) => handleSendMessage(query)}
                                        />
                                    ))}
                                    {isTyping && <TypingIndicator />}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input */}
                                <div style={widgetInputAreaStyle}>
                                    <div style={widgetInputWrapperStyle}>
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder="Escribe un mensaje..."
                                            style={widgetInputStyle}
                                        />
                                        <button
                                            onClick={() => handleSendMessage()}
                                            disabled={!inputValue.trim()}
                                            type="button"
                                            aria-label="Enviar mensaje"
                                            style={{
                                                ...sendButtonStyle,
                                                opacity: inputValue.trim() ? 1 : 0.3,
                                            }}
                                        >
                                            <Send size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating Trigger */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    aria-label={isOpen ? 'Cerrar chat flotante' : 'Abrir chat flotante'}
                    aria-expanded={isOpen}
                    style={{ ...fabStyle, width: isMobile ? '48px' : '56px', height: isMobile ? '48px' : '56px' }}
                >
                    {isOpen ? <X size={isMobile ? 20 : 24} /> : <MessageSquare size={isMobile ? 20 : 24} className="fill-current" />}
                    {!isOpen && <span style={fabBadgeStyle}></span>}
                </motion.button>
            </div>
        );
    }

    // ========================
    // PAGE MODE (ChatGPT-like)
    // ========================
    return (
        <div style={pageRootStyle}>
            {/* Mobile Backdrop */}
            <AnimatePresence>
                {sidebarOpen && isMobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSidebarOpen(false)}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(0,0,0,0.6)',
                            zIndex: 40,
                            backdropFilter: 'blur(4px)'
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.aside
                        initial={{ x: -280, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -280, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            ...sidebarStyle,
                            position: isMobile ? 'absolute' : 'relative',
                            zIndex: 50,
                            height: '100%',
                            boxShadow: isMobile ? '4px 0 24px rgba(0,0,0,0.5)' : 'none'
                        }}
                    >
                        <div style={sidebarHeaderStyle}>
                            <button style={newChatBtnStyle} onClick={() => setMessages([])}>
                                <Plus size={16} />
                                <span>Nuevo chat</span>
                            </button>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                style={sidebarToggleStyle}
                                type="button"
                                aria-label="Ocultar panel lateral"
                                aria-expanded={sidebarOpen}
                            >
                                <ChevronDown size={16} style={{ transform: 'rotate(90deg)' }} />
                            </button>
                        </div>

                        <div style={sidebarContentStyle}>
                            <div style={{ padding: '12px 12px 6px', fontSize: '11px', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>
                                Temas populares
                            </div>
                            {SIDEBAR_ITEMS.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        handleSendMessage(item.query);
                                        if (isMobile) setSidebarOpen(false);
                                    }}
                                    style={sidebarItemStyle}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                                    }}
                                >
                                    <MessageSquare size={14} style={{ opacity: 0.5, flexShrink: 0 }} />
                                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>
                                        <div style={{ fontSize: '13px', color: '#e5e7eb' }}>{item.title}</div>
                                        <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '2px' }}>{item.preview}</div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Sidebar Footer */}
                        <div style={sidebarFooterStyle}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ ...avatarStyle, width: '28px', height: '28px' }}>
                                    <img src="/images/profile/Gabor-Flandorffer-Profile.jpg" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="Gabor Profile" />
                                </div>
                                <span style={{ fontSize: '13px', color: '#d1d5db' }}>GaborGPT v2.0</span>
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Main Chat Area */}
            <main style={mainAreaStyle}>
                {/* Top Bar */}
                <div style={topBarStyle}>
                    {!sidebarOpen && (
                        <button
                            onClick={() => setSidebarOpen(true)}
                            style={sidebarToggleStyle}
                            type="button"
                            aria-label="Mostrar panel lateral"
                            aria-expanded={sidebarOpen}
                        >
                            <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                        </button>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Sparkles size={16} color="#a78bfa" />
                        <span style={{ fontWeight: 600, fontSize: '14px', color: '#e5e7eb' }}>GaborGPT</span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#6b7280', background: 'rgba(167,139,250,0.1)', padding: '3px 10px', borderRadius: '12px', border: '1px solid rgba(167,139,250,0.15)' }}>
                        Fuse.js Engine
                    </div>
                </div>

                {/* Messages / Welcome */}
                <div style={messagesContainerStyle}>
                    {!hasMessages ? (
                        /* Welcome screen */
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={welcomeStyle}
                        >
                            {/* Logo */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.2 }}
                                style={bigLogoStyle}
                            >
                                <Sparkles size={36} color="#a78bfa" />
                            </motion.div>

                            <h1 style={welcomeTitleStyle}>
                                ¿En qué puedo ayudarte?
                            </h1>
                            <p style={welcomeSubtitleStyle}>
                                Soy GaborGPT — pregúntame sobre experiencia, stack, servicios o tarifas.
                            </p>

                            {/* Suggestion Chips Grid */}
                            <div style={chipsGridStyle}>
                                {SUGGESTION_CHIPS.map((chip, idx) => (
                                    <motion.button
                                        key={idx}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.3 + idx * 0.08 }}
                                        onClick={() => handleSendMessage(chip.query)}
                                        style={chipStyle}
                                        onMouseEnter={e => {
                                            const el = e.currentTarget as HTMLElement;
                                            el.style.borderColor = 'rgba(167,139,250,0.4)';
                                            el.style.background = 'rgba(167,139,250,0.08)';
                                            el.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={e => {
                                            const el = e.currentTarget as HTMLElement;
                                            el.style.borderColor = 'rgba(255,255,255,0.08)';
                                            el.style.background = 'rgba(255,255,255,0.03)';
                                            el.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <div style={chipIconStyle}>{chip.icon}</div>
                                        <span style={{ fontSize: '13px', color: '#d1d5db' }}>{chip.label}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        /* Messages */
                        <div style={messagesListStyle}>
                            {messages.map((msg, idx) => (
                                <MessageBubble
                                    key={idx}
                                    msg={msg}
                                    isPageMode={true}
                                    onQuerySelect={(query) => handleSendMessage(query)}
                                />
                            ))}
                            {isTyping && <TypingIndicator isPage />}
                            <div ref={messagesEndRef} />
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div style={inputAreaStyle}>
                    <div style={inputBoxStyle}>
                        <textarea
                            ref={inputRef}
                            value={inputValue}
                            onChange={handleTextareaInput}
                            onKeyDown={handleKeyDown}
                            placeholder="Escribe un mensaje a GaborGPT..."
                            rows={1}
                            style={textareaStyle}
                        />
                        <button
                            onClick={() => handleSendMessage()}
                            disabled={!inputValue.trim()}
                            type="button"
                            aria-label="Enviar mensaje"
                            style={{
                                ...pageSendBtnStyle,
                                opacity: inputValue.trim() ? 1 : 0.3,
                                cursor: inputValue.trim() ? 'pointer' : 'default',
                            }}
                        >
                            <Send size={16} />
                        </button>
                    </div>
                    <p style={disclaimerStyle}>
                        GaborGPT puede cometer errores. Impulsado por Fuse.js — sin latencia de API.
                    </p>
                </div>
            </main>
        </div>
    );
}

// ========================
// SUB-COMPONENTS
// ========================

function MessageBubble({ msg, isPageMode, onQuerySelect }: { msg: Message; isPageMode: boolean; onQuerySelect: (query: string) => void }) {
    const isUser = msg.type === 'user';

    if (!isPageMode) {
        // Widget mode bubble
        return (
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    display: 'flex',
                    justifyContent: isUser ? 'flex-end' : 'flex-start',
                    marginBottom: '12px',
                }}
            >
                <div style={{
                    maxWidth: '85%',
                    borderRadius: '16px',
                    padding: '10px 14px',
                    fontSize: '13px',
                    lineHeight: 1.5,
                    ...(isUser
                        ? { background: '#7c3aed', color: '#fff', borderBottomRightRadius: '4px' }
                        : { background: 'rgba(255,255,255,0.06)', color: '#e5e7eb', border: '1px solid rgba(255,255,255,0.08)', borderBottomLeftRadius: '4px' }
                    ),
                }}>
                    {msg.text}
                    {msg.actions && <ActionButtons actions={msg.actions} onQuerySelect={onQuerySelect} />}
                </div>
            </motion.div>
        );
    }

    // Page mode bubble (ChatGPT-style full-width rows)
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={isUser ? pageUserRowStyle : pageAgentRowStyle}
        >
            <div style={pageBubbleInnerStyle}>
                {/* Avatar */}
                <div style={isUser ? pageUserAvatarStyle : pageAgentAvatarStyle}>
                    {isUser ? <User size={16} color="#fff" /> : <img src="/images/profile/Gabor-Flandorffer-Profile.jpg" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="Gabor Profile" />}
                </div>
                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: '13px', color: isUser ? '#d1d5db' : '#a78bfa', marginBottom: '4px' }}>
                        {isUser ? 'Tú' : 'GaborGPT'}
                    </div>
                    <div style={{ fontSize: '14px', lineHeight: 1.7, color: '#e5e7eb' }}>
                        {msg.text}
                    </div>
                    {msg.actions && <ActionButtons actions={msg.actions} onQuerySelect={onQuerySelect} />}
                </div>
            </div>
        </motion.div>
    );
}

function ActionButtons({ actions, onQuerySelect }: { actions: ChatAction[]; onQuerySelect: (query: string) => void }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '6px', marginTop: '10px' }}>
            {actions.map((action, i) => {
                if (action.query) {
                    const query = action.query;
                    return (
                        <button
                            key={i}
                            type="button"
                            style={actionBtnStyle}
                            onClick={() => onQuerySelect(query)}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(167,139,250,0.2)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(167,139,250,0.1)'; }}
                        >
                            {action.label}
                        </button>
                    );
                }

                return (
                    <a
                        key={i}
                        href={action.url}
                        style={actionBtnStyle}
                        target={action.url && action.url.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(167,139,250,0.2)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(167,139,250,0.1)'; }}
                    >
                        {action.label} ↗
                    </a>
                );
            })}
        </div>
    );
}

function TypingIndicator({ isPage }: { isPage?: boolean }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            ...(isPage ? { padding: '16px 0', maxWidth: '768px', margin: '0 auto', width: '100%' } : { marginBottom: '12px' }),
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: isPage ? '12px' : '0',
                ...(isPage ? {} : {}),
            }}>
                {isPage && (
                    <div style={pageAgentAvatarStyle}>
                        <img src="/images/profile/Gabor-Flandorffer-Profile.jpg" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="Gabor Profile" />
                    </div>
                )}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: isPage ? 'transparent' : 'rgba(255,255,255,0.06)',
                    borderRadius: '16px',
                    padding: isPage ? '4px 0' : '10px 16px',
                    border: isPage ? 'none' : '1px solid rgba(255,255,255,0.06)',
                }}>
                    {[0, 1, 2].map(i => (
                        <motion.span
                            key={i}
                            animate={{
                                y: [0, -6, 0],
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.15,
                            }}
                            style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: '#a78bfa',
                                display: 'inline-block',
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}


// ========================
// STYLES (inline, no Tailwind dependency for the component)
// ========================

const pageRootStyle: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    height: 'calc(100vh - 80px)',
    background: '#0a0a0f',
    overflow: 'hidden',
    fontFamily: "'Inter', -apple-system, sans-serif",
};

const sidebarStyle: React.CSSProperties = {
    width: '280px',
    minWidth: '280px',
    background: '#111118',
    borderRight: '1px solid rgba(255,255,255,0.06)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
};

const sidebarHeaderStyle: React.CSSProperties = {
    padding: '14px 12px',
    display: 'flex',
    gap: '8px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
};

const newChatBtnStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 14px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    color: '#e5e7eb',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
};

const sidebarToggleStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '38px',
    height: '38px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    color: '#9ca3af',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
};

const sidebarContentStyle: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    padding: '4px 0',
};

const sidebarItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '10px 16px',
    width: '100%',
    background: 'transparent',
    border: 'none',
    color: '#d1d5db',
    textAlign: 'left' as const,
    cursor: 'pointer',
    transition: 'background 0.15s ease',
    borderRadius: '8px',
    margin: '0 6px',
    maxWidth: 'calc(100% - 12px)',
};

const sidebarFooterStyle: React.CSSProperties = {
    padding: '14px 16px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
};

const mainAreaStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    background: '#0a0a0f',
    position: 'relative',
};

const topBarStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
    minHeight: '50px',
};

const messagesContainerStyle: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
};

const welcomeStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: '40px 20px',
    textAlign: 'center',
};

const bigLogoStyle: React.CSSProperties = {
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(139,92,246,0.08))',
    border: '1px solid rgba(167,139,250,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    boxShadow: '0 0 40px rgba(167,139,250,0.15), 0 0 80px rgba(167,139,250,0.05)',
};

const welcomeTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 700,
    color: '#f3f4f6',
    marginBottom: '8px',
    letterSpacing: '-0.02em',
};

const welcomeSubtitleStyle: React.CSSProperties = {
    fontSize: '15px',
    color: '#6b7280',
    maxWidth: '480px',
    marginBottom: '40px',
    lineHeight: 1.6,
};

const chipsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    maxWidth: '520px',
    width: '100%',
};

const chipStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 18px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '14px',
    cursor: 'pointer',
    textAlign: 'left' as const,
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    color: '#d1d5db',
};

const chipIconStyle: React.CSSProperties = {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    background: 'rgba(167,139,250,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#a78bfa',
    flexShrink: 0,
};

const messagesListStyle: React.CSSProperties = {
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
};

const pageUserRowStyle: React.CSSProperties = {
    padding: '20px 0',
    background: 'transparent',
};

const pageAgentRowStyle: React.CSSProperties = {
    padding: '20px 0',
    background: 'rgba(255,255,255,0.02)',
};

const pageBubbleInnerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '14px',
    maxWidth: '768px',
    margin: '0 auto',
    width: '100%',
    padding: '0 24px',
    alignItems: 'flex-start',
};

const avatarStyle: React.CSSProperties = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(167,139,250,0.12)',
    border: '1px solid rgba(167,139,250,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
};

const pageUserAvatarStyle: React.CSSProperties = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
};

const pageAgentAvatarStyle: React.CSSProperties = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(167,139,250,0.12)',
    border: '1px solid rgba(167,139,250,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
};

const inputAreaStyle: React.CSSProperties = {
    padding: '16px 20px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(180deg, transparent, rgba(10,10,15,0.9))',
};

const inputBoxStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '0',
    maxWidth: '768px',
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '16px',
    padding: '4px 4px 4px 18px',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
};

const textareaStyle: React.CSSProperties = {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#f3f4f6',
    fontSize: '14px',
    lineHeight: 1.6,
    padding: '10px 0',
    resize: 'none',
    maxHeight: '200px',
    fontFamily: "'Inter', sans-serif",
};

const pageSendBtnStyle: React.CSSProperties = {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    background: '#7c3aed',
    border: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    flexShrink: 0,
};

const disclaimerStyle: React.CSSProperties = {
    fontSize: '11px',
    color: '#4b5563',
    marginTop: '10px',
    textAlign: 'center',
};

const actionBtnStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '12px',
    background: 'rgba(167,139,250,0.1)',
    color: '#c4b5fd',
    padding: '5px 12px',
    borderRadius: '8px',
    transition: 'all 0.15s ease',
    textDecoration: 'none',
    border: '1px solid rgba(167,139,250,0.15)',
    cursor: 'pointer',
};

const logoCircleStyle: React.CSSProperties = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'rgba(167,139,250,0.1)',
    border: '1px solid rgba(167,139,250,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
};

// Widget-specific styles
const widgetContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    background: '#111118',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.08)',
};

const widgetHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 16px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(167,139,250,0.04))',
};

const closeButtonStyle: React.CSSProperties = {
    width: '28px',
    height: '28px',
    borderRadius: '8px',
    border: 'none',
    background: 'rgba(255,255,255,0.06)',
    color: '#9ca3af',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
};

const widgetMessagesStyle: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
};

const widgetInputAreaStyle: React.CSSProperties = {
    padding: '12px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
};

const widgetInputWrapperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    padding: '4px 6px 4px 14px',
};

const widgetInputStyle: React.CSSProperties = {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#f3f4f6',
    fontSize: '13px',
    padding: '8px 0',
    fontFamily: "'Inter', sans-serif",
};

const sendButtonStyle: React.CSSProperties = {
    width: '30px',
    height: '30px',
    borderRadius: '8px',
    background: '#7c3aed',
    border: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    flexShrink: 0,
};

const fabStyle: React.CSSProperties = {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
    color: '#fff',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(124,58,237,0.4)',
    position: 'fixed' as const,
    bottom: '1.5rem',
    right: '1.5rem',
    zIndex: 50,
};

const fabBadgeStyle: React.CSSProperties = {
    position: 'absolute' as const,
    top: '-2px',
    right: '-2px',
    width: '12px',
    height: '12px',
    background: '#ef4444',
    borderRadius: '50%',
    border: '2px solid #0a0a0f',
};
