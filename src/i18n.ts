export const translations = {
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            education: "Education",
            contact: "Contact",
            cta: "Let's Talk",
            whatsapp_msg: "Hi Gabor! I saw your portfolio and I'd like to chat."
        },
        hero: {
            greeting: "Hi, I'm",
            badge: "Available for new opportunities",
            roles: "Senior Full-Stack Developer,Automation Architect,Backend Specialist,Problem Solver",
            description: "{years}+ years architecting zero-latency backend systems, mission-critical automation pipelines, and high-impact full-stack solutions.",
            years: "Years Experience",
            projects: "Projects",
            cta_primary: "Explore My Work",
            cta_secondary: "Get In Touch",
            scroll: "Scroll down"
        },
        about: {
            label: "About Me",
            title: "Building the future, one line of code at a time.",
            p1: "I'm a Senior Full-Stack Developer & Automation Specialist with over {years} years of professional experience. I've worked across startups and established companies in Germany, Colombia, and remotely worldwide.",
            p2: "My expertise spans from building robust Django/Python backends and designing automation pipelines with Puppeteer and AutoIt, to deploying scalable infrastructure with Docker, AWS, and CI/CD. I'm passionate about writing clean, efficient code that solves real-world problems.",
            highlights: {
                backend: "Backend Expert",
                automation: "Automation Master",
                devops: "DevOps & Cloud",
                problem: "Problem Solver"
            },
            location: "Based in Medellín, Colombia",
            remote: "Open to remote worldwide"
        },
        experience: {
            label: "Professional Journey",
            title: "Where I've <span class=\"gradient-text\">Made Impact</span>",
            subtitle: "From IT support to senior automation and backend development — a journey of continuous growth.",
            present: "Present",
            items: [
                {
                    company: "Zattoo",
                    role: "Backend Developer",
                    period: "Dec 2019 — Jul 2023",
                    location: "Berlin, Germany",
                    description: "Developed and maintained internal tools using Django. Collaborated with cross-functional teams to unify assets and style sources. Implemented pytest and GitHub Actions for testing and CI/CD. Designed and developed an internal mocking tool for API testing.",
                    tags: ["Django", "Python", "pytest", "GitHub Actions", "REST APIs", "Docker", "Mocking"]
                },
                {
                    company: "Conectsen",
                    role: "IoT Developer",
                    period: "Aug 2019 — Oct 2019",
                    location: "Colombia / Remote",
                    description: "Created an IoT solution to monitor diverse assets (vehicles ODB2, helmets, cameras). Enhanced data collection accuracy with real-time communication and analysis algorithms. Customized solutions for different asset types.",
                    tags: ["Python", "IoT", "Real-time", "WebSockets", "ODB2", "Sensor Data"]
                },
                {
                    company: "Yaxa",
                    role: "Senior Automation Developer",
                    period: "Oct 2017 — Jul 2019",
                    location: "Colombia",
                    description: "Platform maintenance and creation of automatic messaging, purchase, and status update bots. Managed massive product uploads and price updates. Designed and implemented backend/web apps for internal clients via APIs.",
                    tags: ["Automation", "Bots", "API Integration", "Backend", "Scaling"]
                },
                {
                    company: "Yaxa",
                    role: "Software Developer",
                    period: "Sep 2016 — Oct 2017",
                    location: "Colombia",
                    description: "Automated repetitive tasks in logistics, accounting, and customer service. Focused on development automation, new functionalities, and system updates to improve operational efficiency.",
                    tags: ["C#.NET", "VB.NET", "VBA", "SQL Server", "Automation"]
                },
                {
                    company: "Freelancer.com",
                    role: "Automation Developer",
                    period: "Sep 2016 — Present",
                    location: "Remote",
                    description: "Designed and built automation infrastructures and tools from scratch. Integrated code with various organizational and third-party APIs. Developed communication test builder tools and utilized image analysis (OpenCV/ImageMagick).",
                    tags: ["Puppeteer", "AutoIt", "OpenCV", "ImageMagick", "Web Scraping", "Cython"]
                },
                {
                    company: "MADISA S.A.S",
                    role: "Computer Technician",
                    period: "Feb 2010 — Dec 2015",
                    location: "Colombia",
                    description: "Installed and configured computers/software for customers. Provided support and improvements for the GSBase management platform, contributing to the development of new settings.",
                    tags: ["GSBase", "Hardware", "IT Support", "Networking", "Technical Setup"]
                }
            ]
        },
        skills: {
            label: "Technical Arsenal",
            title: "The Full <span class=\"gradient-text\">Stack & Beyond</span>",
            subtitle: "A deep, multi-disciplinary toolkit ranging from low-level automation to high-level system architecture."
        },
        projects: {
            label: "Portfolio",
            title: "Featured <span class=\"gradient-text\">Projects</span>",
            subtitle: "Real-world solutions that demonstrate technical depth and business impact.",
            items: [
                {
                    title: "Conectsen — IoT Platform",
                    role: "IoT Developer",
                    period: "Aug — Oct 2019",
                    description: "Built real-time asset monitoring platform processing OBD2, cameras, and helmet data. Designed low-latency communication algorithms for continuous sensor streaming.",
                    tags: ["Python", "IoT", "Real-time", "WebSockets", "OBD2"]
                },
                {
                    title: "Automation Infrastructure",
                    role: "Freelance — Automation Developer",
                    period: "2016 — Present",
                    description: "Designed and maintained automation infrastructure for diverse clients on Freelancer.com. Built systems integrating APIs, automated testing, image analysis with OpenCV, and web scraping at scale.",
                    tags: ["Puppeteer", "AutoIt", "OpenCV", "APIs", "Web Scraping"]
                },
                {
                    title: "Internal Mocking Tool",
                    role: "Backend Developer @ Zattoo",
                    period: "2019 — 2023",
                    description: "Designed a custom API mocking tool used by the entire engineering team to test against production-like responses without hitting real services. Reduced test flakiness by 60%+.",
                    tags: ["Django", "Python", "REST", "Testing", "Docker"]
                },
                {
                    title: "CI/CD Pipeline Automation",
                    role: "Backend Developer @ Zattoo",
                    period: "2020 — 2023",
                    description: "Implemented end-to-end CI/CD with GitHub Actions and pytest. Automated deployment, testing, and code quality checks, reducing deployment time from hours to minutes.",
                    tags: ["GitHub Actions", "pytest", "Docker", "CI/CD", "Bash"]
                }
            ]
        },
        education: {
            label: "Credentials",
            title: "Education & <span class=\"gradient-text\">Recognition</span>",
            subtitle: "A lifetime of learning, from professional certificates to international speaking.",
            cert_title: "Professional Certifications",
            speaking_title: "Speaking & Community",
            languages_title: "Languages",
            competencies_title: "Core Competencies",
            view_talk: "View Talk",
            certs: [
                {
                    title: "Google IT Automation with Python Professional Certificate",
                    issuer: "Google / Coursera"
                },
                {
                    title: "Python Sub-Specializations",
                    issuer: "Google IT Automation",
                    description: "Operating Systems, Troubleshooting & Debugging, Configuration Management, Cloud."
                },
                {
                    title: "Full Stack & Web Architecture",
                    issuer: "SoloLearn / Various",
                    description: "React, JavaScript, PHP, jQuery, CSS/HTML Fundamentals."
                },
                {
                    title: "SQL & Data Management Expert",
                    issuer: "SoloLearn",
                    description: "SQL Intermediate certified."
                },
                {
                    title: "Language Mastery (C++, Ruby)",
                    issuer: "SoloLearn / Various"
                }
            ],
            talks: [
                {
                    title: "Asynchronism: Possible Errors and How to Solve Them",
                    venue: "Meetup Talk — Guest Speaker"
                }
            ],
            languages: [
                { name: "Spanish", level: "Mother Tongue" },
                { name: "English", level: "B2 — Upper Intermediate" },
                { name: "German", level: "A2 — Elementary" }
            ],
            softSkills: [
                { name: "Team Collaboration" },
                { name: "Problem Solving" },
                { name: "Adaptability" },
                { name: "Creative Thinking" },
                { name: "Self-taught Learner" },
                { name: "Cross-functional Collab" }
            ]
        },
        contact: {
            label: "Let's Connect",
            title: "Ready to <span class=\"gradient-text\">Build Something Great?</span>",
            text: "I'm currently <strong>open to new opportunities</strong> — whether it's a full-time role, freelance project, or an exciting collaboration. Let's talk!",
            whatsapp_label: "WhatsApp",
            email_label: "Email",
            web_label: "Website",
            footer: "Designed & built by <strong>Gabor Flandorffer</strong> — {year}"
        }
    },
    es: {
        nav: {
            about: "Sobre Mí",
            experience: "Experiencia",
            skills: "Habilidades",
            projects: "Proyectos",
            education: "Educación",
            contact: "Contacto",
            cta: "Hablemos",
            whatsapp_msg: "¡Hola Gabor! Vi tu portafolio y me gustaría contactarte."
        },
        hero: {
            greeting: "Hola, soy",
            badge: "Disponible para nuevas oportunidades",
            roles: "Desarrollador Full-Stack Senior,Arquitecto de Automatización,Especialista en Backend,Solucionador de Problemas",
            description: "{years}+ años arquitectando sistemas backend de latencia cero, pipelines de automatización de misión crítica y soluciones full-stack de alto impacto.",
            years: "Años de Experiencia",
            projects: "Proyectos",
            cta_primary: "Ver Mi Trabajo",
            cta_secondary: "Contáctame",
            scroll: "Desliza hacia abajo"
        },
        about: {
            label: "Sobre Mí",
            title: "Construyendo el futuro,<br />una línea de código a la vez.",
            p1: "Soy un <strong>Desarrollador Full-Stack Senior y Especialista en Automatización</strong> con más de <strong>{years} años</strong> de experiencia profesional. He trabajado en startups y empresas establecidas en <strong>Alemania, Colombia y de forma remota para todo el mundo</strong>.",
            p2: "Mi experiencia abarca desde la creación de backends robustos con <strong>Django/Python</strong> y el diseño de <strong>pipelines de automatización</strong> con Puppeteer y AutoIt, hasta el despliegue de infraestructura escalable con <strong>Docker, AWS y CI/CD</strong>. Me apasiona escribir código limpio y eficiente que resuelva problemas del mundo real.",
            highlights: {
                backend: "Experto en Backend",
                automation: "Maestro en Automatización",
                devops: "DevOps y Cloud",
                problem: "Solucionador de Problemas"
            },
            location: "Basado en Medellín, Colombia",
            remote: "Abierto a remoto mundial"
        },
        experience: {
            label: "Trayectoria Profesional",
            title: "Donde He Hecho <span class=\"gradient-text\">Impacto</span>",
            subtitle: "De soporte técnico a automatización senior y desarrollo backend — un viaje de crecimiento continuo.",
            present: "Presente",
            items: [
                {
                    company: "Zattoo",
                    role: "Desarrollador Backend",
                    period: "Dic 2019 — Jul 2023",
                    location: "Berlín, Alemania",
                    description: "Desarrollé y mantuve herramientas internas usando Django. Colaboré con equipos multidisciplinarios para unificar fuentes de activos y estilos. Implementé pytest y GitHub Actions para pruebas y CI/CD. Diseñé y desarrollé una herramienta de mocking interna para pruebas de API.",
                    tags: ["Django", "Python", "pytest", "GitHub Actions", "REST APIs", "Docker", "Mocking"]
                },
                {
                    company: "Conectsen",
                    role: "Desarrollador IoT",
                    period: "Ago 2019 — Oct 2019",
                    location: "Colombia / Remoto",
                    description: "Creé una solución IoT para monitorear diversos activos (vehículos OBD2, cascos, cámaras). Mejoré la precisión de recolección de datos con algoritmos de análisis y comunicación en tiempo real. Personalicé soluciones para diferentes tipos de activos.",
                    tags: ["Python", "IoT", "Tiempo Real", "WebSockets", "OBD2", "Datos de Sensores"]
                },
                {
                    company: "Yaxa",
                    role: "Desarrollador Senior de Automatización",
                    period: "Oct 2017 — Jul 2019",
                    location: "Colombia",
                    description: "Mantenimiento de plataforma y creación de bots de mensajería automática, compras y actualización de estado. Gestioné cargas masivas de productos y actualizaciones de precios. Diseñé e implementé backend/web apps para clientes internos vía APIs.",
                    tags: ["Automatización", "Bots", "Integración API", "Backend", "Escalado"]
                },
                {
                    company: "Yaxa",
                    role: "Desarrollador de Software",
                    period: "Sep 2016 — Oct 2017",
                    location: "Colombia",
                    description: "Automaticé tareas repetitivas en logística, contabilidad y servicio al cliente. Enfocado en la automatización del desarrollo, nuevas funcionalidades y actualizaciones del sistema para mejorar la eficiencia operativa.",
                    tags: ["C#.NET", "VB.NET", "VBA", "SQL Server", "Automatización"]
                },
                {
                    company: "Freelancer.com",
                    role: "Desarrollador de Automatización",
                    period: "Sep 2016 — Presente",
                    location: "Remoto",
                    description: "Diseñé y construí infraestructuras de automatización y herramientas desde cero. Integré código con diversas APIs organizacionales y de terceros. Desarrollé herramientas constructoras de pruebas de comunicación y utilicé análisis de imágenes (OpenCV/ImageMagick).",
                    tags: ["Puppeteer", "AutoIt", "OpenCV", "ImageMagick", "Web Scraping", "Cython"]
                },
                {
                    company: "MADISA S.A.S",
                    role: "Técnico en Informática",
                    period: "Feb 2010 — Dic 2015",
                    location: "Colombia",
                    description: "Instalé y configuré computadores/software para clientes. Brindé soporte y mejoras para la plataforma de gestión GSBase, contribuyendo al desarrollo de nuevas configuraciones.",
                    tags: ["GSBase", "Hardware", "Soporte IT", "Redes", "Configuración Técnica"]
                }
            ]
        },
        skills: {
            label: "Arsenal Técnico",
            title: "El Full <span class=\"gradient-text\">Stack y Más Allá</span>",
            subtitle: "Un conjunto de herramientas profundo y multidisciplinario que va desde la automatización de bajo nivel hasta la arquitectura de sistemas de alto nivel."
        },
        projects: {
            label: "Portafolio",
            title: "Proyectos <span class=\"gradient-text\">Destacados</span>",
            subtitle: "Soluciones del mundo real que demuestran profundidad técnica e impacto empresarial.",
            items: [
                {
                    title: "Conectsen — Plataforma IoT",
                    role: "Desarrollador IoT",
                    period: "Ago — Oct 2019",
                    description: "Construí una plataforma de monitoreo de activos en tiempo real procesando OBD2, cámaras y datos de cascos. Diseñé algoritmos de comunicación de baja latencia para la transmisión continua de sensores.",
                    tags: ["Python", "IoT", "Tiempo Real", "WebSockets", "OBD2"]
                },
                {
                    title: "Infraestructura de Automatización",
                    role: "Freelance — Desarrollador de Automatización",
                    period: "2016 — Presente",
                    description: "Diseñé y mantuve infraestructura de automatización para diversos clientes en Freelancer.com. Construí sistemas integrando APIs, pruebas automatizadas, análisis de imágenes con OpenCV y web scraping a escala.",
                    tags: ["Puppeteer", "AutoIt", "OpenCV", "APIs", "Web Scraping"]
                },
                {
                    title: "Herramienta de Mocking Interna",
                    role: "Desarrollador Backend @ Zattoo",
                    period: "2019 — 2023",
                    description: "Diseñé una herramienta de mocking de API personalizada utilizada por todo el equipo de ingeniería para realizar pruebas con respuestas similares a producción sin afectar los servicios reales. Reduje la inestabilidad de las pruebas en más de un 60%.",
                    tags: ["Django", "Python", "REST", "Pruebas", "Docker"]
                },
                {
                    title: "Automatización de Pipeline CI/CD",
                    role: "Desarrollador Backend @ Zattoo",
                    period: "2020 — 2023",
                    description: "Implementé CI/CD de extremo a extremo con GitHub Actions y pytest. Automaticé el despliegue, las pruebas y los controles de calidad del código, reduciendo el tiempo de despliegue de horas a minutos.",
                    tags: ["GitHub Actions", "pytest", "Docker", "CI/CD", "Bash"]
                }
            ]
        },
        education: {
            label: "Credenciales",
            title: "Educación y <span class=\"gradient-text\">Reconocimiento</span>",
            subtitle: "Toda una vida de aprendizaje, desde certificados profesionales hasta conferencias internacionales.",
            cert_title: "Certificaciones Profesionales",
            speaking_title: "Charlas y Comunidad",
            languages_title: "Idiomas",
            competencies_title: "Competencias Clave",
            view_talk: "Ver Charla",
            certs: [
                {
                    title: "Certificado Profesional de Automatización de TI de Google con Python",
                    issuer: "Google / Coursera"
                },
                {
                    title: "Subespecializaciones en Python",
                    issuer: "Google IT Automation",
                    description: "Sistemas Operativos, Solución de Problemas y Depuración, Gestión de Configuración, Cloud."
                },
                {
                    title: "Arquitectura Web y Full Stack",
                    issuer: "SoloLearn / Varios",
                    description: "React, JavaScript, PHP, jQuery, Fundamentos de CSS/HTML."
                },
                {
                    title: "Experto en Gestión de Datos y SQL",
                    issuer: "SoloLearn",
                    description: "Certificado en SQL Intermedio."
                },
                {
                    title: "Dominio de Lenguajes (C++, Ruby)",
                    issuer: "SoloLearn / Varios"
                }
            ],
            talks: [
                {
                    title: "Asincronismo: Posibles Errores y Cómo Solucionarlos",
                    venue: "Charla Meetup — Conferencista Invitado"
                }
            ],
            languages: [
                { name: "Español", level: "Lengua Materna" },
                { name: "Inglés", level: "B2 — Intermedio Superior" },
                { name: "Alemán", level: "A2 — Elemental" }
            ],
            softSkills: [
                { name: "Colaboración en Equipo" },
                { name: "Solución de Problemas" },
                { name: "Adaptabilidad" },
                { name: "Pensamiento Creativo" },
                { name: "Aprendizaje Autónomo" },
                { name: "Colaboración Interfuncional" }
            ]
        },
        contact: {
            label: "Conectemos",
            title: "¿Listo para <span class=\"gradient-text\">Construir Algo Grande?</span>",
            text: "Actualmente estoy <strong>abierto a nuevas oportunidades</strong> — ya sea un rol de tiempo completo, un proyecto freelance o una colaboración emocionante. ¡Hablemos!",
            whatsapp_label: "WhatsApp",
            email_label: "Correo",
            web_label: "Sitio Web",
            footer: "Diseñado y construido por <strong>Gabor Flandorffer</strong> — {year}"
        }
    }
};
