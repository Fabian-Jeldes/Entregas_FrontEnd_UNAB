# 🔥 Pokeguía - Aplicación Vue 3 con Firebase

> Una aplicación web moderna para buscar y explorar información detallada de Pokémon, con sistema completo de autenticación.

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-10.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#️-configuración)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [API Reference](#-api-reference)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Autor](#-autor)

---

## 📖 Descripción

**Pokeguía** es una aplicación web interactiva desarrollada con Vue 3 que permite a los usuarios buscar información detallada sobre diferentes Pokémon. La aplicación consume la [PokéAPI](https://pokeapi.co/) para obtener datos en tiempo real y utiliza Firebase Authentication para gestionar el acceso de usuarios.

### Funcionalidades Principales:

- 🔐 Sistema completo de autenticación (Login/Registro)
- 🔍 Búsqueda de Pokémon por nombre
- 🖼️ Visualización de imágenes de alta calidad
- ⚔️ Lista de movimientos del Pokémon
- ✨ Lista de habilidades con indicador de habilidades ocultas
- 🛡️ Rutas protegidas con Navigation Guards
- 🎨 Interfaz moderna y responsive

---

## ✨ Características

### Autenticación
- ✅ Registro de usuarios con email/password
- ✅ Inicio de sesión seguro
- ✅ Cierre de sesión
- ✅ Persistencia de sesión
- ✅ Validación de formularios
- ✅ Manejo de errores específicos de Firebase

### Pokeguía
- ✅ Carga automática de Pikachu al iniciar
- ✅ Búsqueda de Pokémon en tiempo real
- ✅ Imágenes de alta calidad (Official Artwork)
- ✅ Listado de movimientos (primeros 10)
- ✅ Listado de habilidades
- ✅ Manejo de errores (Pokémon no encontrado)

### Navegación
- ✅ Vue Router configurado
- ✅ Guards de navegación
- ✅ Redirecciones automáticas según estado de autenticación
- ✅ Manejo de rutas 404

---

## 🛠️ Tecnologías

### Core
- **Vue 3** - Framework progresivo de JavaScript
- **Vite 7** - Build tool ultra-rápido
- **Vue Router 4** - Enrutamiento oficial de Vue

### Backend & Autenticación
- **Firebase 10** - Authentication y configuración
- **Firebase Auth** - Gestión de usuarios

### HTTP & APIs
- **Axios 1.13** - Cliente HTTP para consumir APIs
- **PokéAPI** - API REST de Pokémon

### Estilos
- **CSS3** - Estilos personalizados
- **Scoped Styles** - Estilos encapsulados por componente

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (versión 7 o superior)
- **Git**
- Cuenta de **Firebase** (gratuita)

Verifica las versiones instaladas:

```bash
node -v
npm -v
git --version
```

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Fabian-Jeldes/Entregas_FrontEnd_UNAB.git
cd Entregas_FrontEnd_UNAB
git checkout M7AE2-ABP2
cd "Poke_vite_M7ABP2"
```

### 2. Instalar dependencias

```bash
npm install
```

Esto instalará:
- Vue 3.5.22
- Vue Router 4.2.0
- Firebase 10.0.0
- Axios 1.13.1
- Vite 7.1.7

### 3. Configurar Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto o usa uno existente
3. Habilita **Authentication** → **Email/Password**
4. Copia tu configuración de Firebase

5. Actualiza `src/services/firebase.js` con tus credenciales:

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
  measurementId: "TU_MEASUREMENT_ID"
};
```

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173/`

---

## ⚙️ Configuración

### Variables de Entorno (Opcional)

Para mayor seguridad, puedes usar variables de entorno:

1. Crea un archivo `.env` en la raíz:

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
# ... resto de configuración
```

2. Actualiza `firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // ...
};
```

### Habilitar Autenticación en Firebase

1. Firebase Console → Tu proyecto
2. **Authentication** → **Sign-in method**
3. Habilita **Email/Password**
4. Guarda los cambios

---

## 💡 Uso

### Registro de Usuario

1. Abre la aplicación en `http://localhost:5173/`
2. Haz clic en **"¿No tienes cuenta? Regístrate"**
3. Ingresa:
   - Email válido
   - Contraseña (mínimo 6 caracteres)
   - Confirma la contraseña
4. Haz clic en **"Registrarse"**
5. Serás redirigido automáticamente al Home

### Inicio de Sesión

1. En la página de Login, ingresa:
   - Email registrado
   - Contraseña
2. Haz clic en **"Ingresar"**
3. Accederás a la Pokeguía

### Buscar Pokémon

1. Una vez autenticado, verás a **Pikachu** por defecto
2. Escribe el nombre de un Pokémon en el buscador (en inglés)
   - Ejemplos: `charizard`, `mewtwo`, `bulbasaur`
3. Haz clic en **"Buscar"**
4. Se mostrarán:
   - Imagen oficial del Pokémon
   - Lista de movimientos
   - Lista de habilidades

### Cerrar Sesión

- Haz clic en el botón **"Salir"** en la esquina superior derecha
- Serás redirigido al Login

---

## 📁 Estructura del Proyecto

```
Poke_vite_M7ABP2/
├── public/
│   └── vite.svg                 # Favicon
├── src/
│   ├── assets/                  # Recursos estáticos
│   │   └── vue.svg
│   ├── components/              # Componentes Vue
│   │   ├── Home.vue            # Pokeguía principal
│   │   ├── Login.vue           # Formulario de login
│   │   └── Register.vue        # Formulario de registro
│   ├── router/                  # Configuración de rutas
│   │   └── index.js            # Rutas y guards
│   ├── services/                # Servicios externos
│   │   ├── firebase.js         # Configuración Firebase
│   │   └── pokeapi.js          # Cliente PokéAPI
│   ├── App.vue                  # Componente raíz
│   ├── main.js                  # Punto de entrada
│   └── style.css                # Estilos globales
├── .gitignore
├── index.html                   # HTML principal
├── package.json                 # Dependencias
├── README.md                    # Este archivo
└── vite.config.js              # Configuración Vite
```

---

## 🔌 API Reference

### PokéAPI

La aplicación consume la [PokéAPI v2](https://pokeapi.co/docs/v2):

**Endpoint utilizado:**
```
GET https://pokeapi.co/api/v2/pokemon/{nombre}
```

**Ejemplo de petición:**
```javascript
import axios from 'axios'

const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
console.log(response.data)
```

**Datos extraídos:**
- `sprites.other.official-artwork.front_default` - Imagen
- `moves[].move.name` - Movimientos
- `abilities[].ability.name` - Habilidades
- `abilities[].is_hidden` - Si es habilidad oculta

---

## 🎨 Capturas de Pantalla

### Página de Login
```
┌─────────────────────────────────┐
│     Iniciar Sesión              │
│  ┌───────────────────────────┐  │
│  │  Email: [____________]    │  │
│  │  Password: [__________]   │  │
│  │  [Ingresar]               │  │
│  │  ¿No tienes cuenta?       │  │
│  │  Regístrate               │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### Página de Registro
```
┌─────────────────────────────────┐
│     Crear Cuenta                │
│  ┌───────────────────────────┐  │
│  │  Email: [____________]    │  │
│  │  Password: [__________]   │  │
│  │  Confirmar: [_________]   │  │
│  │  [Registrarse]            │  │
│  │  ¿Ya tienes cuenta?       │  │
│  │  Inicia Sesión            │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### Pokeguía (Home)
```
┌─────────────────────────────────┐
│  Pokeguía            [Salir]    │
│  Buscar: [pikachu] [Buscar]     │
│  ┌───────────────────────────┐  │
│  │   🖼️ [Imagen Pikachu]     │  │
│  └───────────────────────────┘  │
│  Movimientos:                   │
│  • thunder-shock                │
│  • thunderbolt                  │
│  • quick-attack                 │
│                                 │
│  Habilidades:                   │
│  • static                       │
│  • lightning-rod 🔒             │
└─────────────────────────────────┘
```

---

## 🔒 Seguridad

- ✅ Las contraseñas son manejadas por Firebase (hash automático)
- ✅ Tokens de autenticación gestionados por Firebase
- ✅ Rutas protegidas con Navigation Guards
- ✅ Validación de formularios en cliente
- ⚠️ **Importante:** No expongas tus credenciales de Firebase en repositorios públicos

---

## 🚢 Despliegue

### Build para producción

```bash
npm run build
```

Esto generará una carpeta `dist/` con los archivos optimizados.

### Preview del build

```bash
npm run preview
```

### Opciones de hosting recomendadas:

- **Firebase Hosting** (recomendado por integración)
- **Vercel**
- **Netlify**
- **GitHub Pages**

---

## 🐛 Solución de Problemas

### Error: "auth/configuration-not-found"
**Solución:** Habilita Email/Password en Firebase Console → Authentication

### Error: Pokémon no encontrado
**Solución:** Verifica que el nombre esté en inglés y en minúsculas

### Error: "npm install" falla
**Solución:** Limpia caché y reinstala
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### La página se ve en blanco
**Solución:** Verifica la consola del navegador (F12) para errores

---

## 📚 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm run preview      # Preview del build

# Linting (si está configurado)
npm run lint         # Ejecuta el linter
```

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📝 Requisitos del Proyecto (Cumplidos)

- ✅ Crear proyecto Vue.js con Vite
- ✅ Método que consuma PokéAPI con axios
- ✅ Computed properties para foto, movimientos y habilidades
- ✅ Interfaz con búsqueda, imagen y listas
- ✅ Firebase Authentication configurado
- ✅ Componentes Login y Home
- ✅ Vue Router implementado
- ✅ Navigation Guards para proteger rutas
- ✅ Hook `created()` para cargar Pikachu automáticamente
- ✅ Botón de salir con desautenticación

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos como parte del módulo M7 - ABPAE2.

---

## 👨‍💻 Autor

**Fabián Jeldes**

- GitHub: [@Fabian-Jeldes](https://github.com/Fabian-Jeldes)
- Repositorio: [Entregas_FrontEnd_UNAB](https://github.com/Fabian-Jeldes/Entregas_FrontEnd_UNAB)

---

## 🙏 Agradecimientos

- [Vue.js Team](https://vuejs.org/) - Framework
- [PokéAPI](https://pokeapi.co/) - API de Pokémon
- [Firebase](https://firebase.google.com/) - Backend y autenticación
- [Vite](https://vitejs.dev/) - Build tool

---

## 📞 Soporte

Si tienes preguntas o problemas:

1. Revisa la sección de [Solución de Problemas](#-solución-de-problemas)
2. Abre un [Issue en GitHub](https://github.com/Fabian-Jeldes/Entregas_FrontEnd_UNAB/issues)
3. Contacta al autor

---

<div align="center">

**⭐ Si te gustó el proyecto, no olvides darle una estrella en GitHub ⭐**

Hecho con ❤️ y Vue 3

</div>
