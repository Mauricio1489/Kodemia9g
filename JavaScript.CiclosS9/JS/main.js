//Ciclo For//

//for ([expresion-inicial]; [condicion]; [expresion-final])sentencia//

//El bucle FOR se utiliza para repetir una o más instrucciones un determinado número de veces//

//tabla del 5//

/*for (let i = 1; i <= 10; i++) {
    console.log("8 x " + i + " = " + (8 * i))
}

//Ciclo While: Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia//

//Sintaxis 
//while (condicion)
//sentencia//

var contador = 0;
while (contador < 20) {
    contador = contador + 1
    if (contador % 2 == 0) {
        console.log(contador)

    }

}

//ciclo Do While: La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa.//

//sintaxis: 
//do
    //sentencia
//while (condición);

var contador = 0;
 
do {
    contador = contador + 1
    if (contador % 2 !== 0) {
        console.log(contador)

    }
}    
while(contador < 20);*/

/*let baseNumber = 3;
let counter = 0;

while( counter < 10){
    console.log( baseNumber * counter )
    counter++;
}*/

/*Crea un programa que pida un número mayor que 5 al usuario y muestre todos los multiplos de 3 hasta el número que adquirió

let numberUser= prompt (" ingrese un número mayor que 5")
let contador = 0

while( contador < numberUser ){
    if(contador % 3 == 0 ){
       console.log(contador) 
    }
    contador ++
}*/

//Teniendo la frase "La mejor forma de predecir el futuro, es creandolo", crear un programa que devuelva una nueva frase usando unicamente las letras que tengan una posición par//

/*let fraseOriginal = "La mejor forma de predecir el futuro es creándolo"
let nuevaFrase = ""

for ( let i = 0; i <= fraseOriginal.length; i++ ) {
    if ( i % 2 == 0 ) {
        nuevaFrase += fraseOriginal.charAt(i)
    }
}

console.log( nuevaFrase )*/

let fraseOriginal = "La mejor forma de predecir el futuro es creándolo"
let nuevaFrase = " "
let i = 0

/*do {

    if (i % 2 == 0) {
        nuevaFrase += fraseOriginal.charAt(i)

    }
    i++

}
while (i <= fraseOriginal.length)
console.log(nuevaFrase)*/

while ( i <= fraseOriginal.length) {
    if ( i % 2 == 0) {
        nuevaFrase += fraseOriginal.charAt(i)
    }
    i++
}
console.log( nuevaFrase)












