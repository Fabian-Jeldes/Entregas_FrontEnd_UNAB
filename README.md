
# M5AE2 - ABP2 (POO)

Breve proyecto de ejemplo desarrollado como parte del módulo 5 (Programación Orientada a Objetos) del curso de Front-end. Contiene una pequeña aplicación web con bundling mediante Webpack y código JavaScript moderno transpilado con Babel.

## Descripción

Este repositorio contiene los archivos necesarios para una aplicación cliente simple que demuestra conceptos de POO en JavaScript, gestión de módulos con Webpack y compatibilidad con navegadores mediante Babel y polyfills.

## Tecnologías

- JavaScript (ESNext)
- HTML / CSS
- Webpack
- Babel
- core-js, regenerator-runtime (polyfills)

## Estructura del proyecto

- `index.html` — Punto de entrada HTML.
- `CSS/styles.css` — Estilos del proyecto.
- `JS/main.js` — Código fuente principal (módulos).
- `webpack.config.js` — Configuración de bundling.
- `package.json` — Dependencias y metadatos del proyecto.

## Requisitos

- Node.js
- npm

## Instalación

Instala las dependencias del proyecto:

```bash
npm install
```

## Ejecutar localmente

Después de construir, abre `index.html` en un navegador o sirve el contenido de la carpeta raíz o `dist/` con un servidor estático. Un método rápido usando npx (si no tienes un servidor instalado globalmente):

```bash
npx http-server ./dist -c-1
```

También puedes simplemente abrir `index.html` desde el explorador si los assets referenciados apuntan a rutas relativas.

## Autor
Fabián Jeldes
