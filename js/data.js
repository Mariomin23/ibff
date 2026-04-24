const SITE_DATA = {
    brand: {
        name: "IBF Trainers",
        tagline: "High-Performance Personal Training",
        description: "En IBF Trainers no creemos en rutinas genéricas. Somos una empresa boutique dedicada a transformar vidas a través del entrenamiento personalizado, la nutrición estratégica y el acompañamiento constante.",
        whatsapp: "34614250687"
    },
    sections: {
        about: {
            title: "¿Quiénes Somos?",
            subtitle: "Más que un entrenamiento, una estrategia de vida.",
            content: "En IBF Trainers no creemos en rutinas genéricas. Somos una empresa boutique dedicada a transformar vidas a través del entrenamiento personalizado, la nutrición estratégica y el acompañamiento constante. Nacimos con la misión de elevar el estándar del fitness convencional. Entrenar con nosotros es contar con un profesional que te escucha, entiende tus objetivos y adapta cada fase a tu ritmo."
        },
        services: [
            { id: 1, title: "Fullbody", icon: "bi-arrows-fullscreen", description: "Entrenamiento integral para optimizar tiempo y resultados." },
            { id: 2, title: "Musculación", icon: "bi-database", description: "Hipertrofia y fuerza con técnica de élite." },
            { id: 3, title: "Tren Inferior", icon: "bi-person-walking", description: "Especialización en potencia y estética de piernas y glúteos." },
            { id: 4, title: "Post Parto", icon: "bi-heart-pulse", description: "Recuperación segura y efectiva supervisada por expertos." }
        ],
        trainers: [
            {
                id: 1,
                name: "Pablo Lasarte",
                role: "CEO & Lead Trainer",
                specialty: "Musculación & Fullbody",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf85mqNMwASJeJDDyNpU4jjd_INH7hUPcIRg&s",
                bio: "Fundador de IBF Trainers con más de 10 años de experiencia transformando atletas de alto rendimiento."
            },
            {
                id: 2,
                name: "Daniela Tode",
                role: "Nutritionist & Trainer",
                specialty: "Nutrición & Wellness",
                image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
                bio: "Experta en combinar la ciencia de la nutrición con el entrenamiento físico para resultados duraderos."
            },
            {
                id: 3,
                name: "Marcus Thorne",
                role: "Senior Trainer",
                specialty: "Tren Inferior & Potencia",
                image: "https://res.cloudinary.com/dvjfemxbz/image/upload/c_scale,f_auto,q_60,w_1000/technologische_ontwikkelingen_voor_fitnessondernemers_zoals_virtuele_fitnesslessen_en_high_intensity_interval_training_vvr0la_jptmhg.avif",
                bio: "Especialista en biomecánica aplicada al crecimiento muscular de alta precisión."
            },
            {
                id: 4,
                name: "Elena Rodriguez",
                role: "Recovery Expert",
                specialty: "Post Parto & Movilidad",
                image: "https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?auto=format&fit=crop&q=80&w=800",
                bio: "Apasionada por la salud femenina y la recuperación funcional tras el embarazo."
            }
        ],
        location: {
            title: "Nuestra Ubicación",
            address: "Madrid, España - Centros Fitness Park & Synergym en las mejores ubicaciones de la ciudad.",
            lat: 40.416775,
            lng: -3.703790
        }
    }
};

export default SITE_DATA;