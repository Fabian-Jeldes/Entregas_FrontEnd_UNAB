// Requerimientos: 
// 1. Crear el código usando ES5.
//  () => NO 
//  (function ()) SI 

// 2. Crear un método mediante la propiedad prototype que permita
// buscar los datos de los usuarios por nombre y otro método que
// permita mostrar todos los datos de los usuarios registrados.
function Paciente(nombre, edad, RUT) {
    this.nombre = nombre;
    this.edad = edad;
    this.RUT = RUT;
}

Paciente.listaPaciente = [];

Paciente.prototype.registrar = function () {
    Paciente.listaPaciente.push(this);
    console.log("Paciente registrado:", this);
};
Paciente.prototype.buscarUsuarioPorNombre = function(nombre) {
    return Paciente.listaPaciente.filter(function(paciente) {
        return paciente.nombre.toLowerCase() === nombre.toLowerCase();
    });
};
Paciente.prototype.mostrarDatos = function() {
    return {
        nombre: this.nombre,
        edad: this.edad,
        RUT: this.RUT
    };
};
Paciente.prototype.mostrarTodosLosUsuarios = function(){
    return Paciente.listaPaciente;
};

// 3. Crear una función constructora para cada objeto.

// 4. Implementar métodos getters y setters para poder acceder y
// modificar los datos de los pacientes

Paciente.prototype.getNombre = function() {
    return this.nombre;
};

Paciente.prototype.setNombre = function(nombre) {
    this.nombre = nombre;
};

Paciente.prototype.getEdad = function() {
    return this.edad;
};

Paciente.prototype.setEdad = function(edad) {
    this.edad = edad;
};


// 5. Instanciar cada objeto utilizando la instrucción new.
let paciente1 = new Paciente("Juan", 30, "19133609-7");
let paciente2 = new Paciente("Maria", 65, "10233609-8");
let paciente3 = new Paciente("Pedro", 52, "13333609-9");
let paciente4 = new Paciente("Ana", 36, "17433609-0");

// Registrar los pacientes
paciente1.registrar();
paciente2.registrar();
paciente3.registrar();
paciente4.registrar();

// Mostrar todos los pacientes registrados por consola
console.log("Todos los pacientes registrados:", paciente1.mostrarTodosLosUsuarios());
document.getElementById("mostrar-pacientes").addEventListener("click", function() {
    var lista = paciente1.mostrarTodosLosUsuarios();
    var datos = lista.map(function(paciente) {
        return paciente.mostrarDatos();
    });
    console.log("Todos los pacientes registrados:", datos);
    alert(JSON.stringify(datos, null, 2));
});