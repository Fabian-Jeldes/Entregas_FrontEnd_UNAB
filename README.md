# AE5-ABP5 - Exploración de Librerías UI y SSR

Este proyecto es una aplicación Vue.js con Vuetify construida con **Vite** que presenta información comparativa sobre:
1. Librerías UI para Vue.js (BootstrapVue, Vuetify, Buefy, Element UI)
2. Server Side Rendering (SSR) con Nuxt.js y Quasar Framework

## ⚡ Tecnología

Este proyecto usa **Vite** en lugar de Vue CLI para:
- ⚡ Inicio instantáneo del servidor (< 1 segundo)
- 📦 Menos dependencias (40 paquetes vs 918)
- 🚀 Hot Module Replacement ultrarrápido
- ✨ Sin configuración de ESLint ni Babel

## Estructura del Proyecto

```
AE5-ABP5/
├── index.html              # HTML principal (en raíz con Vite)
├── src/
│   ├── views/
│   │   ├── Home.vue          # Página de inicio
│   │   ├── UILibraries.vue   # Comparativa de librerías UI
│   │   └── SSRInfo.vue       # Información sobre SSR
│   ├── router/
│   │   └── index.js          # Configuración de rutas
│   ├── plugins/
│   │   └── vuetify.js        # Configuración de Vuetify
│   ├── App.vue               # Componente principal
│   └── main.js               # Punto de entrada
├── vite.config.js          # Configuración de Vite
├── package.json
└── README.md
```

## Instalación

Instalar todas las dependencias:
```bash
npm install
```

## Ejecución

Iniciar el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Compilación para Producción

```bash
npm run build
```

## Características

### Actividad 1: Librerías UI
- Tabla comparativa completa de las 4 librerías principales
- Tarjetas detalladas con ventajas y desventajas
- Casos de uso recomendados
- Análisis de cuándo usar cada librería

### Actividad 2: SSR
- Explicación detallada de Server Side Rendering
- Comparación SSR vs CSR
- Ventajas y desventajas del SSR
- Información sobre Nuxt.js y Quasar Framework
- Casos de uso y mejores prácticas

## Tecnologías Utilizadas

- **Vite 5** - Build tool ultrarrápido
- **Vue.js 3** - Framework progresivo
- **Vuetify 3** - Librería de componentes Material Design
- **Vue Router 4** - Enrutamiento oficial de Vue
- **Material Design Icons** - Iconos

## Ventajas de esta Configuración

✅ **Sin ESLint** - No hay errores molestos de linting durante desarrollo  
✅ **Sin Babel** - Usa navegadores modernos directamente  
✅ **40 dependencias** - En lugar de 918 con Vue CLI  
✅ **Inicio instantáneo** - Servidor listo en < 1 segundo  
✅ **HMR ultrarrápido** - Cambios reflejados inmediatamente  

## Autor

Fabián Jeldes   
Proyecto desarrollado para la Actividad AE5-ABP5
