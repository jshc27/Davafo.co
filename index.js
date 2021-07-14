// function saludar() {
//     document.getElementById("result").innerHTML = "Funciona";
// }


const boton = document.querySelector('.boton');

boton.addEventListener('click', function () {

    console.log(this.innerHTML);

})


// var temporizador = setInterval(  function(){

//             setColor();
// }, 2000);

// setTimeout( function(){
//     setColor();
// }, 5000);


function setColor() {
    var  pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";

}