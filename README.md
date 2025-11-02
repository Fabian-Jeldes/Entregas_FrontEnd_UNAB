# 🔥 Pokeguía - Vue 3 + Firebase

Aplicación web para buscar información de Pokémon con autenticación Firebase.

## 📖 Descripción

Pokeguía permite buscar Pokémon usando la PokéAPI, mostrando imagen, movimientos y habilidades. Incluye sistema completo de login/registro con Firebase.

## ✨ Características

- 🔐 Autenticación (Login/Registro/Logout)
- 🔍 Búsqueda de Pokémon
- 🖼️ Imágenes de alta calidad
- ⚔️ Lista de movimientos
- ✨ Lista de habilidades
- 🛡️ Rutas protegidas

## 🛠️ Tecnologías

- **Vue 3.5** - Framework JavaScript
- **Vite 7** - Build tool
- **Vue Router 4** - Enrutamiento
- **Firebase 10** - Autenticación
- **Axios 1.13** - Cliente HTTP
- **PokéAPI** - API de Pokémon

## � Instalación

```bash
# Clonar repositorio
git clone https://github.com/Fabian-Jeldes/Entregas_FrontEnd_UNAB.git
cd Entregas_FrontEnd_UNAB
git checkout M7AE2-ABP2
cd Poke_vite_M7ABP2

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## ⚙️ Configuración Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un proyecto o usa uno existente
3. Habilita **Authentication** → **Email/Password**
4. Copia tu configuración y actualiza `src/services/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  // ... resto
};
```

## 💡 Uso

1. **Registro:** Crea una cuenta con email y contraseña
2. **Login:** Ingresa con tus credenciales
3. **Buscar:** Escribe el nombre de un Pokémon (en inglés)
4. **Logout:** Click en "Salir"

## 📁 Estructura

```
src/
├── components/
│   ├── Home.vue          # Pokeguía
│   ├── Login.vue         # Login
│   └── Register.vue      # Registro
├── router/
│   └── index.js          # Rutas + guards
├── services/
│   ├── firebase.js       # Config Firebase
│   └── pokeapi.js        # Cliente API
└── main.js
```

## � Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Producción
npm run preview  # Preview build
```

## 🐛 Solución de Problemas

**Error "auth/configuration-not-found":** Habilita Email/Password en Firebase Console

**Pokémon no encontrado:** Usa nombres en inglés y minúsculas



Bootcamp UNAB FrontEnd
**Fabián Jeldes**

---

Hecho con ❤️ y Vue 3
