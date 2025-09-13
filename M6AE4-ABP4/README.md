# Pokédex Simple (Vue 3 + Vite)

Aplicación sencilla que muestra una lista de pokemones con un buscador.

## Requisitos cubiertos

- Input para buscar un pokémon por su nombre.
- Lista de pokemones obtenida desde `src/data/pokemones.json`.
- Validación de formulario (input requerido) usando métodos/reactividad de Vue.
- Uso de Bootstrap para estilos.
- Si no existen pokemones según la búsqueda, se muestra el mensaje: `el pokemon que desea buscar no existe`.

## Ejecutar el proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Levantar el servidor de desarrollo:

```bash
npm run dev
```

3. Abrir el navegador en la URL que indique Vite (por defecto `http://localhost:5173`).

## Estructura relevante

- `src/App.vue`: UI de búsqueda y renderizado de resultados.
- `src/data/pokemones.json`: dataset simple usado por la app.
- `index.html`: incluye Bootstrap por CDN.

