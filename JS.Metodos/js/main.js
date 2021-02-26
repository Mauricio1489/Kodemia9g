/*Métodos, función contructora (This)*/

/*function Mentor (){
    this.firstName = "Mauricio"
    this.lastNAme = "Serrano Bárcenas"
}

let frontEndMentor = new Mentor()
console.log(frontEndMentor)*/

/*function Mentor(  firstName, lastName, phone){
    this.FirstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
}

let frontEndMentor = new Mentor ("Mauricio", "Serrano Bárcenas","5522336644" )
let backEndMentor = new Mentor (" Mauricio", "Serrano Bárcenas","5522114455")

console.log(frontEndMentor)
console.log(backEndMentor)*/

/*year
brand
model
doors*/

let carsData = [
    [
        "1999",
        "Volkswagen",
        "Sedan",
        "4"
    ],
    [
        "1967",
        "Ford",
        "Mustang",
        "2"
    ],
    [
        "2020",
        "Dodge",
        "Viper",
        "2"
    ]
]
/*----------Práctica Isra------------------------*/
function Car (year,brand,model,doors){
    this.year = year;
    this.brand = brand;
    this.model = model;
    this.doors = doors;
    this.presentation = function(){
        console.log( "Yo soy" + " " + this.brand +" " +this.model + " " + "del año" + " " + this.year + " " + "con" + " " + this.doors + " "+   "puertas" )
    }
}

let carsCollection = carsData.map(data =>{
    let year = data[0]
    let brand = data[1]
    let model = data [2]
    let doors = data[3]

    return new Car (year, brand, model, doors)
})
console.table(carsCollection)

carsCollection.forEach(data =>{
    data.presentation()
})


/*------------Mi práctica-------------------------*/

function CarsData(year,brand,model,doors){
    this.year = year;
    this.brand = brand;
    this.model = model;
    this.doors = doors;
}
let carsArray = [

new CarsData ("1999","Volkswagen","Sedan","4"),
new CarsData ("1967","Ford","Mustang","2"),
new CarsData ("2020","Dodge","Viper","2")

]
console.table(carsArray)

/*------------------------------------------------------*/

/*let reduceCars =  carsData.reduce((accum, current) =>{
    let [year, brand, model, doors] = current /*deconstruccion array

    let year = current[0]
    let brand = current[1]
    let model = current [2]
    let doors = current[3]

    console.log(year, brand, model, doors)

    return[...accum, new Car(year, brand, model, doors)]
})

console.log(reduceCars)*/

let animals = [
    [
        "Gato",
        "Negro",
        "Pequeño"
    ],
    [
        "Perro",
        "Blanco",
        "Mediano"
    ],
    [
        "Caballo",
        "Bayo",
        "Grande"
    ]
]
/*crear una función constructora para Animal, con las propiedades specie, color, size, y un método que imprima en consola 'Soy un {specie} de color {color} y de tamaño { size }
crear un Animal con cada set de datos del array animals
ejecutar el método de cada uno de los animales*/

function Animal (specie, color, size,){
    this.specie = specie;
    this.color = color;
    this.size = size;
    this.presentation = function(){
        console.log( " Soy un " + this.specie + " " + " color " + this.color + " " + " de tamaño " + this.size )
    }
}
let animalCollection = animals.map(data =>{
    let specie = data[0]
    let color = data[1]
    let size = data [2]


    return new Animal (specie, color, size)
})
console.table(animalCollection)

animalCollection.forEach(data=>{
    data.presentation()
})




