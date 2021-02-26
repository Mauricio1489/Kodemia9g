/* Reduce , metodo de array */

/*let numbersArray = [
    2,
    8,
    4,
    6,
    8,
    9,
    2,
    1,
    5
]

let resultado = 0

numbersArray.forEach (number =>{
    resultado += number
    
})

console.log(resultado)

let additionResult = numbersArray.reduce((acumlador,number)=>{
    return acumlador + number
},0)

console.log("resultado de reduce", additionResult)

lettersArray = ["m","o","r","n","i","n","g"]

let fullWorld =  lettersArray.reduce((acum,letter)=>{
    return acum +letter

}, "")
console.log(fullWorld)

let usersArray=[
    [
        "Israel",
        "Salinas"
    ],
    [
        "Alejandro",
        "Bosch"
    ],
    [
        "Charles",
        "Silva"
    ],
    [
        "David",
        "Moranchel"
    ]
]
/* teniendo usersArray, obtener un nuevo array que contenga strings con los nombres completos de los usuarios*/
/*output => [
    "Israel Salinas",
    "Alejandro Bosch",
    "Charles Silva",
    "David Moranchel"
]*/

/*let newArray = usersArray.reduce((accum,user)=>{
    return [...accum, user.join("")]

},[])
console.log(newArray)*/


/*let weirdNames2 = bandsArray.map( band => band.split("").filter( (letter, index) => index % 2 === 0 ).join("")*/

let numbersArray = []

for (let i = 0; i < 10; i++){
    let numbers =  parseInt(prompt("Ingresa un número"))
    numbersArray.push(numbers)
}
console.log(numbersArray)

let resAddition = numbersArray.reduce((accum,number)=> accum += number,0)
      
console.log(resAddition)