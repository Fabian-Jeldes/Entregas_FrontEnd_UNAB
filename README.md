# Techno Chile — demo de venta (Vue 3 + Vite)

Breve
- Página demo que muestra un catálogo de productos tecnológicos en un carrusel de cards. Incluye un `Header` con navbar, cards con imagen, descripción, precio (CLP) y stock, y pruebas unitarias sencillas para `Header`.

Cómo ejecutar (Windows PowerShell)
- Instalar dependencias:

```powershell
npm install
```

- Levantar la app en desarrollo:

```powershell
npm run dev
```

- Ejecutar pruebas unitarias (Jest):

```powershell
npm test
```

Qué contiene
- `src/components/Header.vue` — header con título y navbar.
- `src/components/ProductCard.vue` — card de producto (imagen, descripción, precio en CLP, stock y botón Comprar que reduce stock).
- `src/App.vue` — página principal que muestra el carrusel de productos.
- `tests/header.spec.js` — pruebas que validan las props del Header.

**Fabián Jeldes  
**Repositorio:** [Entregas_FrontEnd_UNAB](https://github.com/Fabian-Jeldes/Entregas_FrontEnd_UNAB)  
**Branch:** M7AE4-ABP4
Proyecto académico - Front-End UNAB 2025
