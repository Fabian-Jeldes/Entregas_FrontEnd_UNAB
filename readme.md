# 🎬 Sistema de Gestión de Reservas de Cine

## 📋 Descripción del Proyecto

Este proyecto es una aplicación web para la gestión de reservas de asientos en un cine. Permite a los usuarios reservar y cancelar asientos de manera interactiva, con una interfaz visual que muestra el estado de cada asiento en tiempo real.

## 🚀 Características

- ✅ **Visualización de asientos**: Grid interactivo que muestra todos los asientos
- ✅ **Reserva de asientos**: Función para reservar asientos disponibles
- ✅ **Cancelación de reservas**: Posibilidad de cancelar reservas existentes
- ✅ **Interfaz intuitiva**: Click directo en asientos para seleccionar
- ✅ **Retroalimentación visual**: Colores diferenciados para asientos disponibles y reservados
- ✅ **Mensajes informativos**: Notificaciones de éxito, error e información
- ✅ **Consola de debugging**: Visualización de asientos disponibles en consola

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos responsive y diseño visual
- **JavaScript (Vanilla)**: Lógica de negocio y manipulación del DOM

## 📁 Estructura del Proyecto

```
M4AE5-ABP6/
│
├── index.html          # Página principal
├── readme.md          # Documentación del proyecto
│
├── assets/
│   └── JS/
│       └── main.js    # Lógica principal de la aplicación
│
└── CSS/
    └── style.css      # Estilos de la aplicación
```

## 🎯 Funcionalidades Principales

### 1. Gestión de Asientos
- **Capacidad**: 20 asientos numerados del 1 al 20
- **Estados**: Disponible (verde) y Reservado (gris)
- **Interacción**: Click directo en asientos para seleccionar

### 2. Operaciones de Reserva
- **Reservar**: Seleccionar número de asiento y confirmar reserva
- **Cancelar**: Liberar asientos previamente reservados
- **Validación**: Verificación de números de asiento válidos

### 3. Interfaz de Usuario
- **Input numérico**: Campo para ingresar número de asiento
- **Botones de acción**: Reservar, Cancelar, Mostrar Disponibles
- **Mensajes dinámicos**: Feedback inmediato al usuario


## 💻 Código Principal

### Estructura de Datos
```javascript
// Objeto principal del cine
let cine = {
    nombre: "Cinefili",
    salaActual: "Sala Principal"
};

// Gestión de asientos con arrays
let capacidadSala = 20;
let asientosDisponibles = [1, 2, 3, ..., 20];
let asientosReservados = [];
```

### Funciones Principales
- `reservarAsiento(numeroAsiento)`: Reserva un asiento específico
- `cancelarReserva(numeroAsiento)`: Cancela una reserva existente
- `mostrarDisponibles()`: Retorna lista de asientos disponibles
- `mostrarAsientos()`: Actualiza la visualización del grid
- `mostrarMensaje(texto, tipo)`: Muestra mensajes al usuario

## 📚 Propósito Educativo

Este proyecto está diseñado como ejercicio de aprendizaje para:
- **Fundamentos de JavaScript**: Variables, funciones, arrays
- **Manipulación DOM**: Selección y modificación de elementos
- **Lógica de programación**: Algoritmos básicos y validaciones
- **Interfaz de usuario**: Interacción y feedback visual
- **Buenas prácticas**: Código limpio y comentado

## 🤝 Contribuciones

Este proyecto forma parte del curso de Frontend en UNAB. Las mejoras y sugerencias son bienvenidas para fines educativos.

## 📧 Contacto

**Autor**: Fabián Jeldes  
**Curso**: Frontend Trainee - UNAB  
**Módulo**: 4 - AE5 - ABP6  
