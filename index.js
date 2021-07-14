// function saludar() {
//     document.getElementById("result").innerHTML = "Funciona";
// }


const boton = document.querySelector('.boton');

boton.addEventListener('click', function () {

    console.log(this.innerHTML);

})