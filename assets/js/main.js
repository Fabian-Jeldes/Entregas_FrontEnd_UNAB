// Cree una función que dado un número n cree un arreglo de largo
// n, donde en cada posición del arreglo este el doble del anterior
// nota, el primer elemento del arreglo es 1

function arrayN(n) {
    let array = []; 
    let valor = 1; 
    for (let i = 0; i < n; i++) {
        array.push(valor);
        valor *= 2;
    }
    return array;
}
function arrayNUI() {
    let input = document.getElementById('inputN').value;
    let output = document.getElementById('arrayN');
    output.innerHTML = `Arreglo: ${arrayN(input)}`;
}
//  Cree una función que dado un arreglo de números de largo 10
// permita obtener el mayor número contenido en el arreglo

function obtenerMayorNumero(array) {
    return Math.max(...array);
}
function obtenerMayorNumeroUI() {
    let array = [66, 98, 191, 233, 21, 45, 67]; 
    let output = document.getElementById('mayorNumeroResult');
    output.innerHTML = `El mayor número es: ${obtenerMayorNumero(array)}`;
}

//  Dado un arreglo de strings que contiene los días de la semana,
// cree una función que le permita obtener un día en particular si se
// recibe su número correspondiente.
// Ej: 1 = Lunes , 7 = Domingo.

function obtenerDiaSemana(dia) {
    const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    if (typeof dia !== 'number' || !Number.isInteger(dia)) {
        return 'Por favor, ingrese un número entero entre 1 y 7.';
    }
    if (dia < 1 || dia > 7) {
        return 'Número inválido';
    }
    return diasSemana[dia - 1];
}

function obtenerDiaSemanaUI() {
    let input = parseInt(document.getElementById('inputDia').value);
    let output = document.getElementById('diaSemanaResult');
    output.innerHTML = obtenerDiaSemana(input);
}

//  Cree una función que le permita buscar un elemento contenido en
// el arreglo. Nota: el arreglo solo contendrá números, y tendrá un
// largo máximo de 100.


function buscarElementArray() {
    let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let valorBuscado = parseInt(document.getElementById('inputBuscar').value);
    let resultado = arregloNumeros.find(element => element === valorBuscado);
    document.getElementById('buscarResult').innerHTML = resultado ? `Elemento encontrado: ${resultado}` : 'Elemento no encontrado';
}

//  Cree un programa que dado un arreglo de números desordenados
// los ordene ascendentemente.

function ordenarArreglo() {
    let numerosDesordenados = [61, 34, 92, 67, 1, 4, 6, 9];
    numerosDesordenados.sort((a, b) => a - b);
    document.getElementById('ordenarResult').textContent = `Arreglo ordenado: ${numerosDesordenados.join(', ')}`;
}
