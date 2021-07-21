"use strict"

var nameComplete = document.getElementById('nameComplete').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var error = document.getElementById('error');


function enviarForm(){
    console.log(nameComplete);
    console.log(email);
    console.log(password);

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

    error.innerHTML = mensajeError.join(', ');

    return false;
}