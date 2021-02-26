let bandsArray = [
    "Kamelot",
    "Judas Priest",
    "Cradle of Filth",
    "Iron Maiden",
    "Megadeth",
    "Helloween"
]
/*Crear una nueva lista con todas las bandas cuyo nombre tenga más de una palabra*/
let shortNames = bandsArray.filter( band => {
    console.log(band.includes(" "))
    return band.includes(" ")
})
console.log("shortNames ", shortNames)
/*Crear una nueva lista que contenga un string con las letras pares las bandas*/
let weirdNames = bandsArray.map( band => {
    let pairs = band.split("")
    /* 
        input: Kamelot
        output: [
            0:"K",
            1:"a",
            2:"m",
            3:"e",
            4:"l",
            5:"o",
            6:"t"
        ]
     */
    let pairLetters = pairs.filter( (letter,index) => {
        return index % 2 === 0
        /*
        output: [
            0:"K",
            1:"m",
            2:"l",
            3:"t"
        ]*/
    })
    return pairLetters.join("")
    /*
        input:[
            0:"K",
            1:"m",
            2:"l",
            3:"t"
        ]
        output: "Kmlt"*/
} )
let weirdNames2 = bandsArray.map( band => band.split("").filter( (letter, index) => index % 2 === 0 ).join(""))
console.log(weirdNames)
console.log(weirdNames2)
let numbersArray = [
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

