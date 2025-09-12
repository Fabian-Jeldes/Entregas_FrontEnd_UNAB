# Lista de Personajes — Vue 3 + Vite

App básica que muestra una lista de personajes (Pokémon) con nombre y descripción, usando Vue 3 y directivas como `v-for` y `:key`.

## Requisitos cubiertos
- Usar Vue y sus directivas (`v-for`, `:key`, interpolación).
- Crear una estructura Vue con Vite.
- Usar un arreglo de objetos con `id`, `nombre`, `descripcion`.
- Datos definidos en un objeto reactivo.

## Requisitos previos
- Node.js 18+ y npm.

## Cómo ejecutar
```bash
# Instalar dependencias (una sola vez)
npm install

# Levantar el servidor de desarrollo
npm run dev
```
Abre la URL que muestra la terminal (por defecto: http://localhost:5173).

## Editar los datos
- Archivo: `src/App.vue`
- Arreglo: `state.personajes`

```js
const state = reactive({
  personajes: [
    { id: 1, nombre: 'pikachu', descripcion: '...' },
    // ...
  ]
})
```

## Estructura mínima
- `index.html`: punto de entrada de Vite.
- `src/main.js`: monta la app Vue.
- `src/App.vue`: lista y estilos de la vista principal.
- `src/style.css`: estilos globales sencillos.

## Build de producción (opcional)
```bash
npm run build
npm run preview   # sirve el build para revisar
```

## Notas
- El contador en el encabezado muestra la cantidad de personajes.
- Incluye estado vacío y tarjetas responsivas con un pequeño chip de ID.
- Soporta modo claro/oscuro según la preferencia del sistema.
