let productionArray = [
    [
        "David Moranchel",
        "Lunes: 100pz",
        "Martes: 85pz",
        "Miércoles: 70pz",
        "Jueves: 96pz",
        "Viernes: 120pz",
    ],[
        "Michael Villalba",
        "Lunes: 123pz",
        "Martes: 94pz",
        "Miércoles: 100pz",
        "Jueves: 74pz",
        "Viernes: 81pz",
    ],
    [
        "Charles Silva",
        "Lunes: 120",
        "Martes: 76pz",
        "Miércoles: 86pz",
        "Jueves: 95pz",
        "Viernes: 100pz",
    ],[
        "Israel Salinas",
        "Lunes: 90pz",
        "Martes: 85pz",
        "Miércoles: 93pz",
        "Jueves: 121pz",
        "Viernes: 72pz",
    ],  
]


function Work (name, mon,tue, wed, thu, fri){
    this.name =name
    this. dias = [ mon, tue, wed, thu, fri ];
    this.getAverageProd = function(){
        let average = this.dias.reduce((accum, curren)=>{
            return accum + parseInt(curren.split(": ")[1]);

        },0)/this.dias.length
        console.log(`Mi nombre es ${this.name} y mi promedio de produccion es ${average}`)
    }
}

let workArray = productionArray.map(person =>{
    let [name, mon, tue, wed, thu, fri]=person
    return new Work ( name, mon, tue,wed, thu, fri)
})

console.log(workArray)
workArray.forEach(person => {
    person.getAverageProd();
});