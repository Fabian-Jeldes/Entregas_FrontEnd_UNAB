// Actividad
// La empresa de reparto ExpressGo necesita optimizar su sistema de rutas.
// Reciben listas con direcciones y cantidades de paquetes, pero el sistema
// actual:
//  Permite direcciones duplicadas.
//  No prioriza las rutas con más paquetes.
//  No genera reportes claros.
//  No está optimizado para funcionar en navegadores antiguos.


// Tu equipo debe desarrollar un algoritmo en JavaScript ES6+ que procese
// esta información y pueda ser ejecutado en cualquier navegador moderno o
// antiguo, utilizando Webpack y Babel para la compatibilidad.
// Requerimientos


// Implementar un algoritmo en JavaScript que:
// 1. Procese una lista de entregas, eliminando duplicados y sumando
// paquetes.
// 2. Ordene las direcciones según prioridad (más paquetes primero).
// 3. Genere un reporte legible con template literals.
// 4. Utilice mínimo ocho características de ES6+ de la lista de contenidos.
// 5. Configure el proyecto para ser compatible con navegadores antiguos
// usando Babel y Webpack.


// Requerimientos técnicos
//  Variables: usar let y const según corresponda.
//  Funciones: al menos una función flecha con parámetros por defecto.
//  Template literals para generar el reporte.
//  Destructuring para acceder a datos de objetos o arrays.
//  Spread/Rest en la manipulación de datos.
//  Uso de Set o Map para gestionar direcciones.
//  Promesas o async/await para simular carga de datos (por ejemplo,
// desde un archivo JSON).
//  Configuración básica de Webpack y Babel para empaquetar y
// transpilar el código.
//  Inclusión de un Polyfill para alguna función moderna (por ejemplo,
// Array.from o Promise).
// Datos iniciales
// const entregas = [
//  { direccion: "Av. Siempre Viva 742", paquetes: 4 },
//  { direccion: "Calle Falsa 123", paquetes: 2 },
//  { direccion: "Av. Siempre Viva 742", paquetes: 3 },
//  { direccion: "Pje. Las Rosas 456", paquetes: 5 },
//  { direccion: "Calle Falsa 123", paquetes: 1 }
// ];


const entregas = [
  { direccion: "Av. Siempre Viva 742", paquetes: 4 },
  { direccion: "Calle Falsa 123", paquetes: 2 },
  { direccion: "Av. Siempre Viva 742", paquetes: 3 },
  { direccion: "Pje. Las Rosas 456", paquetes: 5 },
  { direccion: "Calle Falsa 123", paquetes: 1 }
];

const agruparEntregas = (lista = []) => {
  const mapa = new Map();

  for (const { direccion, paquetes } of lista) {
    mapa.set(direccion, (mapa.get(direccion) || 0) + paquetes);
  }
  return [...mapa].map(([direccion, paquetes]) => ({ direccion, paquetes }));
};
const ordenarEntregas = (lista = []) => {
  return lista.sort((a, b) => b.paquetes - a.paquetes);
};
// Reporte para inyectar en el DOM (con spans estilables)
const generarReporteHTML = (lista = []) => `
==== REPORTE DE ENTREGAS ====
Total de direcciones: ${lista.length}
-----------------------------
${lista.map(({ direccion, paquetes }) => `📍 <span class="direccion">${direccion}</span> → <span class="paquetes">${paquetes}</span> paquete(s)`).join("\n")}
-----------------------------
`;

// Reporte sólo texto para consola (sin etiquetas)
const generarReporteTexto = (lista = []) => `
==== REPORTE DE ENTREGAS ====
Total de direcciones: ${lista.length}
-----------------------------
${lista.map(({ direccion, paquetes }) => `📍 ${direccion} -> ${paquetes} paquete(s)`).join("\n")}
-----------------------------
`;
const cargarEntregas = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(entregas), 1000);
  });
};

const main = async () => {
  try {
    const datos = await cargarEntregas();          // cargar datos
    const agrupados = agruparEntregas(datos);      // eliminar duplicados
    const ordenados = ordenarEntregas(agrupados);  // ordenar
    const reporteHTML = generarReporteHTML(ordenados);   // para DOM
    const reporteTexto = generarReporteTexto(ordenados); // para consola

    console.log(reporteTexto);
    const appEl = document.getElementById("app");
    if (appEl) appEl.innerHTML = reporteHTML;
  } catch (err) {
    console.error("❌ Error en la ejecución:", err);
  }
};

main();