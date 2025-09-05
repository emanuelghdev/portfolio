export type Language = "es" | "en"

export interface Translations {
    nav: {
        home: string
        about: string
        experience: string
        projects: string
        stack: string
    }
    buttons: {
        contact: string
        resume: string
    }
    about: {
        title: string
        description1: string
        description2: string
        description3: string
        interests1: string
        interests2: string
        interests3: string
    }
    experience: {
        title: string
    }
    projects: {
        title: string
        code: string
        preview: string
    }
    projectsData: {
        aprendefacil: {
            description: string
            info: string
            rol: string
        },
        habitacionpropia: {
            description: string
            info: string
            rol: string
        },
        palestinebadges: {
            title: string
            description: string
            info: string
            rol: string
        },
        dimroom: {
            title: string
            description: string
            info: string
            rol: string
        },
        refrandle: {
            title: string
            description: string
            info: string
            rol: string
        },
    }
    stack: {
        title: string
        backend: string
        frontend: string 
        devops: string
        agile: string
        gamedev: string
    }
    footer: {
        rights: string
        about: string
        contact: string
    }
}

export const translations: Record<Language, Translations> = {
    /* Español */
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            experience: "Experiencia",
            projects: "Proyectos",
            stack: "Stack"
        },
        buttons: {
            contact: "Contáctame",
            resume: "Descargar CV"
        },
        about: {
            title: "Sobre mí",
            description1: "Ingeniero informático especializado en el desarrollo de software, con",
            description2: "amplia experiencia en programación web",
            description3: "y metodologías ágiles. Tengo muchas ganas de enfrentar nuevos retos que me permitan crecer tanto profesional como personalmente.",
            interests1: "Me considero una persona meticulosa y resolutiva con",
            interests2: "excelentes habilidades comunicativas y de trabajo en equipo",
            interests3: ", además de un interés especial en el software libre, la accesibilidad web y la innovación tecnológica."
        },
        experience: {
            title: "Experiencia"
        },
        projects: {
            title: "Proyectos Destacados",
            code: "Código",
            preview: "Demo"

        },
        projectsData: {
            aprendefacil: {
                description: "Plataforma web para el Colegio de Educación Especial San Rafael destinada a ayudar alumnos con diversidad funcional a ganar independencia mediante agendas visuales, tareas adaptadas y comunicación directa con los educadores.",
                info: "⭐ Piloto para una licitación que acabámos ganando",
                rol: "Auditor de Accesibilidad / Backend Developer"
            },
            habitacionpropia: {
                description: "Juego pixel art 2D de gestión emocional y granjas enfocado en la mejora de los problemas producidos por la ansiedad y el estrés. Cuenta con árbol de diálogos, sistema de progreso, NPCs con arcos narrativos y misiones secundarias.",
                info: "🎯 Trabajo final de carrera calificado con la máxima nota",
                rol: "Full-Stack Developer"
            },
            palestinebadges: {
                title: "Palestine Support Badges",
                description: "Herramienta web para crear badges de apoyo a Palestina personalizables con diferentes estilos, colores, textos e iconos. Permite exportar los badges en formatos como Markdown, HTML o PNG listos para usar.",
                info: "🍉 Proyecto perteneciente a la iniciativa Tech4Palestine",
                rol: "Tech Lead"
            },
            dimroom: {
                title: "The Dim Room",
                description: "Escape Room interactivo que transcurre en una pequeña habitación 3D hecha desde cero. El usuario puede explorar la escena, interactuar con los objetos e intentar descubrir todas las pistas necesarias para salir de la habitación.",
                info: "💡 Escena con +25 objetos distintos modelados",
                rol: "Full-Stack Developer"
            },
            refrandle: {
                title: "Refrandle",
                description: "Juego online de adivinar refranes y dichos populares en español. Incluye estadísticas detalladas, historial de partidas y hasta cuatro modos de juego distintos para ajustar la experiencia.",
                info: "📈 Web app con +20.000 partidas jugadas",
                rol: "Full-Stack Developer"
            }
        },
        stack: {
            title: "Stack Tecnológico",
            backend: "Backend",
            frontend: "Frontend & Diseño",
            devops: "DevOps",
            agile: "Prácticas Ágiles",
            gamedev: "Desarrollo de Juegos"
        },
        footer: {
            rights: "Los logos y marcas registradas pertenecen a sus respectivos dueños.",
            about: "Sobre mí",
            contact: "Contacto"
        }
    },

    /* Inglés */
    en: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            projects: "Projects",
            stack: "Stack"
        },
        buttons: {
            contact: "Contact me",
            resume: "Resume"
        },
        about: {
            title: "About Me",
            description1: "Computer engineer specialized in software development, with",
            description2: "extensive experience in web development",
            description3: "and agile methodologies. I am eager to take on new challenges that will allow me to grow both professionally and personally.",
            interests1: "I consider myself a meticulous and solution-oriented person with",
            interests2: "excellent communication and teamwork skills",
            interests3: ", as well as a strong interest in open-source software, web accessibility and technological innovation."
        },
        experience: {
            title: "Experience"
        },
        projects: {
            title: "Featured Projects",
            code: "Code",
            preview: "Preview"
        },
        projectsData: {
            aprendefacil: {
                description: "Web platform for Colegio de Educación Especial San Rafael to help students with diverse functional needs gain independence through visual schedules, adapted activities and direct communication with educators.",
                info: "⭐ Pilot for a public tender which we won",
                rol: "Accessibility Specialist / Backend Developer"
            },
            habitacionpropia: {
                description: "2D pixel-art game focused on emotional regulation and farm management to address anxiety and stress. Features a dialogue tree, progression system, NPCs with narrative arcs and side quests.",
                info: "🎯 Bachelor’s final project awarded with maximum grade",
                rol: "Full-Stack Developer"
            },
            palestinebadges: {
                title: "Palestine Support Badges",
                description: "An easy-to-use tool for creating customizable Palestine support badges with multiple styles, colors, texts and icons. Badges can be exported in Markdown, HTML and PNG.",
                info: "🍉 Project part of the Tech4Palestine initiative",
                rol: "Tech Lead"
            },
            dimroom: {
                title: "The Dim Room",
                description: "Interactive escape room set in a single 3D room built from scratch. Users can explore the intricate scene, interact with numerous objects and piece together all the clues to try to escape.",
                info: "💡 Scene with +25 uniquely modeled assets",
                rol: "Full-Stack Developer"
            },
            refrandle: {
                title: "Refrandle",
                description: "Online guessing game of Spanish proverbs and sayings. Includes detailed player analytics, match history and up to four game modes to adapt the experience.",
                info: "📈 Web app with 20,000+ games played",
                rol: "Full-Stack Developer"
            }
        },
        stack: {
            title: "My Stack",
            backend: "Backend",
            frontend: "Frontend & Design",
            devops: "DevOps",
            agile: "Agile Practices",
            gamedev: "Game Development"
        },
        footer: {
            rights: "The logos and registered trademarks are the property of their respective owners.",
            about: "About me",
            contact: "Contact"
        }
    }
}

// Hook para usar las traducciones en React
export const useTranslations = (lang: Language): Translations => {
    return translations[lang]
}