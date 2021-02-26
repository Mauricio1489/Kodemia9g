//alert("Hola Koders!!!!!")


var dato1 = parseInt(prompt("ingresa un valor"));

var dato2 = parseInt(prompt("ingresa otro valor"));



var resultadouSuma = dato1 + dato2
var resultadoResta = dato1 - dato2
var resultadoMulti = dato1 * dato2
var resultadoDiv = dato1 / dato2
var resultadoMod = dato1 % dato2

console.log(resultadouSuma);
console.log(resultadoResta);
console.log(resultadoMulti);
console.log(resultadoDiv);
console.log(resultadoMod);

/*Indicar si el primer y segundo numero es par o impar*/

if (dato1 % 2 === 0) {
    console.log("El número es par")
} else {
    console.log("El número es impar")
}

if (dato2 % 2 === 1) {
    console.log("El número es impar")
} else {
    console.log("El número es par")
}

/*Con un solo condicional, indicar en cada caso si ambos números son pares, si solo uno es par y cual de ambos es, o si ambos son impares*/

if (dato1 % 2 == 0 && dato2 % 2 == 0) {
    console.log("Ambos numeros son pares")
} else if (dato1 % 2 !== 0 && dato2 % 2 !== 0) {
    console.log("Los dos son impares")
} else if (dato1 % 2 == 0 && dato2 % 2 !== 0) {
    console.log("El primero es par y el segundo es impar")
} else if (dato1 % 2 !== 0 && dato2 % 2 == 0) {
    console.log("el primer numero es impar y el segundo es par")
}

