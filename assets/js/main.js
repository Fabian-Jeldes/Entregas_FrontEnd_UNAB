


//  1.- Construya una función que dado un número n entero y
// menor que 100 calcule la sumatoria de 1 hasta n.

function sumaHastaN(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}
console.log("La sumatoria de 1 hasta n es:", sumaHastaN(9));





//  2.- Construya una función que imprima si un número es primo
// o no. Los números primos son aquellos que son divisibles solo
// por 1 y por sí mismos.

function esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("El número 7 es primo:", esPrimo(7));
console.log("El número 10 es primo:", esPrimo(10));




//  3.- Cree una función que dado un número n entero y menor
// que 100 imprima la cuenta regresiva, es decir si n es 5 deberá
// imprimir 5,4,3,2,1.

function cuentaPatras(n) {
    let contar = n;
    while (contar > 0) {
        console.log(contar);
        contar--;
    }
}

console.log("La cuenta regresiva de 5 es:")
cuentaPatras(5);




//  4.- Construya una función que dado un número n entero
// mayor que 10 y menor que 1000 calcule la sumatoria de todos
// los números pares contenidos en el rango.

function sumaPares(n) {
    if (n < 10 || n > 1000) 
        return "El número debe ser mayor que 10 y menor que 1000.";
    let suma = 0; 
    for (let i = 2; i<n; i +=2)
        suma += i; 
    return suma; 
}
console.log("La suma de los números pares es:", sumaPares(25));





//  5.- Cree una función que permite dado un número n imprima la
// tabla de multiplicar de dicho número hasta el 12.

function tablaMultiplicar(n) {
    for (let i = 1; i <= 12; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
console.log("Tabla de multiplicar del 7:");
tablaMultiplicar(7);





//  6.- Cree un programa que dado un arreglo de números desordenados
// los ordene ascendentemente.

function ordenarArreglo(arr) {
    arr.sort((a, b) => a - b);
    console.log("Arreglo ordenado:", arr);
}
let numerosDesordenados = [5, 2, 9, 1, 5, 6];
ordenarArreglo(numerosDesordenados);



document.getElementById("mostrarEjercicios").addEventListener("click", function() {
    this.innerHTML = "<h3> Ejercicio 1 </h3><img src= './imgs/1.png'>";
    this.innerHTML += "<h3> Ejercicio 2 </h3><img src= './imgs/2.png'>";
    this.innerHTML += "<h3> Ejercicio 3 </h3><img src= './imgs/3.png'>";
    this.innerHTML += "<h3> Ejercicio 4 </h3><img src= './imgs/4.png'>";
    this.innerHTML += "<h3> Ejercicio 5 </h3><img src= './imgs/5.png'>";   
    this.innerHTML += "<h3> Ejercicio 6 </h3><img src= './imgs/6.png'>";

});