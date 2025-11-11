<template>
  <div id="portfolio-app">
    <Header />
    <HeroSection id="hero" />
    <SkillSet id="skills" :skills="professionalData.skills" />
    <Projects id="projects" />
    <ContactForm id="contact" />
    <Footer />
    <SideGraphics :activeSection="activeSection" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import SkillSet from './components/Skillset.vue';
import Projects from './components/Projects.vue';
import ContactForm from './components/ContactForm.vue';
import Footer from './components/Footer.vue';
import { getCVData } from './CV.js';
import SideGraphics from './components/SideGraphics.vue';

export default {
  name: 'App',
  components: {
    Header,
    HeroSection,
    SkillSet,
    Projects,
    ContactForm,
    Footer,
    SideGraphics
  },
  data() {
    return {
      activeSection: 'hero', // Estado inicial
      // Importamos los datos del CV
      professionalData: getCVData() 
    };
  },
  mounted() {
    // Lógica para actualizar activeSection basado en el scroll
    window.addEventListener('scroll', this.onScroll);
    this.handleScroll(); // Inicializa el estado al montar
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.handleScroll();
    },
    handleScroll() {
      const sections = ['hero', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          this.activeSection = sections[i];
          break;
        }
      }
    }
  }
};
</script>

<style>
/* Estilos globales y la paleta de colores oscuros */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#portfolio-app {
  background-color: #171c26; /* Color de fondo oscuro principal */
  color: #f0f0f0; /* Color de texto claro */
  font-family: Arial, sans-serif;
  min-height: 100vh;
  overflow-x: hidden; /* Evitar scroll horizontal */
}

/* Estilos responsive globales */
@media (max-width: 768px) {
  #portfolio-app {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  #portfolio-app {
    font-size: 13px;
  }
}
/* Otros estilos globales como resets de margen y padding */
</style>