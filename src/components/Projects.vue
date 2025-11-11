<template>
  <section class="projects-section" id="projects">
    <div class="title-container">
      <h3 class="projects-title">My Projects</h3>
    </div>
    
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-image">
          <div class="project-overlay">
            <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="view-code-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </a>
          </div>
        </div>
        
        <div class="project-info">
          <h4 class="project-name">{{ project.name }}</h4>
          <p class="project-description">{{ project.description }}</p>
          
          <div class="project-tech">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
          
          <div class="project-links">
            <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="link-btn">
              GitHub
            </a>
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="link-btn link-btn-primary">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'E-Commerce Dashboard',
          description: 'Dashboard interactivo para gestión de ventas con gráficos en tiempo real y análisis de métricas clave.',
          technologies: ['Vue.js', 'Chart.js', 'CSS Grid', 'Local Storage'],
          githubUrl: 'https://github.com/tu-usuario/ecommerce-dashboard',
          liveUrl: 'https://tu-demo.netlify.app'
        },
        {
          id: 2,
          name: 'Weather App',
          description: 'Aplicación meteorológica que consume API de OpenWeather para mostrar pronóstico detallado por ciudad.',
          technologies: ['JavaScript', 'REST API', 'Async/Await', 'CSS3'],
          githubUrl: 'https://github.com/tu-usuario/weather-app',
          liveUrl: 'https://tu-weather-demo.netlify.app'
        },
        {
          id: 3,
          name: 'Task Manager',
          description: 'Gestor de tareas con funcionalidad CRUD, filtros por categoría y persistencia de datos local.',
          technologies: ['Vue.js', 'Vuex', 'LocalStorage', 'Sass'],
          githubUrl: 'https://github.com/tu-usuario/task-manager',
          liveUrl: null
        },
        {
          id: 4,
          name: 'Portfolio Template',
          description: 'Template responsive para portfolios de desarrolladores con animaciones y diseño modular.',
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'AOS Library'],
          githubUrl: 'https://github.com/tu-usuario/portfolio-template',
          liveUrl: 'https://tu-portfolio-template.netlify.app'
        }
      ]
    };
  }
};
</script>

<style scoped>
.projects-section {
  padding: 80px 50px;
  background-color: #171c26;
}

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

.projects-title {
  color: #e54c60;
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
}

.project-card {
  background-color: #1e2430;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(229, 76, 96, 0.2);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #252d3d 0%, #1e2430 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(229, 76, 96, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-code-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
}

.view-code-btn svg {
  width: 50px;
  height: 50px;
}

.project-info {
  padding: 25px;
}

.project-name {
  color: #f0f0f0;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
}

.project-description {
  color: #c0c0c0;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 20px;
  min-height: 60px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  background-color: rgba(229, 76, 96, 0.15);
  color: #e54c60;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid rgba(229, 76, 96, 0.3);
}

.project-links {
  display: flex;
  gap: 12px;
}

.link-btn {
  flex: 1;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  border: 2px solid #e54c60;
  color: #e54c60;
  background-color: transparent;
}

.link-btn:hover {
  background-color: rgba(229, 76, 96, 0.1);
  transform: translateY(-2px);
}

.link-btn-primary {
  background-color: #e54c60;
  color: white;
}

.link-btn-primary:hover {
  background-color: #d13a50;
  border-color: #d13a50;
}
</style>
