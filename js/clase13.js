
const sonidos = document.getElementById('sonidos');


$(document).ready(function(){
    $('#remover').click(function(){
        $(".contenido").slideToggle(1000, function(){
           sonidos.innerHTML += '<audio src="click.mp3" autoplay></audio>'
        });
             
    })

})



