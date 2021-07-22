
var nameComplete = document.getElementById('nameComplete');
var email = document.getElementById('email').value;
var password = document.getElementById('password');
var error = document.getElementById('error');



function enviarForm(){

    console.log('guardando datos');

    var mensajeError = [];

    if(nameComplete.value === null || nameComplete.value === '') {
        mensajeError.push('ingresa tu nombre completo');
    } 

    if(email.value === null || email.value === '') {
        mensajeError.push('ingresa tu email');
    } 

    if(password.value === null || password.value === '') {
        mensajeError.push('ingresa tu password');
    }

    error.innerHTML = mensajeError.join(' , ');
    formulario.reset();

    return false;
}
