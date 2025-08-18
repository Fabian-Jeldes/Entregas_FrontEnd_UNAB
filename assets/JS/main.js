
let cine = {
    nombre: "Cinefili",
    salaActual: "Sala Principal"
};

let capacidadSala = 20; 
let asientosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let asientosReservados = [];
function reservarAsiento(numeroAsiento) {

    // Verificar si el asiento está disponible
    let posicion = asientosDisponibles.indexOf(numeroAsiento);
    
    if (posicion !== -1) {
        // El asiento está disponible, lo reservamos
        asientosDisponibles.splice(posicion, 1); 
        asientosReservados.push(numeroAsiento);  
        return true; 
    } else {
        return false; 
    }
}
function cancelarReserva(numeroAsiento) { 
    let posicion = asientosReservados.indexOf(numeroAsiento);
    
    if (posicion !== -1) {
        asientosReservados.splice(posicion, 1);
        asientosDisponibles.push(numeroAsiento); 
        asientosDisponibles.sort(function(a, b) { return a - b; }); 
        return true; 
    } else {
        return false; 
    }
}

// Función para mostrar asientos disponibles
function mostrarDisponibles() {
    return asientosDisponibles;
}

window.addEventListener('load', function() {
    inicializar();
});

function inicializar() {
    document.getElementById('nombreCine').innerText = cine.nombre;
    let selectSala = document.getElementById('selectSala');
    selectSala.innerHTML = '<option value="1">Sala Principal (20 asientos)</option>';
    document.getElementById('salaActualNombre').innerText = cine.salaActual;
    mostrarAsientos();
    conectarBotones();
}

function conectarBotones() {
    document.getElementById('btnReservar').onclick = function() {
        let numeroAsiento = parseInt(document.getElementById('inputAsiento').value);
        if (numeroAsiento >= 1 && numeroAsiento <= capacidadSala) {
            if (reservarAsiento(numeroAsiento)) {
                mostrarMensaje('Asiento ' + numeroAsiento + ' reservado exitosamente', 'success');
                mostrarAsientos(); 
                document.getElementById('inputAsiento').value = ''; 
            } else {
                mostrarMensaje('El asiento ' + numeroAsiento + ' ya está reservado', 'error');
            }
        } else {
            mostrarMensaje('Por favor ingrese un número válido (1-' + capacidadSala + ')', 'error');
        }
    };
    
    document.getElementById('btnCancelar').onclick = function() {
        let numeroAsiento = parseInt(document.getElementById('inputAsiento').value);
        
        if (numeroAsiento >= 1 && numeroAsiento <= capacidadSala) {
            if (cancelarReserva(numeroAsiento)) {
                mostrarMensaje('Reserva del asiento ' + numeroAsiento + ' cancelada', 'success');
                mostrarAsientos(); 
                document.getElementById('inputAsiento').value = ''; 
            } else {
                mostrarMensaje('El asiento ' + numeroAsiento + ' no está reservado', 'error');
            }
        } else {
            mostrarMensaje('Por favor ingrese un número válido (1-' + capacidadSala + ')', 'error');
        }
    };
    
    document.getElementById('btnMostrarDisponibles').onclick = function() {
        let disponibles = mostrarDisponibles();
        console.log('Asientos disponibles:', disponibles);
        mostrarMensaje('Asientos disponibles mostrados en consola. Total: ' + disponibles.length, 'info');
    };
}

// Función para mostrar los asientos en pantalla
function mostrarAsientos() {
    let container = document.getElementById('asientosContainer');
    container.innerHTML = ''; 
    for (let i = 1; i <= capacidadSala; i++) {
        let asientoDiv = document.createElement('div');
        asientoDiv.className = 'seat';
        asientoDiv.innerText = i;
        
        if (asientosReservados.indexOf(i) !== -1) {
            asientoDiv.className += ' reserved'; 
        } else {
            asientoDiv.className += ' available'; 
        }
        asientoDiv.onclick = function() {
            document.getElementById('inputAsiento').value = i;
        };
        
        container.appendChild(asientoDiv);
    }
}

// Función para mostrar mensajes al usuario
function mostrarMensaje(texto, tipo) {
    let mensajeElement = document.getElementById('mensaje');
    mensajeElement.innerText = texto;
    mensajeElement.className = 'mensaje ' + tipo;
    setTimeout(function() {
        mensajeElement.innerText = '';
        mensajeElement.className = '';
    }, 3000);
}