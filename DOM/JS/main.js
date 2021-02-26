// metodos para elementos de mi DOM
//Obtener por medio de un Id

/*let elementi = document.getElementById("item-ID")*/


/*const names = [
    'Haro',
    'Axel',
    'Luis',
    'Fanny',
    'Mau',
]
let elemOl = document.createElement('ol')
names.forEach(name => {
    let elemLi = document.createElement('li')
    let textName = document.createTextNode(name)
    elemLi.appendChild(textName)
    elemOl.appendChild(elemLi)
})
/**
 <ol>
    <li>Haro</li>
    <li>Axel</li>
    <li>Luis</li>
 </ol>

let wrapper = document.querySelector('.wrapper-koders')
wrapper.appendChild(elemOl)
// document.body.appendChild(elemOl)*/

//Solicitar al usuario cuantos Koders desea registrar
//Solicitar nombre de cada Koder
// y generar una lista ordenada



function Koders(name, lastName) {
    this.name = name
    this.lastName = lastName
}

/*let kodersQuantity = parseInt(prompt("¿Cuántos koders desea registrar?"));
let kodersArray = [];

for (let i = 0; i < kodersQuantity; i++) {
    let name = prompt(`Nombre del koder ${i + 1}`);
    let lastName = prompt(`Apellido del Koder ${i + 1}`)
    let newKoders = new Koders(name, lastName)
    kodersArray.push(newKoders)
}
console.log(kodersArray);

let elementoOl = document.createElement("ol")

kodersArray.forEach((koder) => {
    let li = document.createElement("li")
    let textName = document.createTextNode(`${koder.name} ${koder.lastName}`)
    li.appendChild(textName)

    elementoOl.appendChild(li)
})

document.body.appendChild(elementoOl)*/


