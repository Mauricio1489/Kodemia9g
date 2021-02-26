//let name= prompt(" ¿Cual es tu nombre? ")
//let finalString= name.trim().toUpperCase()
//console.log(finalString)

/*Preguntar cual es la capital de México
//Verificar si es corecto, entonces imprmir mensaje
//Sino imprimir error*/

/*var capital = prompt("¿Cuál es la capital de México").trim().toUpperCase()


if (capital == "Ciudad de México") {
    console.log ("Muy bien")
} else {
    console.log ("error")
}*/

var str = "Hello world, welcome to the universe"
var n = str.indexOf("universe")
console.log(n)
//Nos devulve el indice dentro del string, comienza la busqueda desde cero, sino hay coincidencia da el valor -1//

var str = "Hello world, welcome to the universe"
var n = str.includes("universe")
console.log(n)
//Determina si una cadena de texto es encontrada dentro de otra cadena, retorna true o false//

var str = "Hello world, welcome to the universe"
var n = str.startsWith("Hello")
console.log(n)
//Indica si un string inicia con los caracteres de otro string regresando true o false//

var str = "Hello world, welcome to the universe"
var n = str.endsWith("to")
console.log(n)

/*Preguntar cual es la capital de México
//Verificar si es corecto, entonces imprmir mensaje
//Sino imprimir error*/

/*var capital = prompt ("¿Cuál es la capital de México")
var capitalOk = capital.toLowerCase().trim()

if (capital.includes("México") === true) {

    console.log("Bien")
} else {
    console.log("error")
}*/

var str = "Hello world, welcome to the universe"
var n = str.replace("to", "ok")
console.log(n)
//El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo.reemplazo puede ser una cadena o una función que será llamada para cada coincidencia. Si el patrón es una cadena, sólo la primera coincidencia será reemplazada.//

var str = "Hello world, welcome to the universe"
var n = str.substring(5,15)
console.log(n)
//Nos devuelve un pedazo de string dependiendo de los parametro//

var str = "Hello world, welcome to the universe"
var n = str.slice(5,-8)
console.log(n)










