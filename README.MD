# M5AE4 - POO: Ejercicios de asincronía en JavaScript

Proyecto de práctica para aprender mecanismos de programación asíncrona en JavaScript: callbacks, promesas y async/await. 
El proyecto incluye una pequeña interfaz web que permite probar las tres aproximaciones y ver los resultados en la página.

## Estructura del proyecto

- `index.html` - Interfaz mínima con botones para cada aproximación y un contenedor `#usuario-info` donde se muestra la información.
- `css/styles.css` - Estilos básicos para la tarjeta de usuario y los botones.
- `JS/main.js` - Lógica de la demo:
  - `obtenerUsuarioCallback(callback)` - simulación con `setTimeout`.
  - `obtenerUsuarioPromesa()` - devuelve una `Promise` que resuelve con los datos del usuario.
  - `obtenerUsuarioAsync()` - función `async` que usa `await` sobre `obtenerUsuarioPromesa()`.
  - Manejadores para los botones que actualizan `#usuario-info` (con mensaje de carga y manejo de errores).

## Uso

- Haz clic en cualquiera de los botones:
  - "Obtener Usuario (Callback)"
  - "Obtener Usuario (Promesa)"
  - "Obtener Usuario (Async/Await)"

Cada botón mostrará un mensaje de carga después de 2 segunditos. 

## Ejemplo de comportamiento esperado

- Antes de pulsar: el contenedor muestra un texto de ayuda.
- Al pulsar: aparece "Cargando (...)" y luego los datos:
  - Nombre: Juan Pérez
  - Correo: juan.perez@example.com
  - Ciudad: Florianopolis

## Autor
Fabián Jeldes