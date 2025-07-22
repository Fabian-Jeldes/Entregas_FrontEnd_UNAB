# Smart-EV - Interfaz Web Modular con SASS

Este proyecto es una interfaz web sencilla y modular para la gestión de vehículos eléctricos, desarrollada como parte del módulo 3 del curso Front End Trainee.

## Estructura del proyecto

- **HTML:** Estructura básica con header, sección principal y footer con enlaces a redes sociales.
- **SASS:** Organización siguiendo el patrón 7-1 para facilitar el mantenimiento y la escalabilidad.
- **CSS:** Generado automáticamente a partir de los archivos SASS.

## Características principales

- Header con logo y menú de navegación.
- Sección principal con información relevante y galería de imágenes.
- Footer con enlaces a redes sociales.
- Estilos modernos y responsivos utilizando variables, mixins y componentes SASS.

## Instalación y uso

1. Clona el repositorio. (gh repo clone Fabian-Jeldes/Entregas_FrontEnd_UNAB)
2. Instala SASS de forma global si no lo tienes:
   ```
   npm install -g sass
   ```
3. Compila los archivos SASS a CSS:
   ```
   sass sass/styles.scss css/styles.css --watch
   ```
4. Abre el archivo `html/index.html` en tu navegador.

## Estructura de carpetas

```
├── html/
│   └── index.html
├── css/
│   └── styles.css
├── sass/
│   ├── styles.scss
│   ├── abstracts/
│   ├── base/
│   ├── components/
│   ├── layout/
│   └── pages/
```

## Autor

Desarrollado por Fabián Jeldes para el curso Front End Trainee.
