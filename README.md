# 🚀 Portfolio Personal - Fabián Jeldes

<div align="center">
  
  ![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

  **Portfolio profesional interactivo desarrollado con Vue.js 3 y Vite**

  [Demo en Vivo](#) | [Documentación](#tecnologías-utilizadas) | [Contacto](#contacto)

</div>

---

## 📋 Descripción del Producto Digital

Este portfolio es una **aplicación web de una sola página (SPA)** diseñada para presentar mis habilidades, proyectos y experiencia profesional como **Analista Programador, Analista de Datos y Gestor de Proyectos**. 

El sitio presenta:
- ✨ **Diseño moderno y responsive** con una paleta de colores oscuros profesionales
- 🎯 **Navegación intuitiva** con scroll suave y gráficos laterales interactivos
- 💼 **Sección de habilidades** con iconos SVG personalizados
- 📂 **Galería de proyectos** vinculada a repositorios de GitHub
- 📧 **Formulario de contacto** funcional para conexiones profesionales
- 🔄 **Animaciones y efectos hover** para una experiencia de usuario atractiva

---

## 🛠️ Tecnologías Utilizadas

### Frontend Framework & Build Tool
- **[Vue.js 3](https://vuejs.org/)** - Framework progresivo de JavaScript para construir interfaces de usuario
- **[Vite](https://vitejs.dev/)** - Build tool de próxima generación para desarrollo rápido

### Lenguajes & Estilos
- **JavaScript ES6+** - Lógica de aplicación moderna
- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados con:
  - Flexbox & CSS Grid
  - Transiciones y animaciones
  - Variables CSS
  - Scoped styles

### Características Técnicas
- ✅ **Componentes reutilizables** (Header, HeroSection, Skillset, Projects, ContactForm, SideGraphics)
- ✅ **Arquitectura modular** con separación de concerns
- ✅ **Gestión de estado reactivo** con Vue Composition/Options API
- ✅ **SVG inline** para iconos escalables y personalizables
- ✅ **Event listeners optimizados** para scroll tracking
- ✅ **Responsive design** adaptado a múltiples dispositivos

---

## 💡 Motivación del Proyecto

Este portfolio nace de la necesidad de **consolidar mi identidad profesional digital** y demostrar mis competencias técnicas de manera práctica. Como profesional en formación continua, quería crear una plataforma que:

1. **Refleje mi evolución profesional**: Desde el análisis de datos hasta el desarrollo front-end y la gestión de proyectos
2. **Demuestre habilidades técnicas**: Implementando un proyecto real con tecnologías modernas
3. **Facilite conexiones profesionales**: Ofreciendo múltiples canales de contacto

---

## 📦 Guía de Instalación
### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/portfolio-fabian-jeldes.git
   cd portfolio-fabian-jeldes/PortfolioV1
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - El proyecto se ejecutará en `http://localhost:5173` (o el puerto que Vite asigne)
   - La aplicación se recargará automáticamente al hacer cambios

### Scripts Disponibles

```bash
# Desarrollo con hot-reload
npm run dev

# Compilar para producción
npm run build

# Preview de la build de producción
npm run preview
```

---

## 🎨 Guía de Uso

### Navegación

El portfolio está dividido en **4 secciones principales**:

1. **Hero Section** (`#hero`)
   - Presentación personal con foto de perfil
   - Descripción profesional
   - Botón de contacto directo

2. **Skill-Set** (`#skills`)
   - Grid de 6 habilidades técnicas con iconos personalizados
   - Descripciones detalladas de cada competencia
   - Efecto hover para interactividad

3. **Projects** (`#projects`)
   - Galería de proyectos destacados
   - Cards vinculadas a repositorios de GitHub
   - Tecnologías utilizadas en cada proyecto

4. **Contact** (`#contact`)
   - Formulario de contacto funcional
   - Campos de email y mensaje
   - Validación del lado del cliente

---

## 📂 Estructura del Proyecto

```
PortfolioV1/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/          # Imágenes, SVGs, etc.
│   │   ├── tagcode.svg
│   │   └── FJ_CV_Profile.jpg
│   ├── components/      # Componentes Vue
│   │   ├── Header.vue
│   │   ├── HeroSection.vue
│   │   ├── Skillset.vue
│   │   ├── Projects.vue
│   │   ├── ContactForm.vue
│   │   └── SideGraphics.vue
│   ├── App.vue          # Componente raíz
│   ├── main.js          # Entry point
│   ├── style.css        # Estilos globales
│   └── CV.js            # Datos del CV
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎯 Características Destacadas

- 🌙 **Tema oscuro profesional** con paleta de colores consistente
- 🎭 **Animaciones suaves** en transiciones y hovers
- 📱 **Diseño responsive** adaptado a móviles, tablets y desktop
- ⚡ **Carga rápida** gracias a Vite y optimizaciones
- 🔍 **SEO-friendly** con semántica HTML correcta
- ♿ **Accesibilidad** con atributos ARIA y navegación por teclado

---

## 🚧 Próximas Mejoras

- [ ] Integración con backend para formulario de contacto funcional
- [ ] Sección de blog técnico
- [ ] Modo claro/oscuro toggle
- [ ] Internacionalización (i18n) Español/Inglés
- [ ] Animaciones con GSAP o Framer Motion
- [ ] Tests unitarios con Vitest
- [ ] CI/CD con GitHub Actions
- [ ] Deploy automático a Netlify/Vercel

---

## 👨‍💻 Autor
**Fabián Andrés Jeldes**

