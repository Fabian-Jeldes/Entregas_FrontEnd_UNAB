# Smart-EV - M3AE4 ABP5 con Bootstrap 4

### Interfaz con Bootstrap 4
- ✅ **Contenedor principal**: Container fluid que ocupa el 80% del ancho de ventana, centrado horizontalmente
- ✅ **Navbar Bootstrap**: Barra de navegación responsiva con componentes Bootstrap
- ✅ **Sistema de rejillas**: Grid system para distribución eficiente del contenido
- ✅ **Responsividad**: Se adapta a diferentes tamaños de pantalla
- ✅ **Footer**: Bloque que utiliza clases de Bootstrap como navbar o footer

## 📁 Estructura del proyecto
```
├── html/
│   └── index.html               # HTML con Bootstrap 4 integrado
├── css/
│   ├── styles.css              # CSS compilado (Bootstrap + personalizaciones)
│   └── styles.css.map          # Source map para debugging
├── sass/
│   ├── styles.scss             # Archivo principal SASS
│   ├── abstracts/
│   │   ├── _bootstrap-variables.scss  # Variables Bootstrap personalizadas
│   │   ├── _variables.scss            # Variables adicionales Smart-EV
│   │   ├── _mixins.scss               # Mixins personalizados
│   │   ├── _functions.scss            # Funciones SASS
│   │   └── _colors.scss               # Paleta de colores
│   ├── base/
│   │   ├── _reset.scss                # Reset CSS
│   │   └── _typography.scss           # Tipografía base
│   ├── components/
│   │   ├── _bootstrap-custom.scss     # Personalizaciones Bootstrap
│   │   ├── _buttons.scss              # Estilos de botones
│   │   ├── _cards.scss                # Componentes de tarjetas
│   │   ├── _navbar.scss               # Navegación personalizada
│   │   └── _socials.scss              # Iconos sociales
│   ├── layout/
│   │   ├── _header.scss               # Header layout
│   │   └── _footer.scss               # Footer layout
│   └── pages/
│       ├── _index.scss                # Estilos página principal
│       ├── _aboutus.scss              # Página about
│       └── _catalogo.scss             # Página catálogo
└── package.json                       # Dependencias y scripts
```

## 🚀 Instalación y uso

1. **Clonar/descargar el repositorio**:
   ```bash
   git clone [url-del-repositorio]
   cd "M3AE4 - ABP5"
   ```

2. **Instalar todas las dependencias** (Bootstrap 4 + SASS):
   ```bash
   npm install
   ```
   Esto instalará:
   - `bootstrap@^4.6.2` (framework CSS)
   - `sass@^1.77.0` (compilador SASS)

3. **Compilar SASS una vez**:
   ```bash
   npm run sass
   ```

3. **Compilar SASS una vez**:
   ```bash
   npm run sass
   ```

4. **Modo desarrollo con watch** (recomendado):
   ```bash
   npm run sass:watch
   ```
   Esto recompilará automáticamente los archivos SASS cuando hagas cambios.

5. **Abrir la página**:
   Abre `html/index.html` en tu navegador para ver la maqueta.

### 🔧 **Scripts disponibles**:
- `npm run sass`: Compila SASS una vez
- `npm run sass:watch`: Modo watch para desarrollo
- `npm run build`: Alias para compilar SASS

## 🎨 Tecnologías utilizadas

- **Bootstrap**: Framework CSS (instalado via npm)
- **SASS**: Preprocesador CSS con arquitectura 7-1 (instalado via npm)
- **HTML5**: Estructura semántica
- **Google Fonts (Montserrat)**: Tipografía personalizada
- **JavaScript**: Bootstrap bundle para componentes interactivos

### 📦 **Dependencias del proyecto** (package.json):
```json
{
  "dependencies": {
    "bootstrap": "^4.6.2"
  },
  "devDependencies": {
    "sass": "^1.77.0"
  }
}
```

**¿Por qué estas dependencias?**
- **Bootstrap 4.6.2**: Última versión estable de Bootstrap 4 (no v5 para mantener compatibilidad)
- **SASS**: Necesario para compilar archivos `.scss` a `.css`
- Ambas se instalan automáticamente con `npm install`


## Autor
Fabian Jeldes
