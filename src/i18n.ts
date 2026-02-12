export const translations = {
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            credentials: "Credentials",
            projects: "Projects",
            ai: "Ask AI ✨",
            contact: "Contact",
            cta: "Let's Talk",
            freelancer: "Freelancer",
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
            download_cv: "Download CV",
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
            remote: "Open to remote worldwide",
            download_cv: "Download CV",
            expertise_title: "Core Expertise",
            expertise_item_1_label: "Python / Django",
            expertise_item_1_value: "11+ yrs",
            expertise_item_2_label: "Automation",
            expertise_item_2_value: "Expert",
            expertise_item_3_label: "Full-Stack",
            expertise_item_3_value: "Architecture",
            location_label: "Location",
            location_value: "Medellín, Colombia",
            availability_label: "Availability",
            stat_years: "Years Experience",
            stat_projects: "Projects Delivered",
            stat_certs: "Certifications",
            stat_countries: "Countries"
        },
        testimonials: {
            label: "Testimonials",
            title: "Client",
            title_accent: "Feedback",
            items: [
                {
                    quote: "Excellent professional. Exactly what I needed for my project.",
                    author: "Dino S.",
                    role: "Raspberry PI & JS Specialist",
                    rating: 5
                },
                {
                    quote: "Excellent freelancer, did what I needed exactly, won't hesitate to hire again. I highly recommend him.",
                    author: "Bassem E.",
                    role: "Automation Client",
                    rating: 5
                },
                {
                    quote: "Helped me on demand with an AutoIt script. Very fast and efficient.",
                    author: "Former Client",
                    role: "Software Automation",
                    rating: 5
                }
            ]
        },
        experience: {
            label: "Professional Journey",
            title: "Where I've",
            title_accent: "Made Impact",
            subtitle: "From IT support to senior automation and backend development — a journey of continuous growth.",
            present: "Present",
            items: [
                {
                    company: "S&P Global (via Realtime Analytics)",
                    role: "Software Engineer",
                    period: "Apr 2025 — Present",
                    location: "Remote",
                    description: "Developing software solutions and internal tooling for financial and analytics workflows. Focused on reliable backend services, automation, and maintainable engineering practices in a high-impact domain.",
                    tags: ["Python", "TypeScript", "APIs", "Automation", "Backend", "CI/CD"]
                },
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
            subtitle: "A deep, multi-disciplinary toolkit ranging from low-level automation to high-level system architecture.",
            years_suffix: "yrs",
            categories: [
                {
                    title: "Development Core",
                    icon: "💻",
                    span: "row-2",
                    skills: [
                        { name: "Python (Expert)", level: 100, years: "11+" },
                        { name: "Asyncio / Aiohttp", level: 95, years: "7+" },
                        { name: "JavaScript / TS", level: 85, years: "8+" },
                        { name: "C# .NET / VB.NET", level: 80, years: "9+" },
                        { name: "PHP", level: 70, years: "5+" },
                        { name: "Cython / MicroPython", level: 75, years: "5+" }
                    ]
                },
                {
                    title: "Automation & Testing",
                    icon: "🤖",
                    span: "col-2",
                    skills: [
                        { name: "Puppeteer / Pyppeteer", level: 95, years: "7+" },
                        { name: "AutoIt / Selenium", level: 90, years: "11+" },
                        { name: "pytest / Mocking", level: 90, years: "7+" },
                        { name: "Web Scraping / Crawling", level: 95, years: "11+" },
                        { name: "OpenCV / ImageMagick", level: 80, years: "6+" }
                    ]
                },
                {
                    title: "Web & Architecture",
                    icon: "🏗️",
                    skills: [
                        { name: "Django / FastAPI", level: 95, years: "10+" },
                        { name: "REST / GraphQL / Swagger", level: 90, years: "8+" },
                        { name: "Angular / Vue", level: 65, years: "3+" },
                        { name: "HTML5 / CSS3 / jQuery", level: 85, years: "8+" },
                        { name: "WebSockets / Microservices", level: 85, years: "6+" }
                    ]
                },
                {
                    title: "Databases",
                    icon: "🗄️",
                    skills: [
                        { name: "PostgreSQL / MySQL", level: 90, years: "11+" },
                        { name: "MongoDB / Redis", level: 80, years: "6+" },
                        { name: "SQLAlchemy / ORMs", level: 90, years: "9+" },
                        { name: "Oracle (AM, CW, FM)", level: 65, years: "3+" }
                    ]
                },
                {
                    title: "DevOps & Cloud",
                    icon: "☁️",
                    span: "col-2",
                    skills: [
                        { name: "Docker / Portainer", level: 90, years: "8+" },
                        { name: "GitHub Actions / Jenkins", level: 90, years: "6+" },
                        { name: "AWS / GCP", level: 75, years: "4+" },
                        { name: "Nginx / RabbitMQ", level: 80, years: "5+" },
                        { name: "Linux / Bash / Windows Server", level: 90, years: "11+" }
                    ]
                },
                {
                    title: "Additional Languages",
                    icon: "💎",
                    skills: [
                        { name: "C++", level: 70, years: "4+" },
                        { name: "Ruby", level: 65, years: "3+" },
                        { name: "VBA", level: 80, years: "8+" }
                    ]
                },
                {
                    title: "Networking & Security",
                    icon: "🔒",
                    skills: [
                        { name: "Wireshark", level: 70, years: "4+" },
                        { name: "Puppet / Config Mgmt", level: 70, years: "3+" },
                        { name: "Kali Linux / OllyDbg", level: 60, years: "3+" }
                    ]
                }
            ]
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
            google_title: "Google IT Automation",
            web_title: "Web Development",
            data_title: "Data & Languages",
            speaking_title: "Speaking & Community",
            languages_title: "Languages",
            competencies_title: "Core Competencies",
            toolset_title: "Everyday Toolset",
            activities_title: "Activities & Community",
            work_philosophy_title: "Work Philosophy",
            view_talk: "View Talk",
            certs_google: [
                { title: "Google IT Automation with Python Professional Certificate", issuer: "Google / Coursera", link: "https://www.credly.com/badges/afa01904-ac4f-4d9c-a7d5-d3a91b315669" },
                { title: "Automating Real-World Tasks with Python", issuer: "Google / Coursera", link: "https://coursera.org/verify/26H3VDUEB9N9" },
                { title: "Using Python to Interact with the Operating System", issuer: "Google / Coursera", link: "https://coursera.org/verify/8WRBNTJ98T4F" },
                { title: "Crash Course on Python", issuer: "Google / Coursera", link: "https://coursera.org/verify/SKLYKDYFV2DN" },
                { title: "Troubleshooting and Debugging Techniques", issuer: "Google / Coursera", link: "https://coursera.org/verify/NU96DZRZVKCQ" },
                { title: "Configuration Management and the Cloud", issuer: "Google / Coursera", link: "https://coursera.org/verify/YJ7NXUEBR62R" }
            ],
            certs_web: [
                { title: "React", issuer: "SoloLearn", link: "https://cursa.app/es/mi-certificado/certd08087387ac087d2e908db969cef05e3" },
                { title: "JavaScript Tutorial", issuer: "SoloLearn", link: "https://www.sololearn.com/certificates/CT-IX42IKV1" },
                { title: "PHP Tutorial Course", issuer: "SoloLearn", link: "https://www.sololearn.com/certificates/CT-RTEEJNZ7" },
                { title: "jQuery Tutorial", issuer: "SoloLearn", link: "https://www.sololearn.com/certificates/CT-6J3L5AUR" },
                { title: "CSS Fundamentals", issuer: "SoloLearn", link: "https://www.sololearn.com/certificates/CT-SPHGWWW4" },
                { title: "HTML Fundamentals", issuer: "SoloLearn", link: "https://www.sololearn.com/certificates/CT-HDBNXW9Z/pdf" }
            ],
            certs_data: [
                { title: "SQL Intermediate", issuer: "SoloLearn", link: "https://www.sololearn.com/Certificate/CC-2NZAM2NQ/pdf" },
                { title: "Python Core", issuer: "SoloLearn", link: "https://www.sololearn.com/Certificate/CT-YTU4RTSM/pdf" },
                { title: "Intermediate Python", issuer: "SoloLearn", link: "https://www.sololearn.com/Certificate/CT-AJ2PLG5B/pdf" },
                { title: "C++", issuer: "SoloLearn", link: "https://www.sololearn.com/Certificate/CC-UAAKQS4X/pdf" },
                { title: "Ruby", issuer: "SoloLearn", link: "https://www.sololearn.com/Certificate/CC-2NZAM2NQ/pdf" }
            ],
            talks: [
                {
                    title: "Asynchronism: Possible Errors and How to Solve Them",
                    venue: "Meetup Bogotá — Guest Speaker"
                }
            ],
            activities: [
                { name: "Open Source Contributor", icon: "🌐" },
                { name: "Tech Blogging", icon: "✍️" },
                { name: "Speaker at Meetups", icon: "🎤" }
            ],
            toolset: [
                { name: "VS Code", icon: "💻" },
                { name: "Git", icon: "🔀" },
                { name: "Docker", icon: "🐳" },
                { name: "Postman", icon: "📮" },
                { name: "Obsidian", icon: "📝" },
                { name: "ChatGPT / Claude / DeepSeek", icon: "🤖" }
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
                { name: "Leadership" },
                { name: "Time Management" },
                { name: "Conflict Resolution" },
                { name: "Critical Thinking" },
                { name: "Self-taught Learner" },
                { name: "Cross-functional Collab" }
            ],
            dominantBias: [
                { name: "Practical Solutions" },
                { name: "Objectivity" },
                { name: "Direct Communication" },
                { name: "Efficiency" },
                { name: "Results-Driven" }
            ]
        },
        contact: {
            label: "Let's Connect",
            title: "Ready to <span class=\"gradient-text\">Build Something Great?</span>",
            text: "I'm currently <strong>open to new opportunities</strong> — whether it's a full-time role, freelance project, or an exciting collaboration. Let's talk!",
            whatsapp_label: "WhatsApp",
            whatsapp_msg: "Hi Gabor! I saw your portfolio and I'd like to chat.",
            email_label: "Email",
            linkedin_label: "LinkedIn",
            github_label: "GitHub",
            download_cv: "Download CV",
            pdf_label: "PDF",
            web_label: "Website",
            footer: "Designed & built by <strong>Gabor Flandorffer</strong> — {year}"
        }
    },
    es: {
        nav: {
            about: "Sobre Mi",
            experience: "Experiencia",
            credentials: "Credenciales",
            projects: "Proyectos",
            ai: "Preguntar a IA ✨",
            contact: "Contacto",
            cta: "Hablemos",
            freelancer: "Freelancer",
            whatsapp_msg: "Hola Gabor! Vi tu portafolio y me gustaria conversar."
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
            download_cv: "Descargar CV",
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
            remote: "Abierto a remoto mundial",
            download_cv: "Descargar CV",
            expertise_title: "Experiencia Clave",
            expertise_item_1_label: "Python / Django",
            expertise_item_1_value: "11+ años",
            expertise_item_2_label: "Automatización",
            expertise_item_2_value: "Experto",
            expertise_item_3_label: "Full-Stack",
            expertise_item_3_value: "Arquitectura",
            location_label: "Ubicación",
            location_value: "Medellín, Colombia",
            availability_label: "Disponibilidad",
            stat_years: "Años de Experiencia",
            stat_projects: "Proyectos Entregados",
            stat_certs: "Certificaciones",
            stat_countries: "Países"
        },
        testimonials: {
            label: "Testimonios",
            title: "Feedback de",
            title_accent: "Clientes",
            items: [
                {
                    quote: "Excelente profesional. Exactamente lo que necesitaba para mi proyecto.",
                    author: "Dino S.",
                    role: "Especialista en Raspberry PI y JS",
                    rating: 5
                },
                {
                    quote: "Excelente freelancer, hizo exactamente lo que necesitaba, no dudaría en contratarlo de nuevo. Lo recomiendo mucho.",
                    author: "Bassem E.",
                    role: "Automation Client",
                    rating: 5
                },
                {
                    quote: "Me ayudó bajo demanda con un script de AutoIt. Muy rápido y eficiente.",
                    author: "Cliente de Freelancer",
                    role: "Software Automation",
                    rating: 5
                }
            ]
        },
        experience: {
            label: "Trayectoria Profesional",
            title: "Donde He Hecho",
            title_accent: "Impacto",
            subtitle: "De soporte técnico a automatización senior y desarrollo backend — un viaje de crecimiento continuo.",
            present: "Presente",
            items: [
                {
                    company: "S&P Global (via Realtime Analytics)",
                    role: "Ingeniero de Software",
                    period: "Abr 2025 — Presente",
                    location: "Remoto",
                    description: "Desarrollo de soluciones de software y herramientas internas para flujos financieros y de analitica. Enfocado en servicios backend confiables, automatizacion y buenas practicas de ingenieria en un dominio de alto impacto.",
                    tags: ["Python", "TypeScript", "APIs", "Automatizacion", "Backend", "CI/CD"]
                },
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
            subtitle: "Un conjunto de herramientas profundo y multidisciplinario que va desde la automatización de bajo nivel hasta la arquitectura de sistemas de alto nivel.",
            years_suffix: "años",
            categories: [
                {
                    title: "Núcleo de Desarrollo",
                    icon: "💻",
                    span: "row-2",
                    skills: [
                        { name: "Python (Experto)", level: 100, years: "11+" },
                        { name: "Asyncio / Aiohttp", level: 95, years: "7+" },
                        { name: "JavaScript / TS", level: 85, years: "8+" },
                        { name: "C# .NET / VB.NET", level: 80, years: "9+" },
                        { name: "PHP", level: 70, years: "5+" },
                        { name: "Cython / MicroPython", level: 75, years: "5+" }
                    ]
                },
                {
                    title: "Automatización y Testing",
                    icon: "🤖",
                    span: "col-2",
                    skills: [
                        { name: "Puppeteer / Pyppeteer", level: 95, years: "7+" },
                        { name: "AutoIt / Selenium", level: 90, years: "11+" },
                        { name: "pytest / Mocking", level: 90, years: "7+" },
                        { name: "Web Scraping / Crawling", level: 95, years: "11+" },
                        { name: "OpenCV / ImageMagick", level: 80, years: "6+" }
                    ]
                },
                {
                    title: "Web y Arquitectura",
                    icon: "🏗️",
                    skills: [
                        { name: "Django / FastAPI", level: 95, years: "10+" },
                        { name: "REST / GraphQL / Swagger", level: 90, years: "8+" },
                        { name: "Angular / Vue", level: 65, years: "3+" },
                        { name: "HTML5 / CSS3 / jQuery", level: 85, years: "8+" },
                        { name: "WebSockets / Microservicios", level: 85, years: "6+" }
                    ]
                },
                {
                    title: "Bases de Datos",
                    icon: "🗄️",
                    skills: [
                        { name: "PostgreSQL / MySQL", level: 90, years: "11+" },
                        { name: "MongoDB / Redis", level: 80, years: "6+" },
                        { name: "SQLAlchemy / ORMs", level: 90, years: "9+" },
                        { name: "Oracle (AM, CW, FM)", level: 65, years: "3+" }
                    ]
                },
                {
                    title: "DevOps y Cloud",
                    icon: "☁️",
                    span: "col-2",
                    skills: [
                        { name: "Docker / Portainer", level: 90, years: "8+" },
                        { name: "GitHub Actions / Jenkins", level: 90, years: "6+" },
                        { name: "AWS / GCP", level: 75, years: "4+" },
                        { name: "Nginx / RabbitMQ", level: 80, years: "5+" },
                        { name: "Linux / Bash / Windows Server", level: 90, years: "11+" }
                    ]
                },
                {
                    title: "Lenguajes Adicionales",
                    icon: "💎",
                    skills: [
                        { name: "C++", level: 70, years: "4+" },
                        { name: "Ruby", level: 65, years: "3+" },
                        { name: "VBA", level: 80, years: "8+" }
                    ]
                },
                {
                    title: "Redes y Seguridad",
                    icon: "🔒",
                    skills: [
                        { name: "Wireshark", level: 70, years: "4+" },
                        { name: "Puppet / Gestión Config", level: 70, years: "3+" },
                        { name: "Kali Linux / OllyDbg", level: 60, years: "3+" }
                    ]
                }
            ]
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
            google_title: "Google IT Automation",
            web_title: "Desarrollo Web",
            data_title: "Datos y Lenguajes",
            speaking_title: "Charlas y Comunidad",
            languages_title: "Idiomas",
            competencies_title: "Competencias Clave",
            toolset_title: "Herramientas del Día a Día",
            activities_title: "Actividades y Comunidad",
            work_philosophy_title: "Filosofía de Trabajo",
            view_talk: "Ver Charla",
            certs_google: [
                { title: "Certificado Profesional de Automatización de TI con Python", issuer: "Google / Coursera", link: "https://www.coursera.org/professional-certificates/google-it-automation" },
                { title: "Automatización de Tareas del Mundo Real con Python", issuer: "Google / Coursera", link: "https://www.coursera.org/account/accomplishments/verify/26H3VDUEB9N9" },
                { title: "Usar Python para Interactuar con el SO", issuer: "Google / Coursera", link: "https://www.coursera.org/account/accomplishments/verify/8WRBNTJ98T4F" },
                { title: "Curso Intensivo de Python", issuer: "Google / Coursera", link: "https://www.coursera.org/account/accomplishments/verify/M7W7V3Z9N8WF" },
                { title: "Técnicas de Depuración y Solución de Problemas", issuer: "Google / Coursera", link: "https://www.coursera.org/account/accomplishments/verify/938HT2G6C877" },
                { title: "Gestión de Configuración y la Nube", issuer: "Google / Coursera", link: "https://www.coursera.org/account/accomplishments/verify/R9T9UZZ9W7WF" }
            ],
            certs_web: [
                { title: "React", issuer: "SoloLearn", link: "" },
                { title: "Tutorial de JavaScript", issuer: "SoloLearn", link: "https://www.sololearn.com/certificates/CT-V59HTXRM" },
                { title: "Curso Tutorial de PHP", issuer: "SoloLearn", link: "https://www.sololearn.com/certificates/CT-KPS7H39V" },
                { title: "Tutorial de jQuery", issuer: "SoloLearn", link: "" },
                { title: "Fundamentos de CSS", issuer: "SoloLearn", link: "https://www.sololearn.com/certificates/CT-B6U9J1K6" },
                { title: "Fundamentos de HTML", issuer: "SoloLearn", link: "https://www.sololearn.com/certificates/CT-HDBNXW9Z" }
            ],
            certs_data: [
                { title: "SQL Intermedio", issuer: "SoloLearn", link: "https://www.sololearn.com/certificates/CT-S9CHVDRP" },
                { title: "Python Core", issuer: "SoloLearn", link: "" },
                { title: "Python Intermedio", issuer: "SoloLearn", link: "" },
                { title: "C++", issuer: "SoloLearn", link: "" },
                { title: "Ruby", issuer: "SoloLearn", link: "" }
            ],
            talks: [
                {
                    title: "Asincronismo: Posibles Errores y Cómo Solucionarlos",
                    venue: "Meetup Bogotá — Conferencista Invitado"
                }
            ],
            activities: [
                { name: "Contribuidor Open Source", icon: "🌐" },
                { name: "Blogging Técnico", icon: "✍️" },
                { name: "Conferencista en Meetups", icon: "🎤" }
            ],
            toolset: [
                { name: "VS Code", icon: "💻" },
                { name: "Git", icon: "🔀" },
                { name: "Docker", icon: "🐳" },
                { name: "Postman", icon: "📮" },
                { name: "Obsidian", icon: "📝" },
                { name: "ChatGPT / Claude / DeepSeek", icon: "🤖" }
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
                { name: "Liderazgo" },
                { name: "Gestión del Tiempo" },
                { name: "Resolución de Conflictos" },
                { name: "Pensamiento Crítico" },
                { name: "Aprendizaje Autónomo" },
                { name: "Colaboración Interfuncional" }
            ],
            dominantBias: [
                { name: "Soluciones Prácticas" },
                { name: "Objetividad" },
                { name: "Comunicación Directa" },
                { name: "Eficiencia" },
                { name: "Orientado a Resultados" }
            ]
        },
        contact: {
            label: "Conectemos",
            title: "¿Listo para <span class=\"gradient-text\">Construir Algo Grande?</span>",
            text: "Actualmente estoy <strong>abierto a nuevas oportunidades</strong> — ya sea un rol de tiempo completo, un proyecto freelance o una colaboración emocionante. ¡Hablemos!",
            whatsapp_label: "WhatsApp",
            whatsapp_msg: "Hola Gabor! Vi tu portafolio y me gustaria conversar.",
            email_label: "Correo",
            linkedin_label: "LinkedIn",
            github_label: "GitHub",
            download_cv: "Descargar CV",
            pdf_label: "PDF",
            web_label: "Sitio Web",
            footer: "Diseñado y construido por <strong>Gabor Flandorffer</strong> — {year}"
        }
    }
};
