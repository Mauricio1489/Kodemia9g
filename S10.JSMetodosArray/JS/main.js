//crear un programa que pregunta al usuario cuantos Koders quiere registrar, que pida el nombre del Koder,tantas veces como koders desee registrar, guardar cada koder en una coleccion//

/*let kodersQ = parseInt(prompt("¿Cuántos koders?"));
let resultado = [];

for (let i = 0; i < kodersQ; i++){
    let nombreKoder = prompt("Nombre del koder") ;
    resultado.push(nombreKoder);
}
console.log(resultado);*/

/*Recibir una frase del usuario, crear una colección con cada caracter dentro de esa frase, si la colección excede los 10 items, entregar como resultado la colección con unicamente los primeros 10 items*/

/*let frase = prompt( "Ingrese una frase")
let SplitFrase = frase.split("")
let FinalArray = []
for( let counter = 0; counter < 10; counter++){
    FinalArray.push( SplitFrase[counter])
}
console.log( SplitFrase)
console.log (FinalArray)*/

/*let userPhrase = prompt("Ingresa una frase")
let fraseSplit = userPhrase.split("")
let newArray =[]

for(let i =0; i<10; i++){
  newArray.push(fraseSplit[i])
}
console.log(newArray)*/

let someArray = [
  4,
  16,
  8,
  3,
  5,
  9,
  16,
  8,
  3,
  5
]
let otherArray = [
  "uno", /*item = "uno"*/
  "dos", /*item = "dos" */
  "tres",
  "cuatro",
  "cinco"
]
let kodersArray = [
  {
      name:"Brenda",
      age:25
  },
  {
      name:"Alex",
      age:18
  },
  {
      name:"Israel",
      age:30
  }
]
/*.forEach*/
/*sirve para ejecutar una función o fragmento de código por cada item dentro de un array*/
/* elArray.forEach( callback() )*/

const someFunction = () => {
  console.log("algo")
}
otherArray.forEach( (item) => {
  console.log(item)
} )

const multiplyby3 = (number) => {
  console.log(number * 3)
  return number * 3
}
/*.map*/
/*map itera dentro de un array, y devuelve un nuevo array con el resultado de aplicar una función a cada item del array original*/
/*sintaxis: elArray.map( callback() )*/
let triplets = someArray.map( item => {
      return  item * 3
  }
)
let shorts = otherArray.map( item => {
  return item.charAt(0)
})
console.log(triplets)
console.log(shorts)
/*
.filter
  itera dentro de un array y me devuelve un nuevo array con los items que cumplan con el criterio de filtrado que yo indique en el callback
*/
let startsWithC = otherArray.filter( item => {
  return item.charAt(0) === "c"
})
let pairs = someArray.filter( item => {
  return item % 2 === 0
})
let younger = kodersArray.filter( koder => {
  return koder.age < 30 
})
let younger2 = []
console.log(startsWithC)
console.log(pairs)
console.log(younger)
console.log(younger2)
/*
.reduce
*/
