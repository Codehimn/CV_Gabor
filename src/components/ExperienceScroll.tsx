import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import {
    Briefcase,
    Calendar,
    Code,
    Code2,
    Cpu,
    Database,
    Globe,
    Layers,
    Layout,
    MapPin,
    Monitor,
    Rocket,
    Server,
    Smartphone,
    Terminal,
    Zap
} from "lucide-react";
import React, { useRef } from "react";

interface ExperienceItem {
    period: string;
    company: string;
    role: string;
    location: string;
    description: string;
    icon?: string;
    tags?: string[];
}

interface Props {
    items: ExperienceItem[];
}

// Magnetic Effect Hook for Premium Interaction
const useMagnetic = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const onMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        mouseX.set(clientX - centerX);
        mouseY.set(clientY - centerY);
    };

    const onMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const x = useSpring(mouseX, { stiffness: 150, damping: 15 });
    const y = useSpring(mouseY, { stiffness: 150, damping: 15 });

    return { x, y, onMouseMove, onMouseLeave };
};

const PerspectiveCard = ({ item, index, scrollXProgress }: { item: ExperienceItem, index: number, scrollXProgress: any }) => {
    const { x, y, onMouseMove, onMouseLeave } = useMagnetic();

    // Optimized safe range mapping to avoid Framer Motion WAAPI errors
    const base = index * 0.15;
    const start = Math.max(0, base - 0.1);
    const center = Math.max(start + 0.0001, base);
    const end = Math.max(center + 0.0001, Math.min(1, base + 0.1));
    const safeRange = [start, center, end];

    const rotateY = useTransform(scrollXProgress, safeRange, [30, 0, -30]);
    const scale = useTransform(scrollXProgress, safeRange, [0.85, 1.05, 0.85]);
    const opacity = useTransform(scrollXProgress, safeRange, [0.4, 1, 0.4]);

    const renderIcon = (iconName: string) => {
        const icons: Record<string, any> = {
            Briefcase, Code, Terminal, Cpu, Database, Globe, Layout, Server, Smartphone, Layers, Zap, Rocket, Code2, Monitor
        };
        const IconComponent = icons[iconName] || Briefcase;
        return <IconComponent size={24} />;
    };

    return (
        <motion.div
            style={{
                rotateY,
                scale,
                opacity,
                perspective: 1000,
                x, y
            }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="relative w-[320px] md:w-[550px] flex-shrink-0 py-24 group cursor-pointer"
        >
            {/* Border Beam Animated Effect */}
            <div className="absolute inset-[85px] md:inset-[85px] -z-10 rounded-[32px] overflow-hidden">
                <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-transparent to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px] animate-border-beam" />
            </div>

            {/* Background Year Parallax */}
            <motion.div
                style={{ x: useTransform(scrollXProgress, safeRange, [60, 0, -60]) }}
                className="absolute -top-4 -left-12 text-[10rem] md:text-[15rem] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap z-0 italic font-outfit"
            >
                {item.period.includes(" - ") ? item.period.split(" - ")[0] : item.period.split(" ")[0]}
            </motion.div>

            <article className="relative z-10 h-full glass-card p-10 md:p-14 flex flex-col border border-white/5 bg-black/40 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                {/* Dynamic Inner Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -mr-32 -mt-32 group-hover:bg-blue-500/20 transition-colors duration-1000" />

                <div className="flex justify-between items-start mb-10 relative z-20">
                    <div className="p-5 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 shadow-lg shadow-blue-500/5">
                        {renderIcon(item.icon || "Briefcase")}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-500/5 rounded-full border border-blue-500/10 text-blue-400 font-mono text-sm font-black uppercase tracking-widest">
                            <Calendar size={14} className="opacity-70" />
                            {item.period}
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-medium tracking-wide">
                            <MapPin size={12} className="opacity-50" />
                            {item.location}
                        </div>
                    </div>
                </div>

                <div className="flex-grow relative z-20">
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight tracking-tight group-hover:text-blue-200 transition-colors">
                        {item.company}
                    </h3>
                    <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent mb-8">
                        {item.role}
                    </p>
                    <p className="text-slate-300/90 leading-relaxed text-lg font-medium border-l-2 border-blue-500/30 pl-6 mb-10">
                        {item.description}
                    </p>
                </div>

                {item.tags && (
                    <div className="flex flex-wrap gap-2.5 pt-8 border-t border-white/5 relative z-20">
                        {item.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-4 py-1.5 bg-white/5 rounded-xl text-xs font-bold text-slate-300 border border-white/5 hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-white transition-all duration-300 cursor-default shadow-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </article>

            {/* Growth Indicator Dot */}
            <motion.div
                style={{ scale: useTransform(scrollXProgress, safeRange, [0.5, 1.2, 0.5]) }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-30"
            />
        </motion.div>
    );
};

const TechOrb = ({ icon: Icon, delay, initialX, initialY, scrollProgress }: any) => {
    const y = useTransform(scrollProgress, [0, 1], [0, -300 * (delay + 1)]);

    return (
        <motion.div
            style={{ y, left: `${initialX}%`, top: `${initialY}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ delay, duration: 2, ease: "easeOut" }}
            className="absolute z-0 pointer-events-none"
        >
            <Icon className="w-24 h-24 text-blue-500/20 blur-[2px]" />
        </motion.div>
    );
};

export default function ExperienceScroll({ items }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({
        container: containerRef,
    });

    return (
        <div className="w-full relative py-20 bg-black min-h-[800px] flex flex-col justify-center overflow-hidden">
            {/* Tech Background Parallax Orbs */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <TechOrb icon={Code2} delay={0.1} initialX={5} initialY={15} scrollProgress={scrollXProgress} />
                <TechOrb icon={Database} delay={0.4} initialX={75} initialY={10} scrollProgress={scrollXProgress} />
                <TechOrb icon={Zap} delay={0.7} initialX={85} initialY={60} scrollProgress={scrollXProgress} />
                <TechOrb icon={Globe} delay={0.3} initialX={25} initialY={75} scrollProgress={scrollXProgress} />
                <TechOrb icon={Cpu} delay={1.1} initialX={10} initialY={55} scrollProgress={scrollXProgress} />
                <TechOrb icon={Rocket} delay={1.4} initialX={90} initialY={25} scrollProgress={scrollXProgress} />
                <TechOrb icon={Monitor} delay={0.9} initialX={45} initialY={85} scrollProgress={scrollXProgress} />
                <TechOrb icon={Terminal} delay={0.6} initialX={55} initialY={5} scrollProgress={scrollXProgress} />
            </div>

            {/* Connection Line (Growth Timeline) */}
            <div className="absolute top-[50%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent z-10 pointer-events-none" />

            <div
                ref={containerRef}
                className="overflow-x-scroll hide-scrollbar flex snap-x snap-mandatory gap-24 md:gap-40 px-[15%] md:px-[25%] lg:px-[35%] active:cursor-grabbing pb-32 pt-10 relative z-20"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((item, index) => (
                    <div key={index} className="snap-center flex-shrink-0">
                        <PerspectiveCard
                            item={item}
                            index={index}
                            scrollXProgress={scrollXProgress}
                        />
                    </div>
                ))}
            </div>

            {/* Ultra-Premium Progress Track */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 z-30">
                <div className="flex gap-4">
                    {items.map((_, i) => (
                        <motion.div
                            key={i}
                            className="h-1.5 rounded-full"
                            style={{
                                width: useTransform(scrollXProgress,
                                    [i * 0.15 - 0.05, i * 0.15, i * 0.15 + 0.05],
                                    [12, 48, 12]
                                ),
                                backgroundColor: useTransform(scrollXProgress,
                                    [i * 0.15 - 0.05, i * 0.15, i * 0.15 + 0.05],
                                    ["rgba(59, 130, 246, 0.1)", "rgba(59, 130, 246, 0.9)", "rgba(59, 130, 246, 0.1)"]
                                ),
                                boxShadow: useTransform(scrollXProgress,
                                    [i * 0.15 - 0.05, i * 0.15, i * 0.15 + 0.05],
                                    ["none", "0 0 15px rgba(59, 130, 246, 0.5)", "none"]
                                )
                            }}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-6 text-[11px] text-slate-400 font-mono font-black uppercase tracking-[0.5em] opacity-50 bg-white/5 py-2 px-6 rounded-full border border-white/5 backdrop-blur-md">
                    <span className="animate-pulse">Scroll to Journey</span>
                </div>
            </div>

            <style>{`
                @keyframes border-beam {
                    0% { transform: translateX(-100%) translateY(-100%) rotate(0deg); }
                    100% { transform: translateX(100%) translateY(100%) rotate(360deg); }
                }
                .animate-border-beam {
                    width: 200%;
                    height: 200%;
                    background: conic-gradient(from 0deg, transparent, #3b82f6, #8b5cf6, #06b6d4, transparent);
                    animation: border-beam 4s linear infinite;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
