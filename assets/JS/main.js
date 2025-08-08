// Actividad




/* Problema 1:

Le han contratado para crear una función que recibe como parámetros el
monto total en dólares de la cuenta corriente de un cliente y devuelve su
equivalente en pesos chilenos, considere como tipo de cambio 745.

Requerimiento:
Construya una pieza de código Javascript para que solo reciba montos
correctos, es decir, solo números, tenga consideración que al ser dólares,
se podría encontrar con montos que incluyen centavos. */

const cambio = (monto) => {
    if(typeof monto !== 'number' || isNaN(monto) || monto < 0) {
        return "Monto inválido. El monto debe ser un numero positivo."; 
    }
    const tipoCambio = 745;
    const pesosChilenos = tipoCambio * monto;
    return monto * tipoCambio;
}

console.log(cambio(100)); 
console.log(cambio(100.50)); 
console.log(cambio(-50)); 

document.getElementById('convertir').addEventListener('click', function(){
    let dolares = parseFloat(document.getElementById('dolares').value);
    let resultado = cambio(dolares);
    document.getElementById('resultado').innerText = "Resultado: $" + resultado + " CLP";
})



/* Problema 2

El estado de Chile posee un beneficio denominado “Subsidio de arriendo
de vivienda”, el cual consiste en un aporte mensual de 4,2 Unidades de
Fomento (UF) por un máximo de 170 UF, el cual podrá ser utilizado de
manera consecutiva o fragmentada en un plazo de 8 años.
Para optar a este beneficio, se debe cumplir lo siguiente:

 Ser mayor de 18 años al momento de postular.

 Contar con cédula de identidad vigente. Las personas extranjeras
deben presentar cédula de identidad para extranjeros.

 Acreditar ahorro mínimo de 4 UF al momento de postular, en una
cuenta de ahorro para la vivienda a nombre del postulante, su
cónyuge o conviviente civil.

 Pertenecer hasta el 70% más vulnerable de la población, según la
calificación socioeconómica del Registro Social de Hogares. */


const optarBeneficio = (edad, tieneCedula, ahorroUF, porcentajeVulnerable) => {
    if (typeof edad !== 'number' || isNaN(edad) || edad < 0) {
        return "Edad inválida. La edad debe ser un número positivo.";
    }
    if (typeof tieneCedula !== 'boolean') {
        return "Valor inválido para cédula de identidad. Debe ser true o false.";
    }
    if (typeof ahorroUF !== 'number' || isNaN(ahorroUF) || ahorroUF < 0) {
        return "Ahorro en UF inválido. Debe ser un número positivo.";
    }
    if (typeof porcentajeVulnerable !== 'number' || isNaN(porcentajeVulnerable) || porcentajeVulnerable < 0 || porcentajeVulnerable > 100) {
        return "Porcentaje de vulnerabilidad inválido. Debe estar entre 0 y 100.";
    }

    if (edad >= 18 && tieneCedula && ahorroUF >= 4 && porcentajeVulnerable <= 70) {
        return "El postulante cumple con los requisitos para optar al beneficio.";
    } else {
        return "El postulante no cumple con los requisitos para optar al beneficio.";
    }
}

document.getElementById('calcular').addEventListener('click', function() {
    let edad = parseInt(document.getElementById('edad').value);
    let tieneCedula = document.getElementById('tieneCedula').checked;
    let ahorroUF = parseFloat(document.getElementById('uf').value);
    let porcentajeVulnerable = parseFloat(document.getElementById('porcentajeVulnerable').value);

    let resultadoUF = optarBeneficio(edad, tieneCedula, ahorroUF, porcentajeVulnerable);
    document.getElementById('resultadoUF').innerText = resultadoUF;
});
