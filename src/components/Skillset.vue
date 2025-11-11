<template>
  <section class="skill-set-section" id="skills">
    <div class="title-container">
      <h3 class="skill-set-title">Skill-Set</h3>
    </div>
    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.title" class="skill-card">
        <div class="icon-placeholder" v-html="skill.svg" aria-hidden="true"></div>
        <h4>{{ skill.title }}</h4>
        <p>{{ skill.description }}</p>
      </div>
    </div>
  </section>
  
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          icon: 'Vue',
          title: 'Vue.js',
          description: 'Framework progresivo de JavaScript para construir interfaces de usuario interactivas y aplicaciones SPA (Single Page Application).',
          svg: `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2L2 7l10 15 10-15L12 2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/>
              <path d="M2 7l10 15L22 7" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
              <path d="M7 5l5 7.5L17 5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
            </svg>
          `
        },
        {
          icon: 'Git',
          title: 'Git Version Control',
          description: 'Gestión de versiones con Git: commits, ramas, merges y flujos de trabajo colaborativos (PRs, rebases).',
          svg: `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M16 4v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 20v-8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 12l4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="20" r="2" fill="currentColor"/>
              <circle cx="16" cy="4" r="2" fill="currentColor"/>
              <circle cx="8" cy="8" r="2" fill="currentColor"/>
            </svg>
          `
        },
        {
          icon: 'Web',
          title: 'Web Development',
          description: 'Desarrollo web full-stack: HTML5, CSS3, JavaScript ES6+, frameworks modernos y buenas prácticas de accesibilidad.',
          svg: `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M8 9l-4 4 4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 9l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13 5l-2 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          `
        },
        {
          icon: 'SEO',
          title: 'SEO Optimization',
          description: 'Optimización SEO: estrategia on-page, meta tags, rendimiento web y mejores prácticas para mejorar posicionamiento.',
          svg: `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="11" cy="11" r="5" stroke="currentColor" stroke-width="1.6" fill="none"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
          `
        },
        {
          icon: 'Design',
          title: 'Design Thinking',
          description: 'Metodología centrada en el usuario para resolver problemas: empatía, ideación, prototipado y testing iterativo.',
          svg: `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2a3 3 0 013 3c0 .74-.26 1.4-.7 1.93A4 4 0 0117 10c0 1.42-.74 2.66-1.85 3.37.59.61.93 1.42.93 2.3a3.5 3.5 0 11-7 0c0-.88.34-1.69.93-2.3A4.01 4.01 0 018 10a4 4 0 012.7-3.07A3.01 3.01 0 0112 2z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              <circle cx="12" cy="19" r="2" stroke="currentColor" stroke-width="1.4" fill="none"/>
            </svg>
          `
        },
        {
          icon: 'Python',
          title: 'Python & Data Analysis',
          description: 'Análisis de datos con Python: pandas, numpy, visualización de datos y scripts de automatización.',
          svg: `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.4" fill="none"/>
              <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          `
        }
      ]
    };
  }
};
</script>

<style scoped>
.skill-set-section {
  padding: 80px 50px;
}

/* Contenedor con estilo para el título */
.title-container {
  display: inline-block;
  margin-bottom: 50px;
  padding: 12px 30px;
  background: linear-gradient(135deg, rgba(229, 76, 96, 0.1) 0%, rgba(209, 58, 80, 0.15) 100%);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(229, 76, 96, 0.2);
  transition: all 0.3s ease;
  cursor: default;
}

.title-container:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(229, 76, 96, 0.35);
  background: linear-gradient(135deg, rgba(229, 76, 96, 0.15) 0%, rgba(209, 58, 80, 0.2) 100%);
}

.skill-set-title {
  color: #e54c60;
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.skill-card {
  background-color: #1e2430;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(229, 76, 96, 0.2);
}

.skill-card h4 {
  margin-bottom: 10px;
  color: #f0f0f0;
  font-size: 20px;
}

.skill-card p {
  color: #c0c0c0;
  line-height: 1.6;
  font-size: 15px;
}

.icon-placeholder {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  color: #e54c60;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-placeholder svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Media Queries para Responsive */
@media (max-width: 1024px) {
  .skill-set-section {
    padding: 60px 30px;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .skill-set-section {
    padding: 50px 20px;
  }

  .title-container {
    padding: 10px 25px;
    margin-bottom: 35px;
  }

  .skill-set-title {
    font-size: 28px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .skill-card {
    padding: 25px;
    text-align: center;
  }

  .icon-placeholder {
    margin-left: auto;
    margin-right: auto;
  }

  .skill-card h4 {
    font-size: 18px;
  }

  .skill-card p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .skill-set-section {
    padding: 40px 15px;
  }

  .title-container {
    padding: 8px 20px;
    margin-bottom: 25px;
  }

  .skill-set-title {
    font-size: 24px;
  }

  .skill-card {
    padding: 20px;
    text-align: center;
  }

  .icon-placeholder {
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
    margin-left: auto;
    margin-right: auto;
  }

  .skill-card h4 {
    font-size: 16px;
  }

  .skill-card p {
    font-size: 13px;
  }
}
</style>