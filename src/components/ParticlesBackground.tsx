
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export default function ParticlesBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 30, // Reduced to 30 for better performance
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
                    value: 20, // Reduced from 30 to 20 for better performance
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

    if (init) {
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
