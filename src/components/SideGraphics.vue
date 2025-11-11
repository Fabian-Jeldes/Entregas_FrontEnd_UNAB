<template>
  <div class="side-graphics">
    <div 
      v-for="section in sections" 
      :key="section.id" 
      :class="['dot', { 'active': activeSection === section.id }]"
      @click="scrollToSection(section.id)"
    ></div>
    </div>
</template>

<script>
export default {
  name: 'SideGraphics',
  props: {
    // Recibe la sección activa del componente padre (App.vue)
    activeSection: {
      type: String,
      default: 'hero'
    }
  },
  data() {
    return {
      // Definimos las secciones que queremos rastrear
      sections: [
        { id: 'hero' },
        { id: 'skills' },
        { id: 'projects' },
        { id: 'contact' },
      ]
    };
  },
  methods: {
    // Función para hacer scroll suave al hacer clic en un punto
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.side-graphics {
  position: fixed !important;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 9999;
  pointer-events: auto;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: transparent;
  border: 2px solid #555;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  pointer-events: auto;
}

.dot:hover {
  border-color: #e54c60;
  transform: scale(1.3);
}

.dot.active {
  background-color: #e54c60;
  border-color: #e54c60;
  box-shadow: 0 0 15px rgba(229, 76, 96, 0.6);
}

/* Media Queries para Responsive */
@media (max-width: 1024px) {
  .side-graphics {
    right: 30px;
  }
}

@media (max-width: 768px) {
  .side-graphics {
    right: 15px;
    gap: 15px;
  }

  .dot {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 480px) {
  .side-graphics {
    display: none; /* Ocultar en móviles muy pequeños para no interferir */
  }
}
</style>