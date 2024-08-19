var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu button');
menuBtn.addEventListener('click', () => {
menu.classList.toggle('opened')
})




// Agrega un evento de clic al botón con el ID 'siguienteBtn'
document.getElementById('inicio_sesion').addEventListener('click', function() {
// Redirige a la página 'index.html' al hacer clic en el botón
window.location.href = 'Log.html';
});

/* se utiliza para abrir un enlace
 en una nueva pestaña del navegador. 
 En este caso, abre un documento compartido 
 en SharePoint.*/

 function Info_ucc() {
    window.open('https://www.ucc.edu.co/ambientes-practicos-de-aprendizaje/Paginas/Cali/consultorio-Juridico.aspx');
}

function contactanosucc() {
    window.open('  https://www.ucc.edu.co/Paginas/Contacto.aspx');
}

/*animacion de las letras  */
 
$('#tagline').t({
    beep:false,
    caret:'<span style="color:hotpink;">•</span>',
    typing:function(elm,chr){
    if(chr.match(/\-trigger/))
        $('#pow-txt').show().delay(500).fadeOut(0);
    }
});


 

/* Boton  leer mas leer menos */
const articulo = document.querySelector("#contenido");
const button = document.querySelector("#leer-mas");
button.addEventListener("click", leerMas)
function leerMas(){
    if(articulo.className == "abierto"){
        //mostrar menos
        articulo.className = "";
        button.texContent = "Mostrar mas"

    }else{
        //mostrar menos
        articulo.className = "abierto";
        button.texContent = "Mostrar menos"
    }
}