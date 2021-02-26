let namesList = document.createElement("ul")
let listItem = document.createElement("li")
let listText = document.createTextNode("Israel Salinas")
listItem.appendChild(listText)
namesList.appendChild(listItem)
console.log(namesList)
document.getElementsByTagName("body")[0].appendChild(namesList)


let thingsArray = [
    {
        name: "Bolígrafo",
        category: "Papelería"
    },
    {
        name: "Lápiz",
        category: "Papelería"
    },
    {
        name: "Leche",
        category: "Alimentos"
    },
    {
        name: "Camisa",
        category: "Ropa"
    },
    {
        name: "Pantalón",
        category: "Ropa"
    },
    {
        name: "Carne",
        category: "Alimentos"
    },
]
thingsArray.forEach(thing => {
    let { category, name } = thing;
    let listItem = document.createElement("li")
    let listItemText = document.createTextNode(name)
    listItem.appendChild(listItemText)
    switch (category) {
        case "Alimentos":
            document.getElementById("alimentos").appendChild(listItem)
            break
        case "Ropa":
            document.getElementById("ropa").appendChild(listItem)
            break
        case "Papelería":
            document.getElementById("papeleria").appendChild(listItem)
            break
    }
})

let usersArray = []
document.getElementById("save-button").addEventListener("click", () => {
    let name = document.getElementById("user-name").value
    let lastName = document.getElementById("user-lastname").value
    let gender = document.getElementById("user-gender").value
    let userObject = { name, lastName, gender }
    console.log(userObject)
    usersArray.push(userObject)
    console.log(usersArray)
})
document.getElementById("save-button").addEventListener("mouseenter", () => {
    console.log("entraste en el botón")
})
document.getElementById("user-name").addEventListener("keyup", (event) => {
    console.log(event.target.value)
    document.getElementById("heading").innerHTML = event.target.value
})
document.getElementById("toggle").addEventListener("click", () => {
    let toggledElement = document.getElementById("toggle-card")
    console.log(toggledElement.classList.contains("d-none"))
    toggledElement.classList.contains("d-none")
        ? toggledElement.classList.remove("d-none")
        : toggledElement.classList.add("d-none")
})






