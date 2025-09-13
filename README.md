## Controles en Vue — M6AE3 ABP3

Aplicación mínima hecha con Vue 3 + Vite para practicar el uso de controles `radio` y `select` con `v-model`.

### Características
- Radios para seleccionar nivel de estudios (primarios, secundarios, universitarios, posgrado).
- Select de los días de la semana con opción inicial deshabilitada.
- Visualización inmediata de la opción seleccionada.
- Estilos simples con `<style scoped>` en `App.vue` (sin CSS global).

### Requisitos
- Node.js 18+ recomendado.

### Instalación
```bash
cd "c:/Users/fabia/Documents/_Front_end_Trainee/Modulo 6/AE 3/M6AE3 - ABP3/M6AE3 - ABP3"
npm install
```

### Desarrollo
```bash
npm run dev
```
Abre el enlace que muestre Vite (por defecto http://localhost:5173).

### Compilar para producción
```bash
npm run build
npm run preview
```

### Estructura
```
src/
	main.js          # Bootstrap de Vue (sin CSS global)
	App.vue          # UI, lógica y estilos scoped
	assets/          # Recursos estáticos (p.ej. vue.svg)
```

### Notas
- El diseño es intencionalmente básico y claro. Si quieres más contraste o variantes, ajusta el bloque `<style scoped>` en `App.vue`.
- No se usan dependencias adicionales más allá de Vue y Vite.
