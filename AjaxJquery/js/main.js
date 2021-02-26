$(document).ready(function () {
    console.log('ready')
   
})

$('div').addClass('list-item')




/*$.ajax({--- metodo de jquery para peticiones Ajax
    url: url,---URL a la que haremos la petición
    method:method,----tipo de petición que vamos a realizar (GET, POST,PATCH,DELETE)
    data: data,----los datos que enviaremos con la petición (En caso de que aplique  POST,PUT,PATCH)
    success: success (response)=>{} callback cuando mi peticion se cumpla
    error: (error) =>{} callback para cuando exista un error
    
});*/

/*https://ajaxclass9g.firebaseio.com/ravenclaw/characters/.json*/
const reqListener = () => {
    console.log(this.responseText)
}
/*
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML = this.responseText;
    }
 };
 xhttp.open("GET", "ajax_info.txt", true);
 xhttp.send();
*/
//$.ajax({ /*método de jquery para peticiones AJAX*/
    //url: url, /*URL a la que haremos la petición*/
    //method:method, /*Tipo de petición que vamos a realizar ( GET, POST, PUT, PATCH, DELETE )*/
    //data: data, /*Los datos que enviaremos con la petición ( en caso de que aplique - POST, PUT, PATCH - )*/
    //success: ( response )=>{} /* callback cuando mi petición se cumpla*/
    //error: ( error ) => {} /*callback para cuando exista un error
//});
const guardarPersonaje = () => {
    let name = $("#name").val();
    let lastName = $("#last-name").val();
    let book = $("#book").val();
    let personaje = { name, lastName, book }
    $.ajax({
        url:`https://ajaxclass9g.firebaseio.com/ravenclaw/characters/.json`,
        method:"POST",
        data: JSON.stringify(personaje),
        success: ( response ) => {
            console.log("personaje guardado")
        },
        error: ( error ) => {
            console.log("personaje no guardado")
        }
    })
}
const obtenerPersonajes = () => {
    $.ajax({ 
        url: `https://ajaxclass9g.firebaseio.com/ravenclaw/characters/.json`, 
        method:"GET",
        success: ( response ) => {
            console.log( response )
            let personajes = response;
            $("#characters-table").empty();
            for( llave in personajes ){
                console.log( personajes[llave])
                let { name, lastName, book } = personajes[llave]
                $("#characters-table").append(`
                    <tr>
                        <td>${name} ${lastName}</td>
                        <td>${book}</td>
                        <td><button type="button" class="btn btn-danger btn-delete" data-llave-personaje=${llave}>Borrar</button></td>
                    </tr>
                `)
            }
            $(".btn-delete").click(( event )=>{
                /*let llave = event.target.dataset.llavePersonaje*/
                /*Recordatorio: event es un objeto que contiene todos los datdos del evento que estamos escuchando
                event.target indica el elemento específico al que le sucedio el evento*/
                /*event: cayo un árbol sobre un auto gris*/
                /*event.target: un auto gris*/
                /*event.target.color: gris*/
                let llave = $(event.target).data("llave-personaje")
                $.ajax({
                    url: `https://ajaxclass9g.firebaseio.com/ravenclaw/characters/${llave}.json`,
                    method:"DELETE", 
                    success: ( response )=>{
                        obtenerPersonajes();
                    },
                    error: ( error ) => {
                        console.log(error)
                    } 
                });
            })
        }  
    });
}
$("#save-button").click(guardarPersonaje)

obtenerPersonajes()
