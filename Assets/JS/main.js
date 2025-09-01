$(document).ready(function() {
    const API_URL = "https://api.boostr.cl/feriados/en.json";
    const tbody = $("#feriados-table");
    
    // Mostrar mensaje de carga
    tbody.html('<tr><td colspan="3" class="text-center">Cargando feriados...</td></tr>');
    
    // Función para cargar feriados
    async function cargarFeriados() {
        try {
            const response = await fetch(API_URL);
            
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Limpiar la tabla
            tbody.empty();
            let feriados = [];
            
            if (Array.isArray(data)) {
                feriados = data;
            } else if (data && data.data && Array.isArray(data.data)) {
                feriados = data.data;
            } else if (data && data.holidays && Array.isArray(data.holidays)) {
                feriados = data.holidays;
            } else {
                console.log('Estructura de datos recibida:', data);
                tbody.html('<tr><td colspan="3" class="text-center text-warning">Formato de datos no reconocido</td></tr>');
                return;
            }
            
            // Verificar si hay datos
            if (!feriados || feriados.length === 0) {
                tbody.html('<tr><td colspan="3" class="text-center text-warning">No se encontraron feriados</td></tr>');
                return;
            }
            
            // Agregar cada feriado a la tabla
            feriados.forEach(feriado => {
                const fecha = feriado.date || feriado.fecha || '';
                const nombre = feriado.title || feriado.nombre || feriado.name || '';
                const tipo = feriado.type || feriado.tipo || 'General';
                
                const fila = `
                    <tr>
                        <td>${fecha}</td>
                        <td>${nombre}</td>
                        <td><span class="badge bg-info">${tipo}</span></td>
                    </tr>
                `;
                tbody.append(fila);
            });
            
        } catch (error) {
            console.error('Error al cargar los feriados:', error);
            tbody.html(`
                <tr>
                    <td colspan="3" class="text-center text-danger">
                        ⚠️ Error al cargar los feriados: ${error.message}
                        <br><small>Revisa la consola para más detalles</small>
                    </td>
                </tr>
            `);
        }
    }
    cargarFeriados();
});
