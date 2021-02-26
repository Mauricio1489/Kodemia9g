/*necesito saber si el usuario quiere sumar, restar, multiplicar o dividir*/
let additionBody = `
    <h2>Vamos a sumar</h2>
    <form >
        <div class="form-group mb-2">
            <label for="addition-first-number" class="sr-only">Primer número</label>
            <input type="text" class="form-control" id="addition-first-number" placeholder="Ingresa el primer número">
        </div>
        <div class="form-group mb-2">
            <label for="addition-second-number" class="sr-only">Segundo Número</label>
            <input type="text" class="form-control" id="addition-second-number" placeholder="Ingresa el segundo número">
        </div>
        <button id="addition-button" type="button" class="btn btn-primary mb-2">Sumar!</button>
    </form>
`
let substractionBody = `
    <h2>Vamos a restar</h2>
    <form >
        <div class="form-group mb-2">
            <label for="substraction-first-number" class="sr-only">Primer número</label>
            <input type="text" class="form-control" id="substraction-first-number" placeholder="Ingresa el primer número">
        </div>
        <div class="form-group mb-2">
            <label for="substraction-second-number" class="sr-only">Segundo Número</label>
            <input type="text" class="form-control" id="substraction-second-number" placeholder="Ingresa el segundo número">
        </div>
        <button id ="substraction-button" type="button" class="btn btn-primary mb-2">Restar!</button>
    </form>
`
let productBody = `
<h2>Vamos a Multiplicar</h2>
<form >
    <div class="form-group mb-2">
        <label for="addition-first-number" class="sr-only">Primer número</label>
        <input type="text" class="form-control" id="addition-first-number" placeholder="Ingresa el primer número">
    </div>
    <div class="form-group mb-2">
        <label for="addition-second-number" class="sr-only">Segundo Número</label>
        <input type="text" class="form-control" id="addition-second-number" placeholder="Ingresa el segundo número">
    </div>
    <button type="button" class="btn btn-primary mb-2">Multiplicar!</button>
</form>
`
let divisionBody = `
<h2>Vamos a dividir</h2>
<form >
    <div class="form-group mb-2">
        <label for="addition-first-number" class="sr-only">Primer número</label>
        <input type="text" class="form-control" id="addition-first-number" placeholder="Ingresa el primer número">
    </div>
    <div class="form-group mb-2">
        <label for="addition-second-number" class="sr-only">Segundo Número</label>
        <input type="text" class="form-control" id="addition-second-number" placeholder="Ingresa el segundo número">
    </div>
    <button type="button" class="btn btn-primary mb-2">Dividir!</button>
</form>
`
let resultsArray = []
const calculator = operation => {
    //console.log(operation)
    switch( operation ){
        case "suma":
            //alert("Vas a hacer una suma")
            document.getElementById("calculator-body").innerHTML = additionBody
            document.getElementById("addition-button").addEventListener("click",() => {
                console.log("adición ")
                let number1 = parseInt(document.getElementById("addition-first-number").value)
                let number2 = parseInt(document.getElementById("addition-second-number").value)
                addition( number1, number2 )
                printHistory()
                printAnalysis()
            })
            break
        case "resta":
            //alert("Vas a hacer una resta")
            document.getElementById("calculator-body").innerHTML = substractionBody
            document.getElementById("substraction-button").addEventListener("click",()=>{
                console.log("substracción")
                let number1 = parseInt(document.getElementById("substraction-first-number").value)
                let number2 = parseInt(document.getElementById("substraction-second-number").value)
                substraction( number1, number2 )
                printHistory()
                printAnalysis()
            })
            break
        case "multiplicacion":
            //alert("Vas a hacer una multiplicacion")
            document.getElementById("calculator-body").innerHTML = productBody
            break
        case "division":
            //alert("Vas a hacer una division")
            document.getElementById("calculator-body").innerHTML = divisionBody
            break
    }
}
/*change es el evento que se ejecuta cuando cambia el valor de un input*/
document.getElementById("operation-selector").addEventListener("change", event => {
    console.log(event.target)
    console.log(event.target.value)
    calculator(event.target.value)
})
const addition = (firstNumber, secondNumber ) => {
    console.log( firstNumber + secondNumber)
    let result = firstNumber + secondNumber
    resultsArray.push(result)
    console.log(resultsArray)
}

const substraction = (firstNumber, secondNumber)=>{
    console.log(firstNumber - secondNumber)
    let result = firstNumber - secondNumber
    resultsArray.push(result)
    console.log(resultsArray)
}
const printHistory = () => {
    document.getElementById("historial-list").innerHTML = ""
    resultsArray.forEach( item => {
        let listItem = document.createElement("li")
        let itemText = document.createTextNode(`Resultado: ${item}`)
        listItem.classList.add("list-group-item")
        listItem.appendChild(itemText)
        document.getElementById("historial-list").appendChild(listItem)
    })
}
const printAnalysis = () => {
    let analysisArray = resultsArray.map( result => {
        return result % 2 === 0 /*pregunto si es par o impar*/
         /*si el número es par...*/
        ? { /*inserta este objeto en analysisArray*/
            text:`El número ${result} es par`, 
            type:'even'
        } 
        : { /*inserta este otro objeto en analysisArray*/
            text:`El número ${result} es impar`,
            type:'odd'
        }
    })
    console.log(analysisArray)
    document.getElementById("analysis-list").innerHTML = ""
    analysisArray.forEach( item => {
        let {text, type} = item
        let listItem = document.createElement("li")
        let itemText = document.createTextNode(text)
        listItem.classList.add("list-group-item")
        listItem.appendChild(itemText)
        document.getElementById("analysis-list").appendChild(listItem)
    })
    let oddQty = analysisArray.filter( item => item.type === 'odd').length;
    let evenQty = analysisArray.filter( item => item.type === 'even').length;
    let oddPercent = ( oddQty / analysisArray.length ) * 100
    let evenPercent = ( evenQty / analysisArray.length ) * 100
    console.log(`Cantidad de pares: ${evenQty}`)
    console.log(`Cantidad de nones: ${oddQty}`)
    console.log(`Porcentaje de pares: ${oddPercent}`)
    console.log(`Porcentaje de nones: ${evenPercent}`)
    console.log(analysisArray)
    document.getElementById("odd-indicator").style.width = `${oddPercent}%`
    document.getElementById("odd-indicator").innerHTML = `Impares: ${oddPercent}%`
    document.getElementById("even-indicator").style.width = `${evenPercent}%`
    document.getElementById("even-indicator").innerHTML = `Pares: ${evenPercent}%`
}
calculator("suma")
calculator("resta")
