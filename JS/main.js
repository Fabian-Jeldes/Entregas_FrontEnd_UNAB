// Actividad
// Contexto del problema
// Imagina que estás desarrollando una aplicación web que muestra
// información básica de un usuario (nombre, correo y ciudad).
// Sin embargo, esa información no está disponible de inmediato, sino que
// debe "consultarse" a un servidor externo, lo que introduce asincronía en el
// proceso.

// El objetivo es aprender cómo manejar este tipo de situaciones en JavaScript
// utilizando diferentes mecanismos de programación asíncrona.
// Requerimientos:


// Uso de Callbacks
// 1. Simula una función obtenerUsuarioCallback(callback) que después de
// 2 segundos retorne un objeto con los datos del usuario.

function obtenerUsuarioCallback(callback) {
    setTimeout(() => {
        const usuario = {
            nombre: "Juan Pérez",
            correo: "juan.perez@example.com",
            ciudad: "Florianopolis"
        };
        callback(usuario); // 2 segunditos de espera
    }, 2000);
}

// 2. Usa el callback para imprimir en consola el nombre y correo del
// usuario.
    obtenerUsuarioCallback((usuario) => {
        console.log("Callback:");
        console.log("Nombre:", usuario.nombre);
        console.log("Correo:", usuario.correo);
        console.log("Ciudad:", usuario.ciudad);
    });

// Uso de Promesas
// 1. Crea una función obtenerUsuarioPromesa() que retorne una Promise
// y, tras 2 segundos, resuelva con los mismos datos del usuario.

function obtenerUsuarioPromesa() {
    return new Promise((resolve) => { 
        setTimeout(() => {
            const usuario = {
                nombre: "Juan Pérez",
                correo: "juan.perez@example.com",
                ciudad: "Florianopolis"
            };
            resolve(usuario);
        }, 2000);
    });
}

// 2. Consume esa promesa con .then() y .catch() mostrando el nombre y la
// ciudad del usuario en consola.

obtenerUsuarioPromesa()
    .then((usuario) => {
        console.log("Promesa:");
        console.log("Nombre:", usuario.nombre);
        console.log("Correo:", usuario.correo);
        console.log("Ciudad:", usuario.ciudad);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Uso de Async/Await
// 1. Implementa la función obtenerUsuarioAsync() que sea async y utilice
// la promesa creada anteriormente.
// 2. Usa await para esperar el resultado y muestra en consola un mensaje
// con todos los datos del usuario
debugger;
async function obtenerUsuarioAsync() {
    try {
        const usuario = await obtenerUsuarioPromesa();
        console.log("Async/Await:");
        console.log("Nombre:", usuario.nombre);
        console.log("Correo:", usuario.correo);
        console.log("Ciudad:", usuario.ciudad);
    } catch (error) {
        console.error("Error:", error);
    }
}
obtenerUsuarioAsync();



document.getElementById("btnCallback").addEventListener("click", () => {
    const container = document.getElementById("usuario-info");
    container.innerHTML = `<em>Cargando (callback)...</em>`;
    obtenerUsuarioCallback((usuario) => {
        container.innerHTML = `
            <h2>Nombre: ${usuario.nombre}</h2>
            <p>Correo: ${usuario.correo}</p>
            <p>Ciudad: ${usuario.ciudad}</p>
        `;
    });
});

document.getElementById("btnPromesa").addEventListener("click", () => {
    const container = document.getElementById("usuario-info");
    container.innerHTML = `<em>Cargando (promesa)...</em>`;
    obtenerUsuarioPromesa()
        .then((usuario) => {
            container.innerHTML = `
                <h2>Nombre: ${usuario.nombre}</h2>
                <p>Correo: ${usuario.correo}</p>
                <p>Ciudad: ${usuario.ciudad}</p>
            `;
        })
        .catch((error) => {
            container.innerHTML = `<span style="color:crimson">Error al obtener usuario</span>`;
            console.error("Error:", error);
        });
});

document.getElementById("btnAsync").addEventListener("click", async () => {
    const container = document.getElementById("usuario-info");
    container.innerHTML = `<em>Cargando (async/await)...</em>`;
    try {
        const usuario = await obtenerUsuarioPromesa();
        container.innerHTML = `
            <h2>Nombre: ${usuario.nombre}</h2>
            <p>Correo: ${usuario.correo}</p>
            <p>Ciudad: ${usuario.ciudad}</p>
        `;
    } catch (error) {
        container.innerHTML = `<span style="color:crimson">Error al obtener usuario</span>`;
        console.error("Error:", error);
    }
});
