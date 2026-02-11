import { motion } from "framer-motion";
import {
    Briefcase,
    Code,
    Cpu,
    Database,
    Globe,
    Layers,
    Layout,
    Search,
    Server,
    Settings,
    Shield,
    Smartphone,
    Terminal,
    Zap
} from "lucide-react";
import { useRef } from "react";

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

export default function ExperienceScroll({ items }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    const renderIcon = (iconName: string) => {
        const icons: Record<string, any> = {
            Briefcase, Code, Terminal, Cpu, Database, Globe, Layout, Server, Smartphone, Layers, Zap, Shield, Search, Settings
        };
        const IconComponent = icons[iconName] || Briefcase;
        return <IconComponent size={24} />;
    };

    return (
        <div className="w-full relative group">
            {/* Decorative background gradients for the scroll area */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />

            {/* Scroll Container */}
            <div
                ref={containerRef}
                className="overflow-x-auto pb-12 pt-4 hide-scrollbar cursor-grab active:cursor-grabbing"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <div className="flex gap-6 px-4 md:px-32 w-max mx-auto">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    delay: index * 0.1
                                }
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="relative w-[350px] md:w-[450px] flex-shrink-0"
                        >
                            <article
                                tabIndex={0}
                                role="article"
                                aria-label={`${item.role} at ${item.company}`}
                                className="h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden group/card hover:border-blue-500/30 focus-visible:border-blue-500/30 focus-visible:ring-2 focus-visible:ring-blue-500 outline-none transition-all duration-500 cursor-default"
                            >

                                {/* Hover/Focus Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover/card:opacity-100 group-focus-visible/card:opacity-100 transition-opacity duration-500" />

                                {/* Header */}
                                <div className="relative z-10 flex justify-between items-start mb-6">
                                    <div className="p-3 bg-blue-500/20 rounded-2xl border border-blue-500/30 text-blue-400 group-hover/card:text-blue-300 group-focus-visible/card:text-blue-300 group-hover/card:scale-110 group-focus-visible/card:scale-110 transition-all duration-300">
                                        {renderIcon(item.icon || "Briefcase")}
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-sm font-mono text-blue-400 mb-1">
                                            {item.period}
                                        </span>
                                        <span className="block text-xs text-slate-500">
                                            {item.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover/card:text-blue-200 group-focus-visible/card:text-blue-200 transition-colors">
                                        {item.company}
                                    </h3>
                                    <p className="text-lg text-blue-400 font-medium mb-4">
                                        {item.role}
                                    </p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                {item.tags && (
                                    <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                                        {item.tags.slice(0, 4).map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/5 group-hover/card:bg-white/10 group-focus-visible/card:bg-white/10 hover:border-white/20 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {item.tags.length > 4 && (
                                            <span className="px-3 py-1 text-xs text-slate-500">
                                                +{item.tags.length - 4}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </article>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator Hint */}
            <div className="flex justify-center gap-2 mt-4 opacity-50">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
            <p className="text-center text-xs text-slate-600 mt-2 font-mono uppercase tracking-widest">
                Scroll to explore
            </p>
        </div>
    );
}
