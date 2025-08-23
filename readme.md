# M5AE4 - ABP3: Callbacks en JavaScript (Bootcamp Front-End)

Este repositorio contiene la práctica centrada en el uso de funciones callback

## Objetivo

Comprender cómo funcionan las funciones callback en JavaScript mediante dos ejercicios:

1. Problema 1: `saludar(callback)` muestra un saludo y luego ejecuta la función recibida (en este caso `ofrecerCafe`).
2. Problema 2: `operaciones(a, b, minora, potencias)` calcula la diferencia (a - b) y la potencia (a^b) y entrega ambos resultados a dos callbacks que los imprimen.

## Contenido del archivo `JS/main.js`

- Definición de la función `saludar` y el callback `ofrecerCafe`.
- Implementación corregida de `operaciones` que:
	- Calcula `diferencia = a - b`.
	- Calcula `elevado = a ** b` (se usa `Math.pow(a,b)` en el código).
	- Invoca `minora(a, b, diferencia)`.
	- Invoca `potencias(a, b, elevado)`.
- Ejemplo de uso con `operaciones(5, 3, ...)` que imprime:
	- `La diferencia entre 5 y 3 es: 2`
	- `Elevando 5 a potencia 3 se obtiene: 125`

## Error original corregido

En una versión previa ("Problema 2.B") los callbacks recibían solo `diferencia` o `elevado`, pero dentro intentaban usar `a` y `b` (no definidas en ese ámbito), produciendo `ReferenceError` o valores `undefined`. Solución: pasar también `a` y `b` como parámetros a los callbacks o capturarlas mediante un closure. Se optó por la primera opción para mayor claridad.

## Posibles extensiones

- Cambiar callbacks a funciones flecha.
- Añadir validaciones: asegurar que `a` y `b` son números.
- Añadir una versión con promesas o async/await (envolviendo los cálculos).
- Crear tests unitarios (Jest) para verificar las salidas esperadas.

## Autor

Fabián Jeldes