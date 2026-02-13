
export interface AgentResponse {
    id: string;
    keywords: string[];
    response: string;
    actions?: { label: string; url: string }[];
    category: 'professional' | 'personal' | 'technical' | 'contact';
}

/**
 * IMPORTANT NOTES FOR AGENTS / AI ASSISTANTS:
 * - Gabor currently lives in Medellín, Colombia (NOT Berlin anymore).
 * - Profile image is at: /images/profile/Gabor-Flandorffer-Profile.jpg
 * - Company logos are at: /images/logos/ (sp-global.png, zattoo.png, yaxa.png, conectsen.png, freelancer.png, madisa.png)
 * - All public assets live under /public/images/
 * - The website supports i18n (EN/ES) via src/i18n.ts
 */

export const agentKnowledge: AgentResponse[] = [
    // --- Professional ---
    {
        id: 'bio',
        keywords: ['quien eres', 'who are you', 'sobre ti', 'about', 'bio', 'presentación', 'resumen'],
        response: "Soy Gabor Flandorffer, un Desarrollador Full-Stack Senior y Especialista en Automatización con más de 11 años de experiencia. Me especializo en Python, Django, automatización con Puppeteer/AutoIt, y arquitectura backend. He trabajado en Alemania, Colombia y de forma remota para todo el mundo.",
        category: 'professional'
    },
    {
        id: 'experience',
        keywords: ['experiencia', 'experience', 'trabajo', 'work', 'trayectoria', 'career'],
        response: "Tengo más de 11 años de experiencia profesional en desarrollo de software. Trabajé como Backend Developer en Zattoo (Berlín), fui Senior Automation Developer en Yaxa, IoT Developer en Conectsen, y soy freelance desde 2016. Antes de eso, 5 años como técnico informático en MADISA.",
        actions: [{ label: "Ver Timeline", url: "/experience" }],
        category: 'professional'
    },
    {
        id: 'services',
        keywords: ['servicios', 'services', 'que haces', 'what do you do', 'freelance', 'contratar'],
        response: "Ofrezco desarrollo backend con Python/Django, automatización de procesos (RPA con Puppeteer, AutoIt, Selenium), desarrollo IoT, integración de APIs, web scraping a escala, y consultoría técnica. Me especializo en crear sistemas que ahorran tiempo y dinero.",
        category: 'professional'
    },
    {
        id: 'stack',
        keywords: ['stack', 'tecnologias', 'tech', 'lenguajes', 'skills', 'habilidades'],
        response: "Mi stack principal: Python (asyncio, Django, FastAPI), C#.NET/VB.NET, JavaScript/TypeScript. Bases de datos: PostgreSQL, MySQL, MongoDB, Redis. DevOps: Docker, GitHub Actions, Jenkins, AWS, GCP. Automatización: Puppeteer, AutoIt, OpenCV, Selenium. También manejo PHP, Ruby, C++, Angular, Vue.",
        actions: [{ label: "Ver Skills", url: "/skills" }],
        category: 'technical'
    },
    {
        id: 'certifications',
        keywords: ['certificados', 'certifications', 'cursos', 'courses', 'educación', 'education', 'titulos'],
        response: "Tengo el Google IT Automation with Python Professional Certificate (7 sub-cursos), además de certificaciones en React, JavaScript, PHP, jQuery, CSS, HTML, SQL Intermediate, C++ y Ruby por SoloLearn. También soy conferencista — di una charla sobre Asincronismo en Python en un Meetup en Cali.",
        actions: [{ label: "Ver Credenciales", url: "/#education" }],
        category: 'professional'
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
        category: 'personal'
    },
    {
        id: 'origin',
        keywords: ['de donde eres', 'origen', 'nacionalidad', 'pais', 'donde vives', 'ubicación', 'location'],
        response: "Actualmente vivo en Medellín, Colombia 🇨🇴. Anteriormente viví en Berlín, Alemania, donde trabajé en Zattoo. Estoy abierto a trabajo remoto para cualquier parte del mundo.",
        category: 'personal'
    },
    {
        id: 'tools',
        keywords: ['herramientas', 'tools', 'toolset', 'editor', 'ide', 'que usas'],
        response: "Mi toolset diario incluye: VS Code como editor, Git para control de versiones, Docker para contenedores, Postman para APIs, Obsidian para notas, y ChatGPT/Claude/DeepSeek como asistentes de IA.",
        category: 'technical'
    },

    // --- Contact ---
    {
        id: 'contact',
        keywords: ['contacto', 'contact', 'email', 'correo', 'llamar', 'telefono', 'whatsapp'],
        response: "Puedes contactarme por email (gabor285@gmail.com), WhatsApp (+49 1789752993), o visitar mi web. Suelo responder en menos de 24 horas.",
        actions: [
            { label: "Email", url: "mailto:gabor285@gmail.com" },
            { label: "WhatsApp", url: "https://wa.me/491789752993" }
        ],
        category: 'contact'
    },
    {
        id: 'hello',
        keywords: ['hola', 'hello', 'hi', 'hey', 'saludos', 'buenas'],
        response: "¡Hola! Soy GaborGPT. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre mis servicios, experiencia, stack tecnológico, o certificaciones.",
        category: 'personal'
    }
];
