# TecnoChile - Sistema de Gestión de Productos

**Módulo 7 - Actividad Evaluativa 3**

Aplicación SPA para gestionar el inventario de productos de la tienda "TecnoChile", construida con Vue 3, Vuex y Vue Router.

---

## � Tecnologías

- **Vue 3** (Composition API) - Framework JavaScript
- **Vite** - Build tool y dev server
- **Vuex** - Estado global centralizado
- **Vue Router** - Navegación entre vistas
- **Bootstrap 5** - Estilos (CDN)

---

## ⚙️ Instalación y Ejecución

```powershell
# Navegar a la carpeta del proyecto
cd "c:\Users\fabia\Documents\_Front_end_Trainee\Modulo 7\AE3\M7AE3-ABP3\M7AE3-ABP3"

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
# Abrir http://localhost:5173
```

Para build de producción:
```powershell
npm run build
```

---

## 📁 Estructura del Proyecto

```
src/
├── views/
│   ├── Home.vue          # Página de inicio
│   ├── Products.vue      # Gestión de productos (CRUD)
│   └── Login.vue         # Login demo
├── store/
│   └── index.js          # Vuex: state, getters, mutations, actions
├── router/
│   └── index.js          # Rutas de la aplicación
├── App.vue               # Componente raíz
├── main.js               # Punto de entrada
└── style.css             # Estilos globales
```

---

## ✨ Funcionalidades

### Vista de Productos (`/products`)
- **Listado completo** con código, nombre, stock y precio
- **Búsqueda en tiempo real** por nombre de producto
- **Contadores**: total de productos y stock total
- **Productos destacados** mostrados en tarjetas visuales
- **CRUD completo**:
  - ➕ Añadir producto (formulario con validación)
  - ✏️ Editar producto (prompt rápido)
  - ❌ Eliminar producto (con confirmación)

### Login Demo (`/login`)
- Formulario simple (sin backend)
- Estado de usuario en Vuex
- Redirección automática tras login

### Navegación
- Rutas: `/` (Home), `/products` (Productos), `/login`
- Header con menú y estado de sesión

---

## 📊 Modelo de Datos

**Producto:**
```javascript
{
  codigo: "0001",           // ID único
  nombre: "Audifonos",      // Nombre del producto
  stock: 100,               // Cantidad disponible
  precio: 30000,            // Precio en CLP
  color: "blue",            // Color CSS
  destacado: true           // Mostrar en destacados
}
```

**Store Vuex:**
- `state.products` - Array de productos
- `state.user` - Usuario logueado (o null)
- `getters` - totalProductsCount, totalStock
- `mutations/actions` - CRUD de productos y login/logout

---

## 🎯 Uso de la Aplicación

1. **Login** → Ingresar email en `/login` → Click "Entrar"
2. **Ver productos** → Revisar listado y contadores
3. **Buscar** → Escribir en campo de búsqueda
4. **Añadir** → Completar formulario → "Añadir"
5. **Editar** → Click "Editar" → Cambiar nombre
6. **Eliminar** → Click "Borrar" → Confirmar

---

## 🔧 Próximas Mejoras

- [ ] Persistencia en `localStorage`
- [ ] Modal de edición (en lugar de `prompt`)
- [ ] Validaciones más robustas
- [ ] Paginación y ordenamiento de tabla
- [ ] Tests unitarios y E2E

---

## 🐛 Solución de Problemas

**Error "Failed to resolve import 'vuex'":**
```powershell
npm install
```

**Puerto 5173 ocupado:**
```powershell
npm run dev -- --port 3000
```

**Los cambios no se reflejan:**
- Verificar que `npm run dev` esté corriendo
- Refrescar navegador (Ctrl+Shift+R)

---


**Fabián Jeldes  
**Repositorio:** [Entregas_FrontEnd_UNAB](https://github.com/Fabian-Jeldes/Entregas_FrontEnd_UNAB)  
**Branch:** M7AE3-ABP3
Proyecto académico - Front-End UNAB 2025
