export function getCVData() {
  return {
    // Información del Perfil y Encabezado
    name: "Fabián Andrés Jeldes", // [cite: 1]
    title: "Analista Programador | Analista de Datos | Productor y Gestor de Proyectos", // [cite: 2]
    profile: "Profesional con formación en Programación, Análisis de Datos y Producción de Eventos, con una sólida base en gestión de proyectos, liderazgo operativo y comunicación bilingüe (Inglés-Español, nivel C1/C2). Cuento con experiencia en análisis y limpieza de datos, soporte técnico, desarrollo web (HTML, CSS, JS, SQL, Python) y coordinación de proyectos corporativos, destacando por la capacidad de articular equipos funcionales y optimizar procesos.", // [cite: 4,5]

    // Habilidades (para la sección Skill-Set)
    skills: [
      {
        icon: 'Code',
        title: 'Lenguajes y Tecnologías',
        description: 'HTML, CSS, JavaScript, SQL, Python.' // [cite: 20]
      },
      {
        icon: 'Data',
        title: 'Análisis y Gestión de Datos',
        description: 'Análisis, organización y visualización de datos. Limpieza y depuración de bases de datos (Excel, SQL).' // [cite: 23,11]
      },
      {
        icon: 'Team',
        title: 'Liderazgo y Gestión de Proyectos',
        description: 'Planificación, priorización y orientación a resultados. Liderazgo operativo y articulación de equipos funcionales.' // [cite: 24,25,27]
      },
      {
        icon: 'Lang',
        title: 'Comunicación Bilingüe',
        description: 'Inglés fluido (escrito y hablado) - Español nativo. Examen CEFR C1-C2 (Avanzado a Proficiente).' // [cite: 28,26,14]
      }
    ],

    // Experiencia Destacada
    experience: [
      {
        company: "Auditoría de RRHH (ENGIE Chile)",
        role: "Asistente de análisis de datos",
        period: "Septiembre 2024 - Febrero 2025", // [cite:11]
        tasks: "Consolidación y depuración de bases de datos. Limpieza y organización de información en Excel para su análisis dinámico." // [cite:11]
      }
      // ... y el resto de experiencias (Nestlé, Outlier Latam, etc.)
    ],

    // Formación (para una posible sección de Formación)
    education: [
      { title: "Analista Programador", institution: "INACAP Ñuñoa", year: 2025 }, // [cite:7]
      { title: "Certificado de Analista de Datos (Beca Google)", institution: "", year: 2025 } // [cite:7]
    ]
  };
}