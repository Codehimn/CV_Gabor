
export interface AgentResponse {
    id: string;
    keywords: string[];
    response: string;
    actions?: { label: string; url: string }[];
    category: 'professional' | 'personal' | 'technical' | 'contact';
}

export const agentKnowledge: AgentResponse[] = [
    // --- Professional ---
    {
        id: 'bio',
        keywords: ['quien eres', 'who are you', 'sobre ti', 'about', 'bio', 'presentación', 'resumen'],
        response: "Soy Gabor Flandorffer, un desarrollador full-stack especializado en automatización y soluciones web modernas. Transformo ideas complejas en código eficiente.",
        category: 'professional'
    },
    {
        id: 'experience',
        keywords: ['experiencia', 'experience', 'trabajo', 'work', 'trayectoria', 'career'],
        response: "Tengo más de 11 años de experiencia en tecnología. He trabajado en empresas como Zattoo y liderado proyectos de automatización de alto impacto.",
        actions: [{ label: "Ver Timeline", url: "/experience" }],
        category: 'professional'
    },
    {
        id: 'services',
        keywords: ['servicios', 'services', 'que haces', 'what do you do', 'freelance', 'contratar'],
        response: "Ofrezco desarrollo web, automatización de procesos (RPA/Python), y consultoría técnica. Me especializo en crear sistemas que ahorran tiempo y dinero.",
        category: 'professional'
    },
    {
        id: 'stack',
        keywords: ['stack', 'tecnologias', 'tech', 'lenguajes', 'skills', 'habilidades'],
        response: "Mi stack principal incluye React, Astro, Python, y Node.js. También tengo experiencia profunda en bases de datos SQL/NoSQL y cloud services.",
        actions: [{ label: "Ver Skills", url: "/skills" }],
        category: 'technical'
    },

    // --- Personal / "Cool" ---
    {
        id: 'pricing',
        keywords: ['precio', 'price', 'costo', 'cost', 'rates', 'cuanto cobras', 'tarifas'],
        response: "Cada proyecto es único. Mis tarifas para consultoría comienzan en $80/hr, pero prefiero valorar proyectos por entregables. ¿Hablamos de tu idea?",
        actions: [{ label: "Contactar", url: "/contact" }],
        category: 'professional'
    },
    {
        id: 'joke',
        keywords: ['chiste', 'joke', 'bromas', 'funny', 'algo gracioso'],
        response: "¿Por qué los programadores confunden Halloween con Navidad? Porque OCT 31 == DEC 25. 🎃🎄",
        category: 'personal' // Just for fun
    },
    {
        id: 'origin',
        keywords: ['de donde eres', 'origen', 'nacionalidad', 'pais', 'donde vives'],
        response: "Soy un ciudadano del mundo digital, pero actualmente opero desde [Tu Ubicación].",
        category: 'personal'
    },

    // --- Contact ---
    {
        id: 'contact',
        keywords: ['contacto', 'contact', 'email', 'correo', 'llamar', 'telefono'],
        response: "La forma más rápida de contactarme es por email o LinkedIn. Suelo responder en menos de 24 horas.",
        actions: [
            { label: "Email", url: "mailto:tuemail@example.com" },
            { label: "LinkedIn", url: "https://linkedin.com/in/tuperfil" }
        ],
        category: 'contact'
    },
    {
        id: 'hello',
        keywords: ['hola', 'hello', 'hi', 'hey', 'saludos', 'buenas'],
        response: "¡Hola! Soy GaborGPT. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre mis servicios, experiencia o stack tecnológico.",
        category: 'personal'
    }
];
