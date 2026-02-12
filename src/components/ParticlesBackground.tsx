
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export default function ParticlesBackground() {
    const [init, setInit] = useState(false);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const coarsePointer = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
        setEnabled(!reducedMotion && !coarsePointer);
    }, []);

    useEffect(() => {
        if (!enabled) {
            setInit(false);
            return;
        }

        let active = true;
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            if (active) {
                setInit(true);
            }
        });

        return () => {
            active = false;
        };
    }, [enabled]);

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 24,
            interactivity: {
                events: {
                    onClick: {
                        enable: false, // Disabled for performance
                        mode: "push",
                    },
                    onHover: {
                        enable: false, // Disabled for performance
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 2,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#38bdf8", // Sky blue to match theme
                },
                links: {
                    color: "#818cf8", // Indigo
                    distance: 150,
                    enable: false, // Disabled for performance - reduce calculations
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none" as const,
                    enable: true,
                    outModes: {
                        default: "bounce" as const,
                    },
                    random: false,
                    speed: 0.3, // Reduced speed for smoother performance
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000,
                    },
                    value: 14,
                },
                opacity: {
                    value: 0.2, // Reduced opacity for subtler effect
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
            detectRetina: false,
        }),
        [],
    );

    if (enabled && init) {
        return (
            <Particles
                id="tsparticles"
                options={options}
                className="absolute inset-0 -z-10"
            />
        );
    }

    return null;
}
