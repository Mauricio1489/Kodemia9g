
/*$(document).ready(function(){
    //sentencias
    console.log('ready')
})

$('#lista').append('<li>dos</li>')

$('#lista').prepend('<p>lorem ipsum...</p>    ')*/

/*ejercicio jquery
Comprobar que jQuery esta cargado
Crear un elemento “div” en el html y con jQuery agregarle la clase ‘’list”
Crear un elemento “ol” con 5 items “li” dentro, y con jQuery agregarles la clase ‘’list__item”*/

$(document).ready(function () {

    $('div').addClass('list')
    $('li').addClass('list__item')
})

/*Crear un elemento “ul” con 4 items “li” dentro, y con jQuery agregarles 10 items al final de la lista ( .append() )
Crear un elemento “ol” con 4 items “li” dentro, y con jQuery agregarles 10 items al inicio de la lista ( .prepend() )
Crear un elemento “div” con la clase “content” y con jQuery agregarle dentro un Parrafo con el texto “Hola Koder” (.html())
Agregar estilos al “div” con la clase “content” un color de fondo #333 (.css )
Agregar un elemento h1 al inicio del body “<h1>Empty</h1>” y cambiar el Texto por “Aprendiendo jQuery” (.text )*/

$(document).ready(function () {

    $('ul').append('<li>cinco</li>')
    $('ul').append('<li>seies</li>')
    $('ul').append('<li>siete</li>')
    $('ul').append('<li>ocho</li>')
    $('ul').append('<li>nueve</li>')
    $('ul').append('<li>diez</li>')
    $('ul').append('<li>once</li>')
    $('ul').append('<li>doce</li>')
    $('ul').append('<li>trece</li>')
    $('ul').append('<li>catorce</li>')
    
    $('ol').prepend('<li>diez</li>')
    $('ol').prepend('<li>nueve</li>')
    $('ol').prepend('<li>ocho</li>')
    $('ol').prepend('<li>siete</li>')
    $('ol').prepend('<li>seis</li>')
    $('ol').prepend('<li>cinco</li>')
    $('ol').prepend('<li>cuatro</li>')
    $('ol').prepend('<li>tres</li>')
    $('ol').prepend('<li>dos</li>')
    $('ol').prepend('<li>uno</li>')


    $('.content').html('<p>"Hola Koders"</p>')

    $('.content').css('background-color', '#333')

    $('h1').text('Aprendiendo jQuery')

})









