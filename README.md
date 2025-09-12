# Vite + Vue: Tabla de Usuarios

Proyecto mínimo en Vue 3 creado con Vite. Muestra una tabla de usuarios (Nombre, Apellido, Fecha de Nacimiento y Edad) estilizada con Bootstrap 5.

## Requisitos
- Node.js y npm

## Instalación
```bash
npm install
```

## Desarrollo
Inicia el servidor de desarrollo en modo HMR:
```bash
npm run dev
```
La app quedará disponible en la URL que indique la terminal (por defecto http://localhost:5173).

## Build de producción
```bash
npm run build
npm run preview
```

## Estructura relevante
- `index.html`: incluye el CDN de Bootstrap.
- `src/App.vue`: renderiza el componente principal.
- `src/components/UserTable.vue`: contiene el arreglo de usuarios y la tabla.

## Notas
- Este proyecto usa el CDN de Bootstrap 5 para estilos

