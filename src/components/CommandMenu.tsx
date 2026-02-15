
import { Command } from 'cmdk';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Briefcase,
    Code2,
    FileText,
    Github,
    LayoutTemplate,
    Linkedin,
    Mail,
    Moon,
    Search,
    Terminal,
    User
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CommandMenu() {
    const [open, setOpen] = useState(false);

    // Toggle with Cmd+K or Ctrl+K or custom event
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        const handleToggle = () => setOpen((open) => !open);

        document.addEventListener('keydown', down);
        window.addEventListener('toggle-command-menu', handleToggle);

        return () => {
            document.removeEventListener('keydown', down);
            window.removeEventListener('toggle-command-menu', handleToggle);
        };
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    const navigateTo = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            // Use Lenis if available or native scroll
            const lenis = (window as any).lenis;
            if (lenis) {
                lenis.scrollTo(id, { offset: -80 });
            } else {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Command Palette */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.15 }}
                        className="relative w-full max-w-lg bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden"
                    >
                        <Command label="Global Command Menu" className="bg-transparent">

                            <div className="flex items-center border-b border-gray-800 px-4 py-3">
                                <Search className="w-5 h-5 text-gray-500 mr-3" />
                                <Command.Input
                                    placeholder="Type a command or search..."
                                    className="w-full bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none text-sm"
                                />
                                <div className="flex items-center gap-1">
                                    <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-gray-700 bg-gray-800 px-1.5 font-mono text-[10px] font-medium text-gray-400">
                                        <span className="text-xs">ESC</span>
                                    </kbd>
                                </div>
                            </div>

                            <Command.List className="max-h-[300px] overflow-y-auto p-2 custom-scrollbar">
                                <Command.Empty className="py-6 text-center text-sm text-gray-500">
                                    No results found.
                                </Command.Empty>

                                <Command.Group heading="Navigation" className="text-gray-500 text-xs font-medium mb-2 px-2">
                                    <CommandItem icon={User} onSelect={() => runCommand(() => navigateTo('#about'))}>About Me</CommandItem>
                                    <CommandItem icon={Briefcase} onSelect={() => runCommand(() => navigateTo('#experience'))}>Experience</CommandItem>
                                    <CommandItem icon={Code2} onSelect={() => runCommand(() => navigateTo('#skills'))}>Skills & Stack</CommandItem>
                                    <CommandItem icon={LayoutTemplate} onSelect={() => runCommand(() => navigateTo('#projects'))}>Projects</CommandItem>
                                    <CommandItem icon={FileText} onSelect={() => runCommand(() => navigateTo('#education'))}>Education</CommandItem>
                                    <CommandItem icon={Mail} onSelect={() => runCommand(() => navigateTo('#contact'))}>Contact</CommandItem>
                                </Command.Group>

                                <Command.Group heading="Socials" className="text-gray-500 text-xs font-medium mb-2 px-2 mt-2">
                                    <CommandItem icon={Github} onSelect={() => runCommand(() => window.open('https://github.com/codehimn', '_blank'))}>GitHub</CommandItem>
                                    <CommandItem icon={Linkedin} onSelect={() => runCommand(() => window.open('https://linkedin.com/in/gabor-flandorffer', '_blank'))}>LinkedIn</CommandItem>
                                </Command.Group>

                                <Command.Group heading="Actions" className="text-gray-500 text-xs font-medium mb-2 px-2 mt-2">
                                    <CommandItem icon={Terminal} onSelect={() => runCommand(() => (window as any).toggleTerminal?.())}>Open Integrated Terminal</CommandItem>
                                    <CommandItem icon={Moon} onSelect={() => runCommand(() => console.log('Toggle Theme'))}>Toggle Dark Mode</CommandItem>
                                </Command.Group>

                            </Command.List>
                        </Command>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

function CommandItem({ children, icon: Icon, onSelect }: any) {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 rounded-lg cursor-pointer aria-selected:bg-blue-600 aria-selected:text-white transition-colors"
        >
            <Icon className="w-4 h-4 opacity-70" />
            <span>{children}</span>
        </Command.Item>
    );
}
