import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
// Import Lucide icons dynamically or map them if passed as strings
import * as LucideIcons from "lucide-react";

interface ExperienceItem {
    period: string;
    company: string;
    role: string;
    location: string;
    description: string;
    icon: string; // Icon name from Lucide
    tags?: string[];
}

interface Props {
    items: ExperienceItem[];
}

export default function ExperienceTimeline({ items }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    // Dynamic Icon Renderer
    const renderIcon = (iconName: string) => {
        const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Briefcase;
        return <IconComponent size={24} />;
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            {/* Main Stage: Active Card */}
            <div className="relative h-[400px] mb-12 perspective-1000">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 20, rotateY: -10 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        exit={{ opacity: 0, x: -20, rotateY: 10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 w-full"
                    >
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl h-full flex flex-col md:flex-row gap-8 items-start md:items-center relative overflow-hidden group">

                            {/* Decorative background glow */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] group-hover:bg-blue-500/30 transition-colors duration-500"></div>

                            {/* Left: Huge Year & Icon */}
                            <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4 z-10">
                                <span className="text-6xl md:text-8xl font-black text-white/5 font-mono select-none absolute -left-4 -top-4 md:static md:text-white/10 transition-colors">
                                    {items[activeIndex].period.split(' - ')[0]}
                                </span>
                                <div className="p-4 bg-blue-600/20 rounded-2xl border border-blue-500/30 text-blue-400">
                                    {renderIcon(items[activeIndex].icon)}
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="flex-1 z-10 w-full">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 border-b border-white/5 pb-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                                            {items[activeIndex].company}
                                        </h3>
                                        <p className="text-lg text-blue-400 font-medium">
                                            {items[activeIndex].role}
                                        </p>
                                    </div>
                                    <div className="text-right mt-2 md:mt-0">
                                        <p className="text-sm font-mono text-gray-400">{items[activeIndex].period}</p>
                                        <p className="text-xs text-gray-500">{items[activeIndex].location}</p>
                                    </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                                    {items[activeIndex].description}
                                </p>

                                {/* Tags if available */}
                                {items[activeIndex].tags && (
                                    <div className="flex flex-wrap gap-2">
                                        {items[activeIndex].tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-blue-300 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Track */}
            <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2 rounded-full"></div>

                <div className="flex justify-between items-center overflow-x-auto py-8 px-4 no-scrollbar gap-8 md:gap-0 mask-image-gradient">
                    {items.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`relative group flex flex-col items-center gap-3 transition-all duration-300 flex-shrink-0 ${isActive ? 'scale-110' : 'opacity-50 hover:opacity-100 hover:scale-105'}`}
                            >
                                {/* Dot */}
                                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${isActive ? 'bg-blue-500 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]' : 'bg-slate-900 border-slate-600 group-hover:border-blue-400'}`}></div>

                                {/* Label */}
                                <div className="text-center">
                                    <span className={`block text-xs font-bold transition-colors ${isActive ? 'text-blue-400' : 'text-gray-500'}`}>
                                        {item.company}
                                    </span>
                                    <span className={`block text-[10px] font-mono transition-colors ${isActive ? 'text-white' : 'text-gray-600'}`}>
                                        {item.period.split(' - ')[0]}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="text-center text-gray-600 text-xs mt-4 animate-pulse">
                Select a timeline point to view details
            </div>
        </div>
    );
}
