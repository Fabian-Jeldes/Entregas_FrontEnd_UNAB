// Problema 1:
// En un conocido juego de azar con opciones pertenecientes al conjunto de
// los números mayores a 1 y menores o iguales a 100, existen números que
// tienen más probabilidad de ganar. Esto aplica cuando un número es menor
// a 15 y mayor a 5, o bien si el número es el 70 o el 55. 

// Requerimiento:
// Realiza un algoritmo y pieza de código en JavaScript tal que, ingresado un
// número, imprima en pantalla el mensaje “El número ingresado tiene
// opciones de ganar” en caso de que esté en el rango antes indicado, o bien
// imprima en pantalla el mensaje “El número ingresado no es favorable” en
// caso contrario.

function numeroGanador() {
    const numero = parseInt(document.getElementById('inputganador').value);
    const output = document.getElementById('outputganador');

    if (isNaN(numero) || numero < 1 || numero > 100) {
        output.innerHTML = "<p class= 'error' > Por favor, introduce un número del 1 al 100. </p>"
        return;
    }

    if (
        (numero < 15 || numero > 70 || numero == 55)
    ) {
        output.innerHTML = "El número ingresado tiene opciones de ganar";
        output.style.color = "green";
    } else {
        output.innerHTML = "El número ingresado no es favorable";
        output.style.color = "black";
    }
}

// Problema 2:
// Un año es bisiesto en el calendario Gregoriano si es divisible entre 4 y no
// divisible entre 100, o bien, si es divisible entre 400

// Requerimiento:
// Desarrolla un algoritmo que reciba un número que represente a un año, e
// indique si corresponde a un año bisiesto o no. Debes validar que el valor
// ingresado sea un número mayor o igual a cero; de no ser así, no se puede
// realizar operación adicional alguna.

function Aniobisisesto() {
    const input = document.getElementById('inputbisiesto').value;
    const output = document.getElementById('outputbisiesto');

    if(input < 0) {
        output.innerHTML = "<p class='error'>Por favor, introduce un año válido.</p>";
        return; 
    }
    if (input % 4 === 0 && input % 100 !== 0 || input % 400 === 0) {
        output.innerHTML = "<p class='success'>El año " + input + " es bisiesto.</p>";
    }   else {
        output.innerHTML = "<p class='error'>El año " + input + " no es bisiesto.</p>";
}
}    

// Problema 3:
// Un periodista llamado Perio Dista, debe relatar un partido de tenis, pero no
// conoce las reglas del deporte. En particular, no ha logrado aprender cómo
// saber si un set ya terminó, y quién lo ganó.

// Un partido de tenis se divide en sets. Para ganar un set, un jugador debe
// ganar 6 juegos, pero además debe haber ganado por lo menos dos juegos
// más que su rival. Si el set está empatado a 5 juegos, el ganador es el
// primero que llegue a 7. Si el set está empatado a 6 juegos, el set se define
// en un último juego, en cuyo caso el resultado final es 7-6.
// Sabiendo que el jugador A ha ganado m juegos, y el jugador B, n juegos, al
// periodista le gustaría saber si:
// ● A ganó el set, o
// ● B ganó el set, o
// ● el set todavía no termina, o el resultado es inválido (por ejemplo, 8-
// 6 o 7-3

function resultadoTenis() {
    const input = document.getElementById('inputTenisA').value;
    const inputB = document.getElementById('inputTenisB').value;
    const output = document.getElementById('outputTenis');
    GamesA = parseInt(input);
    GamesB = parseInt(inputB);

    if (GamesA < 0 || GamesB < 0) {
        output.innerHTML = "<p class='error'>Por favor, introduce un número válido.</p>";
        return;
    }
    if (GamesA === 6 && GamesB < 5) {
        output.innerHTML = "<p class='success'>El jugador A ganó el set.</p>";
    } else if (GamesB === 6 && GamesA < 5) {
        output.innerHTML = "<p class='success'>El jugador B ganó el set.</p>";
    } else if (GamesA === 7 && GamesB === 5) {
        output.innerHTML = "<p class='success'>El jugador A ganó el set.</p>";
    } else if (GamesB === 7 && GamesA === 5) {
        output.innerHTML = "<p class='success'>El jugador B ganó el set.</p>";
    } else if (GamesA === 7 && GamesB === 6) {
        output.innerHTML = "<p class='success'>El jugador A ganó el set.</p>";
    } else if (GamesB === 7 && GamesA === 6) {
        output.innerHTML = "<p class='success'>El jugador B ganó el set.</p>";
    } else {
        output.innerHTML = "<p class='error'>El set todavía no termina.</p>";
    }


if (GamesA > 6 && GamesB > 6) {
        output.innerHTML = "<p class='error'>El resultado es inválido.</p>";
    }
    if (GamesA < 6 && GamesB < 6) {
        output.innerHTML = "<p class='error'>El set todavía no termina.</p>";
    }
}
